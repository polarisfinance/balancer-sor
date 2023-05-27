import { BigNumber as OldBigNumber, bnum, scale } from '../../utils/bignumber';
import { FxPoolPairData } from './fxPool';
import { formatFixed } from '@ethersproject/bignumber';

// Constants
export const CURVEMATH_MAX_DIFF = -0.000001000000000000024;
export const NEGATIVE_ONE = bnum('-1');
export const ONE = bnum('1');
export const ONE_TO_THE_SECOND_NUM = 100;
export const ONE_TO_THE_SECOND = BigInt(`${ONE_TO_THE_SECOND_NUM}`);
export const ONE_TO_THE_EIGHT_NUM = 100000000;
export const ONE_TO_THE_EIGHT = BigInt(`${ONE_TO_THE_EIGHT_NUM}`);
export const ONE_TO_THE_SIX_NUM = 1000000;
export const ONE_TO_THE_SIX = BigInt(`${ONE_TO_THE_SIX_NUM}`);
export const ONE_TO_THE_THIRTEEN_NUM = 10000000000000;
export const ONE_TO_THE_THIRTEEN = BigInt(`${ONE_TO_THE_THIRTEEN_NUM}`);
export const ONE_ETHER = scale(bnum('1'), 18);
export const ALMOST_ZERO = 0.0000000000000000001; // swapping within beta region has no slippage
const CURVEMATH_MAX = 0.25; //CURVEMATH MAX from contract

export enum CurveMathRevert {
    LowerHalt = 'CurveMath/lower-halt',
    UpperHalt = 'CurveMath/upper-halt',
    SwapInvariantViolation = 'CurveMath/swap-invariant-violation',
    SwapConvergenceFailed = 'CurveMath/swap-convergence-failed',
    CannotSwap = 'CannotSwap',
}

interface ParsedFxPoolData {
    alpha: number;
    beta: number;
    delta: number;
    epsilon: number;
    lambda: number;
    baseTokenRate: number;
    _oGLiq: number;
    _nGLiq: number;
    _oBals: number[];
    _nBals: number[];
    givenAmountInNumeraire: number;
}

interface ReservesInNumeraire {
    tokenInReservesInNumeraire: number;
    tokenOutReservesInNumeraire: number;
    _oGLiq: number;
}

const isUSDC = (address: string) => {
    if (
        address == '0x2791bca1f2de4661ed88a30c99a7a9449aa84174' ||
        address == '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48'
    ) {
        return true;
    } else {
        return false;
    }
};

const calculateGivenAmountInNumeraire = (
    isOriginSwap: boolean,
    poolPairData: FxPoolPairData,
    amount: number
) => {
    let calculatedNumeraireAmount;

    if (isOriginSwap) {
        // tokenIn is given
        calculatedNumeraireAmount = viewNumeraireAmount(
            amount,
            poolPairData.tokenInLatestFXPrice.toNumber()
        );
    } else {
        // tokenOut is given
        calculatedNumeraireAmount = viewNumeraireAmount(
            amount,
            poolPairData.tokenOutLatestFXPrice.toNumber()
        );
    }

    return calculatedNumeraireAmount;
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const convertToNumber = (
    amount: number,
    baseDecimal: number | string
) => {
    if (typeof baseDecimal === 'string') {
        return Number(bnum(amount).div(bnum(ONE_ETHER)));
    } else {
        return amount / baseDecimal;
    }
};

export const poolBalancesToNumeraire = (
    poolPairData: FxPoolPairData
): ReservesInNumeraire => {
    let tokenInNumeraire, tokenOutNumeraire;

    if (isUSDC(poolPairData.tokenIn)) {
        tokenInNumeraire = convertToNumber(
            viewNumeraireAmount(
                Number(poolPairData.balanceIn),
                poolPairData.tokenInLatestFXPrice.toNumber()
            ),
            getBaseDecimals(poolPairData.decimalsIn)
        );
        tokenOutNumeraire = convertToNumber(
            viewNumeraireAmount(
                Number(poolPairData.balanceOut),
                poolPairData.tokenOutLatestFXPrice.toNumber()
            ),
            getBaseDecimals(poolPairData.decimalsOut)
        );
    } else {
        tokenInNumeraire = convertToNumber(
            viewNumeraireAmount(
                Number(poolPairData.balanceOut),
                poolPairData.tokenOutLatestFXPrice.toNumber()
            ),
            getBaseDecimals(poolPairData.decimalsOut)
        );

        tokenOutNumeraire = convertToNumber(
            viewNumeraireAmount(
                Number(poolPairData.balanceIn),
                poolPairData.tokenInLatestFXPrice.toNumber()
            ),
            getBaseDecimals(poolPairData.decimalsIn)
        );
    }

    return {
        tokenInReservesInNumeraire: tokenInNumeraire,
        tokenOutReservesInNumeraire: tokenOutNumeraire,
        _oGLiq: tokenInNumeraire + tokenOutNumeraire,
    };
};
// everything is in order of USDC, base token
const getParsedFxPoolData = (
    amount: OldBigNumber,
    poolPairData: FxPoolPairData,
    isOriginSwap: boolean
): ParsedFxPoolData => {
    // reserves are in raw amount, they converted to numeraire
    const baseReserves = isUSDC(poolPairData.tokenIn)
        ? convertToNumber(
              viewNumeraireAmount(
                  Number(poolPairData.balanceOut),
                  poolPairData.tokenOutLatestFXPrice.toNumber()
              ),
              getBaseDecimals(poolPairData.decimalsOut)
          )
        : convertToNumber(
              viewNumeraireAmount(
                  Number(poolPairData.balanceIn),
                  poolPairData.tokenInLatestFXPrice.toNumber()
              ),
              getBaseDecimals(poolPairData.decimalsIn)
          );

    // reserves are not in wei
    const usdcReserves = isUSDC(poolPairData.tokenIn)
        ? convertToNumber(
              viewNumeraireAmount(
                  Number(poolPairData.balanceIn),
                  poolPairData.tokenInLatestFXPrice.toNumber()
              ),
              getBaseDecimals(poolPairData.decimalsIn)
          )
        : convertToNumber(
              viewNumeraireAmount(
                  Number(poolPairData.balanceOut),
                  poolPairData.tokenOutLatestFXPrice.toNumber()
              ),
              getBaseDecimals(poolPairData.decimalsOut)
          );

    // rate is converted from chainlink to the actual rate in decimals
    const baseTokenRate = isUSDC(poolPairData.tokenIn)
        ? poolPairData.tokenOutLatestFXPrice.toNumber()
        : poolPairData.tokenInLatestFXPrice.toNumber();

    // given amount in or out converted to numeraire
    const givenAmountInNumeraire = calculateGivenAmountInNumeraire(
        isOriginSwap,
        poolPairData,
        Number(amount.toString())
    );

    return {
        alpha: Number(formatFixed(poolPairData.alpha, 18)),
        beta: Number(formatFixed(poolPairData.beta, 18)),
        delta: Number(formatFixed(poolPairData.delta, 18)),
        epsilon: Number(formatFixed(poolPairData.epsilon, 18)),
        lambda: Number(formatFixed(poolPairData.lambda, 18)),
        baseTokenRate: baseTokenRate,
        _oGLiq: baseReserves + usdcReserves,
        _nGLiq: baseReserves + usdcReserves,
        _oBals: [usdcReserves, baseReserves],
        _nBals: isUSDC(poolPairData.tokenIn)
            ? [
                  usdcReserves + givenAmountInNumeraire,
                  baseReserves - givenAmountInNumeraire,
              ]
            : [
                  usdcReserves - givenAmountInNumeraire,
                  baseReserves + givenAmountInNumeraire,
              ],

        givenAmountInNumeraire: givenAmountInNumeraire,
    };
};

// get base decimals for
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const getBaseDecimals = (decimals: number) => {
    switch (decimals) {
        case 6: {
            return ONE_TO_THE_SIX_NUM;
        }

        case 2: {
            return ONE_TO_THE_SECOND_NUM;
        }

        case 18: {
            return ONE_ETHER.toString();
        }

        default: {
            return ONE_ETHER.toString();
        }
    }
};

// Base Assimilator Functions
// calculations are from the BaseToUsdAssimilator
export const viewRawAmount = (_amount: number, rate: number): OldBigNumber => {
    return bnum(_amount / rate);
};

const viewNumeraireAmount = (_amount: number, rate: number): number => {
    return _amount * rate;
};

// Curve Math
// calculations are from CurveMath.sol
const calculateMicroFee = (
    _bal: number,
    _ideal: number,
    _beta: number,
    _delta: number
): number => {
    let _threshold, _feeMargin;
    let fee_ = 0;

    if (_bal < _ideal) {
        _threshold = _ideal * (1 - _beta); // CURVEMATH ONE

        if (_bal < _threshold) {
            _feeMargin = _threshold - _bal;
            fee_ = _feeMargin / _ideal;
            fee_ = fee_ * _delta;

            if (fee_ > CURVEMATH_MAX) {
                fee_ = CURVEMATH_MAX;
            }

            fee_ = fee_ * _feeMargin;
        } else {
            fee_ = 0;
        }
    } else {
        _threshold = _ideal * (1 + _beta); // CURVEMATH_ONE

        if (_bal > _threshold) {
            _feeMargin = _bal - _threshold;

            fee_ = _feeMargin / _ideal;
            fee_ = fee_ * _delta;

            if (fee_ > CURVEMATH_MAX) fee_ = CURVEMATH_MAX;

            fee_ = fee_ * _feeMargin;
        } else {
            fee_ = 0;
        }
    }

    return fee_;
};

const calculateFee = (
    _gLiq: number,
    _bals: number[],
    _beta: number,
    _delta: number,
    _weights: number[]
): number => {
    const _length = _bals.length;
    let psi_ = 0;

    for (let i = 0; i < _length; i++) {
        const _ideal = _gLiq * _weights[i];

        // keep away from wei values like how the contract do it
        psi_ = psi_ + calculateMicroFee(_bals[i], _ideal, _beta, _delta);
    }

    return psi_;
};

// return outputAmount and ngliq
const calculateTrade = (
    _oGLiq: number,
    _nGLiq: number,
    _oBals: number[],
    _nBals: number[],
    _inputAmt: number,
    _outputIndex: number,
    poolPairData: ParsedFxPoolData
): [number, number] => {
    let outputAmt_;
    const _weights: number[] = [0.5, 0.5]; // const for now since all weights are 0.5

    const alpha = poolPairData.alpha;
    const beta = poolPairData.beta;
    const delta = poolPairData.delta;
    const lambda = poolPairData.lambda;

    outputAmt_ = -_inputAmt;

    const _omega = calculateFee(_oGLiq, _oBals, beta, delta, _weights);

    let _psi: number;

    for (let i = 0; i < 32; i++) {
        _psi = calculateFee(_nGLiq, _nBals, beta, delta, _weights);

        const prevAmount = outputAmt_;

        outputAmt_ =
            _omega < _psi
                ? -(_inputAmt + (_omega - _psi))
                : -(_inputAmt + lambda * (_omega - _psi));

        if (
            outputAmt_ / ONE_TO_THE_THIRTEEN_NUM ==
            prevAmount / ONE_TO_THE_THIRTEEN_NUM
        ) {
            _nGLiq = _oGLiq + _inputAmt + outputAmt_;

            _nBals[_outputIndex] = _oBals[_outputIndex] + outputAmt_;

            // throws error already, removed if statement
            enforceSwapInvariant(_oGLiq, _omega, _nGLiq, _psi);
            enforceHalts(_oGLiq, _nGLiq, _oBals, _nBals, _weights, alpha);

            return [outputAmt_, _nGLiq];
        } else {
            _nGLiq = _oGLiq + _inputAmt + outputAmt_;

            _nBals[_outputIndex] = _oBals[_outputIndex] + outputAmt_;
        }
    }

    throw new Error(CurveMathRevert.SwapConvergenceFailed);
};

// invariant enforcement
const enforceHalts = (
    _oGLiq: number,
    _nGLiq: number,
    _oBals: number[],
    _nBals: number[],
    _weights: number[],
    alpha: number
): boolean => {
    const _length = _nBals.length;
    const _alpha = alpha;

    for (let i = 0; i < _length; i++) {
        const _nIdeal = _nGLiq * _weights[i];

        if (_nBals[i] > _nIdeal) {
            const _upperAlpha = 1 + _alpha;

            const _nHalt = _nIdeal * _upperAlpha;

            if (_nBals[i] > _nHalt) {
                const _oHalt = _oGLiq * _weights[i] * _upperAlpha;

                if (_oBals[i] < _oHalt) {
                    throw new Error(CurveMathRevert.UpperHalt);
                }
                if (_nBals[i] - _nHalt > _oBals[i] - _oHalt) {
                    throw new Error(CurveMathRevert.UpperHalt);
                }
            }
        } else {
            const _lowerAlpha = 1 - _alpha;

            const _nHalt = _nIdeal * _lowerAlpha;

            if (_nBals[i] < _nHalt) {
                let _oHalt = _oGLiq * _weights[i];
                _oHalt = _oHalt * _lowerAlpha;

                if (_oBals[i] > _oHalt) {
                    throw new Error(CurveMathRevert.LowerHalt);
                }
                if (_nHalt - _nBals[i] > _oHalt - _oBals[i]) {
                    throw new Error(CurveMathRevert.LowerHalt);
                }
            }
        }
    }
    return true;
};

const enforceSwapInvariant = (
    _oGLiq: number,
    _omega: number,
    _nGLiq: number,
    _psi: number
): boolean => {
    const _nextUtil = _nGLiq - _psi;

    const _prevUtil = _oGLiq - _omega;

    const _diff = _nextUtil - _prevUtil;

    // from int128 private constant MAX_DIFF = -0x10C6F7A0B5EE converted to plain decimals
    if (0 < _diff || _diff >= CURVEMATH_MAX_DIFF) {
        return true;
    } else {
        throw new Error(CurveMathRevert.SwapInvariantViolation);
    }
};

// Exported functions

// origin swap
export function _exactTokenInForTokenOut(
    amount: OldBigNumber,
    poolPairData: FxPoolPairData
): OldBigNumber {
    const parsedFxPoolData = getParsedFxPoolData(amount, poolPairData, true);

    const targetAmountInNumeraire = parsedFxPoolData.givenAmountInNumeraire;

    if (poolPairData.tokenIn === poolPairData.tokenOut) {
        return viewRawAmount(
            targetAmountInNumeraire,
            poolPairData.tokenInLatestFXPrice.toNumber()
        ); // must be the token out
    }

    const _oGLiq = parsedFxPoolData._oGLiq;
    const _nGLiq = parsedFxPoolData._nGLiq;
    const _oBals = parsedFxPoolData._oBals;
    const _nBals = parsedFxPoolData._nBals;

    const _amt = calculateTrade(
        _oGLiq, // _oGLiq
        _nGLiq, // _nGLiq
        _oBals, // _oBals
        _nBals, // _nBals
        targetAmountInNumeraire, // input amount
        isUSDC(poolPairData.tokenIn) ? 1 : 0, // if USDC return base token (index 1), else return 0 for USDC out
        parsedFxPoolData
    );

    if (_amt === undefined) {
        throw new Error(CurveMathRevert.CannotSwap);
    } else {
        const epsilon = parsedFxPoolData.epsilon;
        const _amtWithFee = _amt[0] * (1 - epsilon); // fee retained by the pool

        return viewRawAmount(
            Math.abs(_amtWithFee),
            poolPairData.tokenOutLatestFXPrice.toNumber()
        );
    }
}

// target swap
export function _tokenInForExactTokenOut(
    amount: OldBigNumber,
    poolPairData: FxPoolPairData
): OldBigNumber {
    // const amountIn = scale(amount, poolPairData.decimalsOut);
    const parsedFxPoolData = getParsedFxPoolData(amount, poolPairData, false);
    const targetAmountInNumeraire = -parsedFxPoolData.givenAmountInNumeraire;

    if (poolPairData.tokenIn === poolPairData.tokenOut) {
        viewRawAmount(
            // poolPairData.tokenOut as TokenSymbol,
            targetAmountInNumeraire,
            poolPairData.tokenOutLatestFXPrice.toNumber()
        ); // must be the token out
    }

    const _oGLiq = parsedFxPoolData._oGLiq;
    const _nGLiq = parsedFxPoolData._nGLiq;
    const _oBals = parsedFxPoolData._oBals;
    const _nBals = parsedFxPoolData._nBals;

    const _amt = calculateTrade(
        _oGLiq, // _oGLiq
        _nGLiq, // _nGLiq
        _oBals, // _oBals
        _nBals, // _nBals
        targetAmountInNumeraire,
        isUSDC(poolPairData.tokenIn) ? 0 : 1, // if USDC return 0 else return 1 for base token
        parsedFxPoolData
    );

    if (_amt === undefined) {
        throw new Error(CurveMathRevert.CannotSwap);
    } else {
        const epsilon = Number(formatFixed(poolPairData.epsilon, 18));

        const _amtWithFee = _amt[0] * (1 + epsilon); // fee retained by the pool

        return viewRawAmount(
            Math.abs(_amtWithFee),
            poolPairData.tokenInLatestFXPrice.toNumber()
        ); // must be the token out
    }
}

export const spotPriceBeforeSwap = (
    amount: OldBigNumber,
    poolPairData: FxPoolPairData
): OldBigNumber => {
    // input amount 1 XSGD to get the output in USDC
    const inputAmountInNumeraire = 1;
    const parsedFxPoolData = getParsedFxPoolData(amount, poolPairData, true);

    const _oGLiq = parsedFxPoolData._oGLiq;
    const _nGLiq = parsedFxPoolData._nGLiq;
    const _oBals = parsedFxPoolData._oBals;
    const _nBals = parsedFxPoolData._nBals;

    const outputAmountInNumeraire = calculateTrade(
        _oGLiq, // _oGLiq
        _nGLiq, // _nGLiq
        _oBals, // _oBals
        _nBals, // _nBals
        1, // input amount
        0, // always output in USDC
        parsedFxPoolData
    );

    return bnum(
        ((Math.abs(outputAmountInNumeraire[0]) *
            (1 - parsedFxPoolData.epsilon)) /
            Math.abs(inputAmountInNumeraire)) *
            parsedFxPoolData.baseTokenRate
    );
};

// spot price after origin swap
export const _spotPriceAfterSwapExactTokenInForTokenOut = (
    poolPairData: FxPoolPairData,
    amount: OldBigNumber
): OldBigNumber => {
    const parsedFxPoolData = getParsedFxPoolData(amount, poolPairData, true);

    const targetAmountInNumeraire = parsedFxPoolData.givenAmountInNumeraire;

    const _oGLiq = parsedFxPoolData._oGLiq;
    const _nBals = parsedFxPoolData._nBals;
    const currentRate = parsedFxPoolData.baseTokenRate;
    const beta = parsedFxPoolData.beta;
    const epsilon = parsedFxPoolData.epsilon;
    const _nGLiq = parsedFxPoolData._nGLiq;
    const _oBals = parsedFxPoolData._oBals;

    const outputAfterTrade = calculateTrade(
        _oGLiq, // _oGLiq
        _nGLiq, // _nGLiq
        _oBals, // _oBals
        _nBals, // _nBals
        targetAmountInNumeraire, // input amount
        isUSDC(poolPairData.tokenIn) ? 1 : 0, // if USDC return base token (index 1), else return 0 for USDC out
        parsedFxPoolData
    );

    const outputAmount = outputAfterTrade[0];

    const maxBetaLimit: number = (1 + beta) * 0.5 * _oGLiq;

    const minBetaLimit: number = (1 - beta) * 0.5 * _oGLiq;

    if (isUSDC(poolPairData.tokenIn)) {
        // token[0] to token [1] in originswap
        const oBals0after = _nBals[0];

        const oBals1after = _nBals[1];

        if (oBals1after < minBetaLimit && oBals0after > maxBetaLimit) {
            // returns 0 because  Math.abs(targetAmountInNumeraire)) * currentRate
            // used that function with a 0 amount to get a market spot price for the pool
            // which is used in front end display.

            return amount.isZero()
                ? spotPriceBeforeSwap(amount, poolPairData)
                : bnum(
                      (Math.abs(outputAmount * (1 - epsilon)) /
                          Math.abs(targetAmountInNumeraire)) *
                          currentRate
                  );
        } else {
            return bnum(currentRate * (1 - epsilon));
        }
    } else {
        // if usdc is tokenOut
        //  token[1] to token [0] in originswap
        const oBals0after = _nBals[1];

        const oBals1after = _nBals[0];

        if (oBals1after < minBetaLimit && oBals0after > maxBetaLimit) {
            if (amount.isZero())
                return spotPriceBeforeSwap(amount, poolPairData);

            const ratioOfOutputAndInput =
                Math.abs(outputAmount * (1 - epsilon)) /
                Math.abs(targetAmountInNumeraire);

            return bnum(ratioOfOutputAndInput * currentRate);
        } else {
            return bnum(currentRate * (1 - epsilon));
        }
    }
};

// spot price after target swap
// the less the normalized liquidity
// we must have a absolute of the derivative price
export const _spotPriceAfterSwapTokenInForExactTokenOut = (
    poolPairData: FxPoolPairData,
    amount: OldBigNumber
): OldBigNumber => {
    const parsedFxPoolData = getParsedFxPoolData(amount, poolPairData, false);

    const targetAmountInNumeraire = -parsedFxPoolData.givenAmountInNumeraire;

    const _oGLiq = parsedFxPoolData._oGLiq;
    const _nBals = parsedFxPoolData._nBals;
    const currentRate = parsedFxPoolData.baseTokenRate;

    const beta = parsedFxPoolData.beta;
    const epsilon = parsedFxPoolData.epsilon;

    const _nGLiq = parsedFxPoolData._nGLiq;
    const _oBals = parsedFxPoolData._oBals;

    const outputAfterTrade = calculateTrade(
        _oGLiq, // _oGLiq
        _nGLiq, // _nGLiq
        _oBals, // _oBals
        _nBals, // _nBals
        targetAmountInNumeraire, // input amount
        isUSDC(poolPairData.tokenIn) ? 0 : 1, // if USDC return 0 else return 1 for base token
        parsedFxPoolData
    );

    const outputAmount = outputAfterTrade[0];

    const maxBetaLimit: number = (1 + beta) * 0.5 * _oGLiq;

    const minBetaLimit: number = (1 - beta) * 0.5 * _oGLiq;

    if (isUSDC(poolPairData.tokenIn)) {
        // token[0] to token [1] in originswap
        const oBals0after = _nBals[0];
        const oBals1after = _nBals[1];

        if (oBals1after < minBetaLimit && oBals0after > maxBetaLimit) {
            return bnum(
                (Math.abs(targetAmountInNumeraire) /
                    Math.abs(outputAmount * (1 + epsilon))) *
                    currentRate
            );
        } else {
            return bnum(currentRate * (1 - epsilon));
        }
    } else {
        //  token[1] to token [0] in originswap
        const oBals0after = _nBals[0];
        const oBals1after = _nBals[1];

        const isBeyondMinBeta = oBals0after < minBetaLimit;
        const isBeyondMaxBeta = oBals1after > maxBetaLimit;

        if (isBeyondMinBeta && isBeyondMaxBeta) {
            return bnum(
                (Math.abs(targetAmountInNumeraire) /
                    Math.abs(outputAmount * (1 + epsilon))) *
                    currentRate
            );
        } else {
            return bnum(currentRate * (1 - epsilon));
        }
    }
};

// origin swap
export const _derivativeSpotPriceAfterSwapExactTokenInForTokenOut = (
    amount: OldBigNumber,
    poolPairData: FxPoolPairData
): OldBigNumber => {
    const x = spotPriceBeforeSwap(bnum('1'), poolPairData);
    const y = _spotPriceAfterSwapExactTokenInForTokenOut(poolPairData, amount);
    const yMinusX = y.minus(x);
    const ans = yMinusX.div(x);
    return ans.isZero() ? bnum(ALMOST_ZERO) : ans.abs();
};

// target swap
export const _derivativeSpotPriceAfterSwapTokenInForExactTokenOut = (
    amount: OldBigNumber,
    poolPairData: FxPoolPairData
): OldBigNumber => {
    const x = spotPriceBeforeSwap(bnum('1'), poolPairData);
    const y = _spotPriceAfterSwapTokenInForExactTokenOut(poolPairData, amount);
    const yMinusX = y.minus(x);
    const ans = yMinusX.div(x);
    return ans.abs();
};
