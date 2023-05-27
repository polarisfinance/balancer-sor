import { BigNumber as BigNumber$1, BigNumberish } from '@ethersproject/bignumber';
import { Provider } from '@ethersproject/providers';
import { BigNumber } from 'bignumber.js';
export { BigNumber as OldBigNumber } from 'bignumber.js';

declare const ZERO: BigNumber;
declare function bnum(val: string | number | BigNumber): BigNumber;

interface SorConfig {
    chainId: number;
    vault: string;
    weth: string;
    connectingTokens?: {
        symbol: string;
        address: string;
    }[];
    staBal3Pool?: {
        id: string;
        address: string;
    };
    usdcConnectingPool?: {
        id: string;
        usdc: string;
    };
    wETHwstETH?: {
        id: string;
        address: string;
    };
    lbpRaisingTokens?: string[];
}
declare type NoNullableField<T> = {
    [P in keyof T]: NonNullable<T[P]>;
};
declare enum SwapTypes {
    SwapExactIn = 0,
    SwapExactOut = 1
}
declare enum PoolTypes {
    Weighted = 0,
    Stable = 1,
    Element = 2,
    MetaStable = 3,
    Linear = 4,
    Gyro2 = 5,
    Gyro3 = 6,
    GyroE = 7,
    Fx = 8
}
interface SwapOptions {
    gasPrice: BigNumber$1;
    swapGas: BigNumber$1;
    timestamp: number;
    maxPools: number;
    poolTypeFilter: PoolFilter;
    forceRefresh: boolean;
}
declare type PoolPairBase = {
    id: string;
    address: string;
    poolType: PoolTypes;
    swapFee: BigNumber$1;
    tokenIn: string;
    tokenOut: string;
    decimalsIn: number;
    decimalsOut: number;
    balanceIn: BigNumber$1;
    balanceOut: BigNumber$1;
};
interface Swap {
    pool: string;
    tokenIn: string;
    tokenOut: string;
    swapAmount?: string;
    limitReturnAmount?: string;
    maxPrice?: string;
    tokenInDecimals: number;
    tokenOutDecimals: number;
    returnAmount?: string;
}
interface SubgraphPoolBase {
    id: string;
    address: string;
    poolType: string;
    poolTypeVersion?: number;
    swapFee: string;
    swapEnabled: boolean;
    totalShares: string;
    tokens: SubgraphToken[];
    tokensList: string[];
    totalWeight?: string;
    amp?: string;
    expiryTime?: number;
    unitSeconds?: number;
    principalToken?: string;
    baseToken?: string;
    mainIndex?: number;
    wrappedIndex?: number;
    lowerTarget?: string;
    upperTarget?: string;
    sqrtAlpha?: string;
    sqrtBeta?: string;
    root3Alpha?: string;
    alpha?: string;
    beta?: string;
    c?: string;
    s?: string;
    lambda?: string;
    tauAlphaX?: string;
    tauAlphaY?: string;
    tauBetaX?: string;
    tauBetaY?: string;
    u?: string;
    v?: string;
    w?: string;
    z?: string;
    dSq?: string;
    tokenRates?: string[];
    delta?: string;
    epsilon?: string;
}
declare type SubgraphToken = {
    address: string;
    balance: string;
    decimals: number;
    priceRate: string;
    weight: string | null;
    token?: SubgraphTokenData;
};
declare type SubgraphTokenData = {
    latestFXPrice?: string;
};
interface SwapV2 {
    poolId: string;
    assetInIndex: number;
    assetOutIndex: number;
    amount: string;
    userData: string;
    returnAmount?: string;
}
interface SwapInfo {
    tokenAddresses: string[];
    swaps: SwapV2[];
    swapAmount: BigNumber$1;
    swapAmountForSwaps: BigNumber$1;
    returnAmount: BigNumber$1;
    returnAmountFromSwaps: BigNumber$1;
    returnAmountConsideringFees: BigNumber$1;
    tokenIn: string;
    tokenInForSwaps?: string;
    tokenOut: string;
    tokenOutFromSwaps?: string;
    marketSp: string;
}
interface PoolDictionary {
    [poolId: string]: PoolBase;
}
interface PoolPairDictionary {
    [tokenInOut: string]: PoolPairBase;
}
interface hopDictionary {
    [hopToken: string]: Set<string>;
}
interface NewPath {
    id: string;
    swaps: Swap[];
    poolPairData: PoolPairBase[];
    limitAmount: BigNumber$1;
    pools: PoolBase[];
    filterEffectivePrice?: BigNumber;
}
declare enum PoolFilter {
    All = "All",
    Weighted = "Weighted",
    Stable = "Stable",
    MetaStable = "MetaStable",
    LiquidityBootstrapping = "LiquidityBootstrapping",
    Investment = "Investment",
    Element = "Element",
    StablePhantom = "StablePhantom",
    ComposableStable = "ComposableStable",
    Gyro2 = "Gyro2",
    Gyro3 = "Gyro3",
    GyroE = "GyroE",
    AaveLinear = "AaveLinear",
    Linear = "Linear",
    EulerLinear = "EulerLinear",
    ERC4626Linear = "ERC4626Linear",
    BeefyLinear = "BeefyLinear",
    GearboxLinear = "GearboxLinear",
    MidasLinear = "MidasLinear",
    ReaperLinear = "ReaperLinear",
    SiloLinear = "SiloLinear",
    TetuLinear = "TetuLinear",
    YearnLinear = "YearnLinear"
}
interface PoolBase<D extends PoolPairBase = PoolPairBase> {
    poolType: PoolTypes;
    id: string;
    address: string;
    tokensList: string[];
    tokens: {
        address: string;
        balance: string;
        decimals: number;
    }[];
    totalShares: BigNumber$1;
    mainIndex?: number;
    isLBP?: boolean;
    parsePoolPairData: (tokenIn: string, tokenOut: string) => D;
    getNormalizedLiquidity: (poolPairData: D) => BigNumber;
    getLimitAmountSwap: (poolPairData: D, swapType: SwapTypes) => BigNumber;
    /**
     * @param {string} token - Address of token.
     * @param {BigNumber} newBalance - New balance of token. EVM scaled.
     */
    updateTokenBalanceForPool: (token: string, newBalance: BigNumber$1) => void;
    updateTotalShares: (newTotalShares: BigNumber$1) => void;
    _exactTokenInForTokenOut: (poolPairData: D, amount: BigNumber) => BigNumber;
    _tokenInForExactTokenOut: (poolPairData: D, amount: BigNumber) => BigNumber;
    _calcTokensOutGivenExactBptIn(bptAmountIn: BigNumber$1): BigNumber$1[];
    _calcBptOutGivenExactTokensIn(amountsIn: BigNumber$1[]): BigNumber$1;
    _spotPriceAfterSwapExactTokenInForTokenOut: (poolPairData: D, amount: BigNumber) => BigNumber;
    _spotPriceAfterSwapTokenInForExactTokenOut: (poolPairData: D, amount: BigNumber) => BigNumber;
    _derivativeSpotPriceAfterSwapExactTokenInForTokenOut: (poolPairData: D, amount: BigNumber) => BigNumber;
    _derivativeSpotPriceAfterSwapTokenInForExactTokenOut: (poolPairData: D, amount: BigNumber) => BigNumber;
}
interface TokenPriceService {
    /**
     * This should return the price of the native asset (ETH) in the token defined by tokenAddress.
     * Example: BAL = $20 USD, ETH = $4,000 USD, then 1 ETH = 200 BAL. This function would return 200.
     * @param tokenAddress
     */
    getNativeAssetPriceInToken(tokenAddress: string): Promise<string>;
}
interface PoolDataService {
    getPools(query?: GraphQLArgs): Promise<SubgraphPoolBase[]>;
}
declare type FundManagement = {
    sender: string;
    recipient: string;
    fromInternalBalance: boolean;
    toInternalBalance: boolean;
};
declare type GraphQLFilterOperator = 'gt' | 'lt' | 'eq' | 'in' | 'not_in' | 'contains';
declare type GraphQLFilter = {
    [operator in GraphQLFilterOperator]?: any;
};
interface GraphQLArgs {
    chainId?: number;
    first?: number;
    skip?: number;
    nextToken?: string;
    orderBy?: string;
    orderDirection?: string;
    block?: {
        number?: number;
    };
    where?: Record<string, GraphQLFilter>;
}

declare class RouteProposer {
    private readonly config;
    cache: Record<string, {
        paths: NewPath[];
    }>;
    private readonly pathGraph;
    constructor(config: SorConfig);
    initPathGraphWithPools(pools: SubgraphPoolBase[]): void;
    /**
     * Given a list of pools and a desired input/output, returns a set of possible paths to route through
     */
    getCandidatePaths(tokenIn: string, tokenOut: string, swapType: SwapTypes, pools: SubgraphPoolBase[], swapOptions: SwapOptions): NewPath[];
    /**
     * Given a pool dictionary and a desired input/output, returns a set of possible paths to route through.
     * @param {string} tokenIn - Address of tokenIn
     * @param {string} tokenOut - Address of tokenOut
     * @param {SwapTypes} swapType - SwapExactIn where the amount of tokens in (sent to the Pool) is known or SwapExactOut where the amount of tokens out (received from the Pool) is known.
     * @param {PoolDictionary} poolsAllDict - Dictionary of pools.
     * @param {number }maxPools - Maximum number of pools to hop through.
     * @returns {NewPath[]} Array of possible paths sorted by liquidity.
     */
    getCandidatePathsFromDict(tokenIn: string, tokenOut: string, swapType: SwapTypes, poolsAllDict: PoolDictionary): NewPath[];
}

declare class SwapCostCalculator {
    private readonly tokenPriceService;
    private readonly tokenPriceCache;
    constructor(config: SorConfig, tokenPriceService: TokenPriceService);
    /**
     * Calculate the cost of spending a certain amount of gas in terms of a token.
     * This allows us to determine whether an increased amount of tokens gained
     * is worth spending this extra gas (e.g. by including an extra pool in a swap)
     */
    convertGasCostToToken(tokenAddress: string, tokenDecimals: number, gasPriceWei: BigNumber$1, swapGas?: BigNumber$1): Promise<BigNumber$1>;
    /**
     * @param tokenAddress - the address of the token for which to express the native asset in terms of
     * @param tokenPrice - the price of the native asset in terms of the provided token
     */
    setNativeAssetPriceInToken(tokenAddress: string, tokenPrice: string): void;
    /**
     * @param tokenAddress - the address of the token for which to express the native asset in terms of
     */
    private getNativeAssetPriceInToken;
}

declare class SOR {
    provider: Provider;
    private readonly config;
    private readonly poolCacher;
    readonly routeProposer: RouteProposer;
    readonly swapCostCalculator: SwapCostCalculator;
    private useBpt;
    private readonly defaultSwapOptions;
    /**
     * @param {Provider} provider - Provider.
     * @param {SorConfig} config - Chain specific configuration for the SOR.
     * @param {PoolDataService} poolDataService - Generic service that fetches pool data from an external data source.
     * @param {TokenPriceService} tokenPriceService - Generic service that fetches token prices from an external price feed. Used in calculating swap cost.
     */
    constructor(provider: Provider, config: SorConfig, poolDataService: PoolDataService, tokenPriceService: TokenPriceService);
    getPools(useBpts?: boolean): SubgraphPoolBase[];
    /**
     * fetchPools Retrieves pools information and saves to internal pools cache.
     * @returns {boolean} True if pools fetched successfully, False if not.
     */
    fetchPools(queryArgs?: GraphQLArgs): Promise<boolean>;
    /**
     * getSwaps Retrieve information for best swap tokenIn>tokenOut.
     * @param {string} tokenIn - Address of tokenIn.
     * @param {string} tokenOut - Address of tokenOut.
     * @param {SwapTypes} swapType - SwapExactIn where the amount of tokens in (sent to the Pool) is known or SwapExactOut where the amount of tokens out (received from the Pool) is known.
     * @param {BigNumberish} swapAmount - Either amountIn or amountOut depending on the `swapType` value.
     * @param swapOptions
     * @param useBpts Set to true to consider join/exit weighted pool paths (these will need formatted and submitted via Relayer)
     * @returns Swap information including return amount and swaps structure to be submitted to Vault.
     */
    getSwaps(tokenIn: string, tokenOut: string, swapType: SwapTypes, swapAmount: BigNumberish, swapOptions?: Partial<SwapOptions>, useBpts?: boolean): Promise<SwapInfo>;
    /**
     * getCostOfSwapInToken Calculates and saves price of a swap in outputToken denomination. Used to determine if extra swaps are cost effective.
     * @param {string} outputToken - Address of outputToken.
     * @param {number} outputTokenDecimals - Decimals of outputToken.
     * @param {BigNumber} gasPrice - Gas price used to calculate cost.
     * @param {BigNumber} swapGas - Gas cost of a swap. Default=85000.
     * @returns {BigNumber} Price of a swap in outputToken denomination.
     */
    getCostOfSwapInToken(outputToken: string, outputTokenDecimals: number, gasPrice: BigNumber$1, swapGas?: BigNumber$1): Promise<BigNumber$1>;
    private processSwaps;
    /**
     * Find optimal routes for trade from given candidate paths
     */
    private getBestPaths;
}

declare function BPTForTokensZeroPriceImpact$1(balances: BigNumberish[], decimals: number[], normalizedWeights: BigNumberish[], amounts: BigNumberish[], bptTotalSupply: BigNumberish): BigNumber$1;

declare function BPTForTokensZeroPriceImpact(allBalances: BigNumberish[], decimals: number[], amounts: BigNumberish[], // This has to have the same lenght as allBalances
bptTotalSupply: BigNumberish, amp: BigNumberish): BigNumber$1;

/**
 * @returns an array of deduplicated token addresses used in the provided swaps
 */
declare const getTokenAddressesForSwap: (swaps: Swap[]) => string[];
/**
 * Formats a sequence of swaps to the format expected by the Balance Vault.
 * @dev Intermediate swaps' amounts are replaced with the sentinel value of zero
 *      and exact output sequences are reversed.
 * @param swapKind - a SwapTypes enum for whether the swap has an exact input or exact output
 * @param sequence - a sequence of swaps which form a path from the input token to the output token
 * @param tokenAddresses - an array of all the token address which are involved in the batchSwap
 * @returns
 */
declare const formatSequence: (swapKind: SwapTypes, sequence: Swap[], tokenAddresses: string[]) => SwapV2[];

declare function parseToPoolsDict(pools: SubgraphPoolBase[], timestamp: number): PoolDictionary;

declare enum PairTypes$2 {
    BptToToken = 0,
    TokenToBpt = 1,
    TokenToToken = 2
}
declare type WeightedPoolToken = Pick<NoNullableField<SubgraphToken>, 'address' | 'balance' | 'decimals' | 'weight'>;
declare type WeightedPoolPairData = PoolPairBase & {
    pairType: PairTypes$2;
    weightIn: BigNumber$1;
    weightOut: BigNumber$1;
};
declare class WeightedPool implements PoolBase<WeightedPoolPairData> {
    poolType: PoolTypes;
    id: string;
    address: string;
    swapFee: BigNumber$1;
    totalShares: BigNumber$1;
    tokens: WeightedPoolToken[];
    totalWeight: BigNumber$1;
    tokensList: string[];
    MAX_IN_RATIO: BigNumber$1;
    MAX_OUT_RATIO: BigNumber$1;
    isLBP: boolean;
    static fromPool(pool: SubgraphPoolBase, isLBP?: boolean): WeightedPool;
    constructor(id: string, address: string, swapFee: string, totalWeight: string, totalShares: string, tokens: WeightedPoolToken[], tokensList: string[]);
    parsePoolPairData(tokenIn: string, tokenOut: string): WeightedPoolPairData;
    getNormalizedWeights(): bigint[];
    getNormalizedLiquidity(poolPairData: WeightedPoolPairData): BigNumber;
    getLimitAmountSwap(poolPairData: PoolPairBase, swapType: SwapTypes): BigNumber;
    updateTokenBalanceForPool(token: string, newBalance: BigNumber$1): void;
    updateTotalShares(newTotalShares: BigNumber$1): void;
    _exactTokenInForTokenOut(poolPairData: WeightedPoolPairData, amount: BigNumber): BigNumber;
    _tokenInForExactTokenOut(poolPairData: WeightedPoolPairData, amount: BigNumber): BigNumber;
    /**
     * _calcTokensOutGivenExactBptIn
     * @param bptAmountIn EVM scale.
     * @returns EVM scale.
     */
    _calcTokensOutGivenExactBptIn(bptAmountIn: BigNumber$1): BigNumber$1[];
    /**
     * _calcBptOutGivenExactTokensIn
     * @param amountsIn EVM Scale
     * @returns EVM Scale
     */
    _calcBptOutGivenExactTokensIn(amountsIn: BigNumber$1[]): BigNumber$1;
    _spotPriceAfterSwapExactTokenInForTokenOut(poolPairData: WeightedPoolPairData, amount: BigNumber): BigNumber;
    _spotPriceAfterSwapTokenInForExactTokenOut(poolPairData: WeightedPoolPairData, amount: BigNumber): BigNumber;
    _derivativeSpotPriceAfterSwapExactTokenInForTokenOut(poolPairData: WeightedPoolPairData, amount: BigNumber): BigNumber;
    _derivativeSpotPriceAfterSwapTokenInForExactTokenOut(poolPairData: WeightedPoolPairData, amount: BigNumber): BigNumber;
}

declare type StablePoolToken = Pick<SubgraphToken, 'address' | 'balance' | 'decimals'>;
declare type StablePoolPairData = PoolPairBase & {
    allBalances: BigNumber[];
    allBalancesScaled: BigNumber$1[];
    amp: BigNumber$1;
    tokenIndexIn: number;
    tokenIndexOut: number;
};
declare class StablePool implements PoolBase<StablePoolPairData> {
    poolType: PoolTypes;
    id: string;
    address: string;
    amp: BigNumber$1;
    swapFee: BigNumber$1;
    totalShares: BigNumber$1;
    tokens: StablePoolToken[];
    tokensList: string[];
    MAX_IN_RATIO: BigNumber$1;
    MAX_OUT_RATIO: BigNumber$1;
    static AMP_DECIMALS: number;
    static fromPool(pool: SubgraphPoolBase): StablePool;
    constructor(id: string, address: string, amp: string, swapFee: string, totalShares: string, tokens: StablePoolToken[], tokensList: string[]);
    parsePoolPairData(tokenIn: string, tokenOut: string): StablePoolPairData;
    getNormalizedLiquidity(poolPairData: StablePoolPairData): BigNumber;
    getLimitAmountSwap(poolPairData: PoolPairBase, swapType: SwapTypes): BigNumber;
    updateTokenBalanceForPool(token: string, newBalance: BigNumber$1): void;
    updateTotalShares(newTotalShares: BigNumber$1): void;
    _exactTokenInForTokenOut(poolPairData: StablePoolPairData, amount: BigNumber): BigNumber;
    _tokenInForExactTokenOut(poolPairData: StablePoolPairData, amount: BigNumber): BigNumber;
    /**
     * _calcTokensOutGivenExactBptIn
     * @param bptAmountIn EVM scale.
     * @returns EVM scale.
     */
    _calcTokensOutGivenExactBptIn(bptAmountIn: BigNumber$1): BigNumber$1[];
    /**
     * _calcBptOutGivenExactTokensIn
     * @param amountsIn EVM Scale
     * @returns EVM Scale
     */
    _calcBptOutGivenExactTokensIn(amountsIn: BigNumber$1[]): BigNumber$1;
    _spotPriceAfterSwapExactTokenInForTokenOut(poolPairData: StablePoolPairData, amount: BigNumber): BigNumber;
    _spotPriceAfterSwapTokenInForExactTokenOut(poolPairData: StablePoolPairData, amount: BigNumber): BigNumber;
    _derivativeSpotPriceAfterSwapExactTokenInForTokenOut(poolPairData: StablePoolPairData, amount: BigNumber): BigNumber;
    _derivativeSpotPriceAfterSwapTokenInForExactTokenOut(poolPairData: StablePoolPairData, amount: BigNumber): BigNumber;
    subtractSwapFeeAmount(amount: BigNumber$1, swapFee: BigNumber$1): BigNumber$1;
    addSwapFeeAmount(amount: BigNumber$1, swapFee: BigNumber$1): BigNumber$1;
}

declare type MetaStablePoolToken = Pick<SubgraphToken, 'address' | 'balance' | 'decimals' | 'priceRate'>;
declare type MetaStablePoolPairData = StablePoolPairData & {
    tokenInPriceRate: BigNumber$1;
    tokenOutPriceRate: BigNumber$1;
};
declare class MetaStablePool implements PoolBase<MetaStablePoolPairData> {
    poolType: PoolTypes;
    id: string;
    address: string;
    amp: BigNumber$1;
    swapFee: BigNumber$1;
    totalShares: BigNumber$1;
    tokens: MetaStablePoolToken[];
    tokensList: string[];
    MAX_IN_RATIO: BigNumber$1;
    MAX_OUT_RATIO: BigNumber$1;
    static AMP_DECIMALS: number;
    static fromPool(pool: SubgraphPoolBase): MetaStablePool;
    constructor(id: string, address: string, amp: string, swapFee: string, totalShares: string, tokens: MetaStablePoolToken[], tokensList: string[]);
    parsePoolPairData(tokenIn: string, tokenOut: string): MetaStablePoolPairData;
    getNormalizedLiquidity(poolPairData: MetaStablePoolPairData): BigNumber;
    getLimitAmountSwap(poolPairData: MetaStablePoolPairData, swapType: SwapTypes): BigNumber;
    updateTokenBalanceForPool(token: string, newBalance: BigNumber$1): void;
    updateTotalShares(newTotalShares: BigNumber$1): void;
    _exactTokenInForTokenOut(poolPairData: MetaStablePoolPairData, amount: BigNumber): BigNumber;
    _tokenInForExactTokenOut(poolPairData: MetaStablePoolPairData, amount: BigNumber): BigNumber;
    /**
     * _calcTokensOutGivenExactBptIn
     * @param bptAmountIn EVM scale.
     * @returns EVM scale.
     */
    _calcTokensOutGivenExactBptIn(bptAmountIn: BigNumber$1): BigNumber$1[];
    /**
     * _calcBptOutGivenExactTokensIn
     * @param amountsIn EVM Scale
     * @returns EVM Scale
     */
    _calcBptOutGivenExactTokensIn(amountsIn: BigNumber$1[]): BigNumber$1;
    _spotPriceAfterSwapExactTokenInForTokenOut(poolPairData: MetaStablePoolPairData, amount: BigNumber): BigNumber;
    _spotPriceAfterSwapTokenInForExactTokenOut(poolPairData: MetaStablePoolPairData, amount: BigNumber): BigNumber;
    _derivativeSpotPriceAfterSwapExactTokenInForTokenOut(poolPairData: MetaStablePoolPairData, amount: BigNumber): BigNumber;
    _derivativeSpotPriceAfterSwapTokenInForExactTokenOut(poolPairData: MetaStablePoolPairData, amount: BigNumber): BigNumber;
    subtractSwapFeeAmount(amount: BigNumber$1, swapFee: BigNumber$1): BigNumber$1;
    addSwapFeeAmount(amount: BigNumber$1, swapFee: BigNumber$1): BigNumber$1;
}

declare enum PairTypes$1 {
    BptToToken = 0,
    TokenToBpt = 1,
    TokenToToken = 2
}
declare type PhantomStablePoolToken = Pick<SubgraphToken, 'address' | 'balance' | 'decimals' | 'priceRate'>;
declare type PhantomStablePoolPairData = MetaStablePoolPairData & {
    pairType: PairTypes$1;
    bptIndex: number;
    virtualBptSupply: BigNumber$1;
};
declare class PhantomStablePool implements PoolBase<PhantomStablePoolPairData> {
    poolType: PoolTypes;
    id: string;
    address: string;
    amp: BigNumber$1;
    swapFee: BigNumber$1;
    totalShares: BigNumber$1;
    tokens: PhantomStablePoolToken[];
    tokensList: string[];
    ALMOST_ONE: BigNumber$1;
    static AMP_DECIMALS: number;
    static fromPool(pool: SubgraphPoolBase): PhantomStablePool;
    static removeBPT(poolPairData: PhantomStablePoolPairData): PhantomStablePoolPairData;
    constructor(id: string, address: string, amp: string, swapFee: string, totalShares: string, tokens: PhantomStablePoolToken[], tokensList: string[]);
    parsePoolPairData(tokenIn: string, tokenOut: string): PhantomStablePoolPairData;
    getNormalizedLiquidity(poolPairData: PhantomStablePoolPairData): BigNumber;
    getLimitAmountSwap(poolPairData: PhantomStablePoolPairData, swapType: SwapTypes): BigNumber;
    updateTokenBalanceForPool(token: string, newBalance: BigNumber$1): void;
    updateTotalShares(newTotalShares: BigNumber$1): void;
    _exactTokenInForTokenOut(poolPairData: PhantomStablePoolPairData, amount: BigNumber): BigNumber;
    _tokenInForExactTokenOut(poolPairData: PhantomStablePoolPairData, amount: BigNumber): BigNumber;
    /**
     * _calcTokensOutGivenExactBptIn
     * @param bptAmountIn EVM scale.
     * @returns EVM scale.
     */
    _calcTokensOutGivenExactBptIn(bptAmountIn: BigNumber$1): BigNumber$1[];
    /**
     * _calcBptOutGivenExactTokensIn
     * @param amountsIn EVM Scale
     * @returns EVM Scale
     */
    _calcBptOutGivenExactTokensIn(amountsIn: BigNumber$1[]): BigNumber$1;
    _spotPriceAfterSwapExactTokenInForTokenOut(poolPairData: PhantomStablePoolPairData, amount: BigNumber): BigNumber;
    _spotPriceAfterSwapTokenInForExactTokenOut(poolPairData: PhantomStablePoolPairData, amount: BigNumber): BigNumber;
    _derivativeSpotPriceAfterSwapExactTokenInForTokenOut(poolPairData: PhantomStablePoolPairData, amount: BigNumber): BigNumber;
    _derivativeSpotPriceAfterSwapTokenInForExactTokenOut(poolPairData: PhantomStablePoolPairData, amount: BigNumber): BigNumber;
    subtractSwapFeeAmount(amount: BigNumber$1, swapFee: BigNumber$1): BigNumber$1;
    addSwapFeeAmount(amount: BigNumber$1, swapFee: BigNumber$1): BigNumber$1;
}

declare class ComposableStablePool extends PhantomStablePool {
    constructor(id: string, address: string, amp: string, swapFee: string, totalShares: string, tokens: PhantomStablePoolToken[], tokensList: string[]);
    static fromPool(pool: SubgraphPoolBase): ComposableStablePool;
    _exactTokenInForTokenOut(poolPairData: PhantomStablePoolPairData, amount: BigNumber): BigNumber;
    _tokenInForExactTokenOut(poolPairData: PhantomStablePoolPairData, amount: BigNumber): BigNumber;
    /**
     * _calcTokensOutGivenExactBptIn
     * @param bptAmountIn EVM scale.
     * @returns EVM scale.
     */
    _calcTokensOutGivenExactBptIn(bptAmountIn: BigNumber$1): BigNumber$1[];
    /**
     * _calcBptOutGivenExactTokensIn
     * @param amountsIn EVM Scale (Should not have value for BPT token)
     * @returns EVM Scale
     */
    _calcBptOutGivenExactTokensIn(amountsIn: BigNumber$1[]): BigNumber$1;
}

declare enum PairTypes {
    BptToMainToken = 0,
    MainTokenToBpt = 1,
    MainTokenToWrappedToken = 2,
    WrappedTokenToMainToken = 3,
    BptToWrappedToken = 4,
    WrappedTokenToBpt = 5
}
declare type LinearPoolToken = Pick<SubgraphToken, 'address' | 'balance' | 'decimals' | 'priceRate'>;
declare type LinearPoolPairData = PoolPairBase & {
    pairType: PairTypes;
    wrappedBalance: BigNumber;
    wrappedBalanceScaled: BigNumber$1;
    wrappedDecimals: number;
    rate: BigNumber$1;
    lowerTarget: BigNumber$1;
    upperTarget: BigNumber$1;
    mainBalanceScaled: BigNumber$1;
    bptBalanceScaled: BigNumber$1;
    virtualBptSupply: BigNumber$1;
};
declare class LinearPool implements PoolBase<LinearPoolPairData> {
    poolType: PoolTypes;
    id: string;
    address: string;
    swapFee: BigNumber$1;
    totalShares: BigNumber$1;
    tokens: LinearPoolToken[];
    tokensList: string[];
    wrappedIndex: number;
    wrappedDecimals: number;
    mainIndex: number;
    bptIndex: number;
    lowerTarget: BigNumber$1;
    upperTarget: BigNumber$1;
    MAX_RATIO: BigNumber$1;
    ALMOST_ONE: BigNumber$1;
    MAX_TOKEN_BALANCE: BigNumber$1;
    static fromPool(pool: SubgraphPoolBase): LinearPool;
    constructor(id: string, address: string, swapFee: string, totalShares: string, tokens: LinearPoolToken[], tokensList: string[], mainIndex: number, wrappedIndex: number, lowerTarget: string, upperTarget: string);
    parsePoolPairData(tokenIn: string, tokenOut: string): LinearPoolPairData;
    getNormalizedLiquidity(poolPairData: LinearPoolPairData): BigNumber;
    getLimitAmountSwap(poolPairData: LinearPoolPairData, swapType: SwapTypes): BigNumber;
    updateTokenBalanceForPool(token: string, newBalance: BigNumber$1): void;
    updateTotalShares(newTotalShares: BigNumber$1): void;
    _exactTokenInForTokenOut(poolPairData: LinearPoolPairData, amount: BigNumber): BigNumber;
    _exactWrappedTokenInForMainOut(poolPairData: LinearPoolPairData, amount: BigNumber): BigNumber;
    _exactMainTokenInForWrappedOut(poolPairData: LinearPoolPairData, amount: BigNumber): BigNumber;
    _exactMainTokenInForBPTOut(poolPairData: LinearPoolPairData, amount: BigNumber): BigNumber;
    _exactBPTInForMainTokenOut(poolPairData: LinearPoolPairData, amount: BigNumber): BigNumber;
    _exactWrappedTokenInForBPTOut(poolPairData: LinearPoolPairData, amount: BigNumber): BigNumber;
    _exactBPTInForWrappedTokenOut(poolPairData: LinearPoolPairData, amount: BigNumber): BigNumber;
    _tokenInForExactTokenOut(poolPairData: LinearPoolPairData, amount: BigNumber): BigNumber;
    _wrappedTokenInForExactMainOut(poolPairData: LinearPoolPairData, amount: BigNumber): BigNumber;
    _mainTokenInForExactWrappedOut(poolPairData: LinearPoolPairData, amount: BigNumber): BigNumber;
    _mainTokenInForExactBPTOut(poolPairData: LinearPoolPairData, amount: BigNumber): BigNumber;
    _BPTInForExactMainTokenOut(poolPairData: LinearPoolPairData, amount: BigNumber): BigNumber;
    _wrappedTokenInForExactBPTOut(poolPairData: LinearPoolPairData, amount: BigNumber): BigNumber;
    _BPTInForExactWrappedTokenOut(poolPairData: LinearPoolPairData, amount: BigNumber): BigNumber;
    _calcTokensOutGivenExactBptIn(bptAmountIn: BigNumber$1): BigNumber$1[];
    _calcBptOutGivenExactTokensIn(amountsIn: BigNumber$1[]): BigNumber$1;
    _spotPriceAfterSwapExactTokenInForTokenOut(poolPairData: LinearPoolPairData, amount: BigNumber): BigNumber;
    _spotPriceAfterSwapTokenInForExactTokenOut(poolPairData: LinearPoolPairData, amount: BigNumber): BigNumber;
    _derivativeSpotPriceAfterSwapExactTokenInForTokenOut(poolPairData: LinearPoolPairData, amount: BigNumber): BigNumber;
    _derivativeSpotPriceAfterSwapTokenInForExactTokenOut(poolPairData: LinearPoolPairData, amount: BigNumber): BigNumber;
}

declare function getSpotPriceAfterSwapForPath(path: NewPath, swapType: SwapTypes, amount: BigNumber): BigNumber;

declare function _calcOutGivenIn$3(balanceIn: bigint, weightIn: bigint, balanceOut: bigint, weightOut: bigint, amountIn: bigint, fee: bigint): bigint;
declare function _calcInGivenOut$3(balanceIn: bigint, weightIn: bigint, balanceOut: bigint, weightOut: bigint, amountOut: bigint, fee: bigint): bigint;
declare function _spotPriceAfterSwapExactTokenInForTokenOutBigInt(balanceIn: bigint, weightIn: bigint, balanceOut: bigint, weightOut: bigint, amountIn: bigint, fee: bigint): bigint;
declare function _spotPriceAfterSwapTokenInForExactTokenOutBigInt(balanceIn: bigint, weightIn: bigint, balanceOut: bigint, weightOut: bigint, amountOut: bigint, fee: bigint): bigint;
/**
 * Calculates BPT for given tokens in. Note all numbers use upscaled amounts. e.g. 1USDC = 1e18.
 * @param balances Pool balances.
 * @param normalizedWeights Token weights.
 * @param amountsIn Amount of each token.
 * @param bptTotalSupply Total BPT of pool.
 * @param swapFeePercentage Swap fee percentage.
 * @returns BPT out.
 */
declare function _calcBptOutGivenExactTokensIn$1(balances: bigint[], normalizedWeights: bigint[], amountsIn: bigint[], bptTotalSupply: bigint, swapFeePercentage: bigint): bigint;
declare function _calcTokensOutGivenExactBptIn$2(balances: bigint[], bptAmountIn: bigint, totalBPT: bigint): bigint[];
declare function _calcTokenOutGivenExactBptIn$1(balance: bigint, normalizedWeight: bigint, bptAmountIn: bigint, bptTotalSupply: bigint, swapFeePercentage: bigint): bigint;
declare function _calcBptInGivenExactTokensOut$1(balances: bigint[], normalizedWeights: bigint[], amountsOut: bigint[], bptTotalSupply: bigint, swapFeePercentage: bigint): bigint;
declare const _calcTokenInGivenExactBptOut$1: (balance: bigint, normalizedWeight: bigint, bptAmountOut: bigint, bptTotalSupply: bigint, swapFee: bigint) => bigint;
declare function _calculateInvariant$2(normalizedWeights: bigint[], balances: bigint[]): bigint;
declare function _calcDueProtocolSwapFeeBptAmount(totalSupply: bigint, previousInvariant: bigint, currentInvariant: bigint, protocolSwapFeePercentage: bigint): bigint;
declare function _spotPriceAfterSwapExactTokenInForTokenOut$2(amount: BigNumber, poolPairData: WeightedPoolPairData): BigNumber;
declare function _spotPriceAfterSwapTokenInForExactTokenOut$2(amount: BigNumber, poolPairData: WeightedPoolPairData): BigNumber;
declare function _spotPriceAfterSwapExactTokenInForBPTOut$1(amount: BigNumber, poolPairData: WeightedPoolPairData): BigNumber;
declare function _spotPriceAfterSwapBptOutGivenExactTokenInBigInt(balanceIn: bigint, balanceOut: bigint, weightIn: bigint, amountIn: bigint, swapFeeRatio: bigint): bigint;
declare function _spotPriceAfterSwapExactBPTInForTokenOut$1(amount: BigNumber, poolPairData: WeightedPoolPairData): BigNumber;
declare function _spotPriceAfterSwapBPTInForExactTokenOut$1(amount: BigNumber, poolPairData: WeightedPoolPairData): BigNumber;
declare function _spotPriceAfterSwapTokenInForExactBPTOut$2(amount: BigNumber, poolPairData: WeightedPoolPairData): BigNumber;
declare function _derivativeSpotPriceAfterSwapExactTokenInForTokenOut$3(amount: BigNumber, poolPairData: WeightedPoolPairData): BigNumber;
declare function _derivativeSpotPriceAfterSwapTokenInForExactTokenOut$3(amount: BigNumber, poolPairData: WeightedPoolPairData): BigNumber;
declare function _derivativeSpotPriceAfterSwapExactTokenInForBPTOut(amount: BigNumber, poolPairData: WeightedPoolPairData): BigNumber;
declare function _derivativeSpotPriceAfterSwapTokenInForExactBPTOut(amount: BigNumber, poolPairData: WeightedPoolPairData): BigNumber;
declare function _derivativeSpotPriceAfterSwapExactBPTInForTokenOut(amount: BigNumber, poolPairData: WeightedPoolPairData): BigNumber;
declare function _derivativeSpotPriceAfterSwapBPTInForExactTokenOut(amount: BigNumber, poolPairData: WeightedPoolPairData): BigNumber;

declare const weightedMath__spotPriceAfterSwapExactTokenInForTokenOutBigInt: typeof _spotPriceAfterSwapExactTokenInForTokenOutBigInt;
declare const weightedMath__spotPriceAfterSwapTokenInForExactTokenOutBigInt: typeof _spotPriceAfterSwapTokenInForExactTokenOutBigInt;
declare const weightedMath__calcDueProtocolSwapFeeBptAmount: typeof _calcDueProtocolSwapFeeBptAmount;
declare const weightedMath__spotPriceAfterSwapBptOutGivenExactTokenInBigInt: typeof _spotPriceAfterSwapBptOutGivenExactTokenInBigInt;
declare const weightedMath__derivativeSpotPriceAfterSwapExactTokenInForBPTOut: typeof _derivativeSpotPriceAfterSwapExactTokenInForBPTOut;
declare const weightedMath__derivativeSpotPriceAfterSwapTokenInForExactBPTOut: typeof _derivativeSpotPriceAfterSwapTokenInForExactBPTOut;
declare const weightedMath__derivativeSpotPriceAfterSwapExactBPTInForTokenOut: typeof _derivativeSpotPriceAfterSwapExactBPTInForTokenOut;
declare const weightedMath__derivativeSpotPriceAfterSwapBPTInForExactTokenOut: typeof _derivativeSpotPriceAfterSwapBPTInForExactTokenOut;
declare namespace weightedMath {
  export {
    _calcOutGivenIn$3 as _calcOutGivenIn,
    _calcInGivenOut$3 as _calcInGivenOut,
    weightedMath__spotPriceAfterSwapExactTokenInForTokenOutBigInt as _spotPriceAfterSwapExactTokenInForTokenOutBigInt,
    weightedMath__spotPriceAfterSwapTokenInForExactTokenOutBigInt as _spotPriceAfterSwapTokenInForExactTokenOutBigInt,
    _calcBptOutGivenExactTokensIn$1 as _calcBptOutGivenExactTokensIn,
    _calcTokensOutGivenExactBptIn$2 as _calcTokensOutGivenExactBptIn,
    _calcTokenOutGivenExactBptIn$1 as _calcTokenOutGivenExactBptIn,
    _calcBptInGivenExactTokensOut$1 as _calcBptInGivenExactTokensOut,
    _calcTokenInGivenExactBptOut$1 as _calcTokenInGivenExactBptOut,
    _calculateInvariant$2 as _calculateInvariant,
    weightedMath__calcDueProtocolSwapFeeBptAmount as _calcDueProtocolSwapFeeBptAmount,
    _spotPriceAfterSwapExactTokenInForTokenOut$2 as _spotPriceAfterSwapExactTokenInForTokenOut,
    _spotPriceAfterSwapTokenInForExactTokenOut$2 as _spotPriceAfterSwapTokenInForExactTokenOut,
    _spotPriceAfterSwapExactTokenInForBPTOut$1 as _spotPriceAfterSwapExactTokenInForBPTOut,
    weightedMath__spotPriceAfterSwapBptOutGivenExactTokenInBigInt as _spotPriceAfterSwapBptOutGivenExactTokenInBigInt,
    _spotPriceAfterSwapExactBPTInForTokenOut$1 as _spotPriceAfterSwapExactBPTInForTokenOut,
    _spotPriceAfterSwapBPTInForExactTokenOut$1 as _spotPriceAfterSwapBPTInForExactTokenOut,
    _spotPriceAfterSwapTokenInForExactBPTOut$2 as _spotPriceAfterSwapTokenInForExactBPTOut,
    _derivativeSpotPriceAfterSwapExactTokenInForTokenOut$3 as _derivativeSpotPriceAfterSwapExactTokenInForTokenOut,
    _derivativeSpotPriceAfterSwapTokenInForExactTokenOut$3 as _derivativeSpotPriceAfterSwapTokenInForExactTokenOut,
    weightedMath__derivativeSpotPriceAfterSwapExactTokenInForBPTOut as _derivativeSpotPriceAfterSwapExactTokenInForBPTOut,
    weightedMath__derivativeSpotPriceAfterSwapTokenInForExactBPTOut as _derivativeSpotPriceAfterSwapTokenInForExactBPTOut,
    weightedMath__derivativeSpotPriceAfterSwapExactBPTInForTokenOut as _derivativeSpotPriceAfterSwapExactBPTInForTokenOut,
    weightedMath__derivativeSpotPriceAfterSwapBPTInForExactTokenOut as _derivativeSpotPriceAfterSwapBPTInForExactTokenOut,
  };
}

/**********************************************************************************************
    // invariant                                                                                 //
    // D = invariant to compute                                                                  //
    // A = amplifier                n * D^2 + A * n^n * S * (n^n * P / D^(n−1))                  //
    // S = sum of balances         ____________________________________________                  //
    // P = product of balances    (n+1) * D + ( A * n^n − 1)* (n^n * P / D^(n−1))                //
    // n = number of tokens                                                                      //
    **********************************************************************************************/
declare function _invariant(A: BigNumber$1, balances: BigNumber[]): BigNumber;
/**********************************************************************************************
    // outGivenIn token x for y - polynomial equation to solve                                   //
    // ay = amount out to calculate                                                              //
    // by = balance token out                                                                    //
    // y = by - ay                                                                               //
    // D = invariant                               D                     D^(n+1)                 //
    // A = amplifier               y^2 + ( S - ----------  - 1) * y -  ------------- = 0         //
    // n = number of tokens                    (A * n^n)               A * n^2n * P              //
    // S = sum of final balances but y                                                           //
    // P = product of final balances but y                                                       //
    **********************************************************************************************/
declare function _exactTokenInForTokenOut(amount: BigNumber, poolPairData: StablePoolPairData): BigNumber;
/**********************************************************************************************
    // inGivenOut token x for y - polynomial equation to solve                                   //
    // ax = amount in to calculate                                                               //
    // bx = balance token in                                                                     //
    // x = bx + ax                                                                               //
    // D = invariant                               D                     D^(n+1)                 //
    // A = amplifier               x^2 + ( S - ----------  - 1) * x -  ------------- = 0         //
    // n = number of tokens                    (A * n^n)               A * n^2n * P              //
    // S = sum of final balances but x                                                           //
    // P = product of final balances but x                                                       //
    **********************************************************************************************/
declare function _tokenInForExactTokenOut(amount: BigNumber, poolPairData: StablePoolPairData): BigNumber;
declare function _solveAnalyticalBalance(sum: BigNumber, inv: BigNumber, A: BigNumber$1, n_pow_n: BigNumber, p: BigNumber): BigNumber;
declare function _spotPriceAfterSwapExactTokenInForTokenOut$1(amount: BigNumber, poolPairData: StablePoolPairData): BigNumber;
declare function _spotPriceAfterSwapTokenInForExactTokenOut$1(amount: BigNumber, poolPairData: StablePoolPairData): BigNumber;
declare function _derivativeSpotPriceAfterSwapExactTokenInForTokenOut$2(amount: BigNumber, poolPairData: StablePoolPairData): BigNumber;
declare function _derivativeSpotPriceAfterSwapTokenInForExactTokenOut$2(amount: BigNumber, poolPairData: StablePoolPairData): BigNumber;
declare function _spotPriceAfterSwapTokenInForExactBPTOut$1(amount: BigNumber, poolPairData: StablePoolPairData): BigNumber;

declare const stableMath__invariant: typeof _invariant;
declare const stableMath__exactTokenInForTokenOut: typeof _exactTokenInForTokenOut;
declare const stableMath__tokenInForExactTokenOut: typeof _tokenInForExactTokenOut;
declare const stableMath__solveAnalyticalBalance: typeof _solveAnalyticalBalance;
declare namespace stableMath {
  export {
    stableMath__invariant as _invariant,
    stableMath__exactTokenInForTokenOut as _exactTokenInForTokenOut,
    stableMath__tokenInForExactTokenOut as _tokenInForExactTokenOut,
    stableMath__solveAnalyticalBalance as _solveAnalyticalBalance,
    _spotPriceAfterSwapExactTokenInForTokenOut$1 as _spotPriceAfterSwapExactTokenInForTokenOut,
    _spotPriceAfterSwapTokenInForExactTokenOut$1 as _spotPriceAfterSwapTokenInForExactTokenOut,
    _derivativeSpotPriceAfterSwapExactTokenInForTokenOut$2 as _derivativeSpotPriceAfterSwapExactTokenInForTokenOut,
    _derivativeSpotPriceAfterSwapTokenInForExactTokenOut$2 as _derivativeSpotPriceAfterSwapTokenInForExactTokenOut,
    _spotPriceAfterSwapTokenInForExactBPTOut$1 as _spotPriceAfterSwapTokenInForExactBPTOut,
  };
}

declare function _calcOutGivenIn$2(amp: bigint, balances: bigint[], tokenIndexIn: number, tokenIndexOut: number, amountIn: bigint, fee: bigint): bigint;
declare function _calcInGivenOut$2(amp: bigint, balances: bigint[], tokenIndexIn: number, tokenIndexOut: number, amountOut: bigint, fee: bigint): bigint;
/**
 * _calcBptOutGivenExactTokensIn
 * @param amp Amplification parameter in EVM Scale
 * @param balances Token balances in EVM Scale normalised to 18 decimals (Should not have value for BPT token)
 * @param amountsIn Token amounts in EVM Scale normalised to 18 decimals (Should not have value for BPT token)
 * @param bptTotalSupply BPT total supply in EVM Scale
 * @param swapFeePercentage Swap fee percentage in EVM Scale
 * @returns BPT out in EVM Scale
 */
declare function _calcBptOutGivenExactTokensIn(amp: bigint, balances: bigint[], amountsIn: bigint[], bptTotalSupply: bigint, swapFeePercentage: bigint): bigint;
/**
 * _calcTokenInGivenExactBptOut
 * @param amp Amplification parameter in EVM Scale
 * @param balances Token balances in EVM Scale normalised to 18 decimals (Should not have value for BPT token)
 * @param tokenIndexIn Index of token in (from tokens array without BPT)
 * @param bptAmountOut BPT amount out in EVM scale
 * @param bptTotalSupply BPT total supply in EVM Scale
 * @param fee Swap fee percentage in EVM Scale
 * @returns token in EVM Scale normalised to 18 decimals
 */
declare function _calcTokenInGivenExactBptOut(amp: bigint, balances: bigint[], tokenIndexIn: number, bptAmountOut: bigint, bptTotalSupply: bigint, fee: bigint): bigint;
declare function _calcBptInGivenExactTokensOut(amp: bigint, balances: bigint[], amountsOut: bigint[], bptTotalSupply: bigint, swapFeePercentage: bigint): bigint;
declare function _calcTokenOutGivenExactBptIn(amp: bigint, balances: bigint[], tokenIndex: number, bptAmountIn: bigint, bptTotalSupply: bigint, swapFeePercentage: bigint): bigint;
declare function _calcTokensOutGivenExactBptIn$1(balances: bigint[], bptAmountIn: bigint, bptTotalSupply: bigint): bigint[];
declare function _spotPriceAfterSwapExactTokenInForTokenOut(amp: bigint, balances: bigint[], tokenIndexIn: number, tokenIndexOut: number, amountIn: bigint, fee: bigint): bigint;
declare function _spotPriceAfterSwapTokenInForExactTokenOut(amp: bigint, balances: bigint[], tokenIndexIn: number, tokenIndexOut: number, amountOut: bigint, fee: bigint): bigint;
declare function _spotPriceAfterSwapExactTokenInForBPTOut(amp: bigint, balances: bigint[], tokenIndexIn: number, bptTotalSupply: bigint, amountIn: bigint): bigint;
declare function _spotPriceAfterSwapTokenInForExactBPTOut(amp: bigint, balances: bigint[], tokenIndexIn: number, bptTotalSupply: bigint, amountOut: bigint): bigint;
declare function _spotPriceAfterSwapExactBPTInForTokenOut(amp: bigint, balances: bigint[], tokenIndexOut: number, bptTotalSupply: bigint, amountIn: bigint): bigint;
declare function _spotPriceAfterSwapBPTInForExactTokenOut(amp: bigint, balances: bigint[], tokenIndexOut: number, bptTotalSupply: bigint, amountOut: bigint): bigint;
declare function _poolDerivatives(amp: bigint, balances: bigint[], tokenIndexIn: number, tokenIndexOut: number, is_first_derivative: boolean, wrt_out: boolean): bigint;
declare function _poolDerivativesBPT(amp: bigint, balances: bigint[], bptSupply: bigint, tokenIndexIn: number, is_first_derivative: boolean, is_BPT_out: boolean, wrt_out: boolean): bigint;

declare const stableMathBigInt__calcBptOutGivenExactTokensIn: typeof _calcBptOutGivenExactTokensIn;
declare const stableMathBigInt__calcTokenInGivenExactBptOut: typeof _calcTokenInGivenExactBptOut;
declare const stableMathBigInt__calcBptInGivenExactTokensOut: typeof _calcBptInGivenExactTokensOut;
declare const stableMathBigInt__calcTokenOutGivenExactBptIn: typeof _calcTokenOutGivenExactBptIn;
declare const stableMathBigInt__spotPriceAfterSwapExactTokenInForTokenOut: typeof _spotPriceAfterSwapExactTokenInForTokenOut;
declare const stableMathBigInt__spotPriceAfterSwapTokenInForExactTokenOut: typeof _spotPriceAfterSwapTokenInForExactTokenOut;
declare const stableMathBigInt__spotPriceAfterSwapExactTokenInForBPTOut: typeof _spotPriceAfterSwapExactTokenInForBPTOut;
declare const stableMathBigInt__spotPriceAfterSwapTokenInForExactBPTOut: typeof _spotPriceAfterSwapTokenInForExactBPTOut;
declare const stableMathBigInt__spotPriceAfterSwapExactBPTInForTokenOut: typeof _spotPriceAfterSwapExactBPTInForTokenOut;
declare const stableMathBigInt__spotPriceAfterSwapBPTInForExactTokenOut: typeof _spotPriceAfterSwapBPTInForExactTokenOut;
declare const stableMathBigInt__poolDerivatives: typeof _poolDerivatives;
declare const stableMathBigInt__poolDerivativesBPT: typeof _poolDerivativesBPT;
declare namespace stableMathBigInt {
  export {
    _calcOutGivenIn$2 as _calcOutGivenIn,
    _calcInGivenOut$2 as _calcInGivenOut,
    stableMathBigInt__calcBptOutGivenExactTokensIn as _calcBptOutGivenExactTokensIn,
    stableMathBigInt__calcTokenInGivenExactBptOut as _calcTokenInGivenExactBptOut,
    stableMathBigInt__calcBptInGivenExactTokensOut as _calcBptInGivenExactTokensOut,
    stableMathBigInt__calcTokenOutGivenExactBptIn as _calcTokenOutGivenExactBptIn,
    _calcTokensOutGivenExactBptIn$1 as _calcTokensOutGivenExactBptIn,
    stableMathBigInt__spotPriceAfterSwapExactTokenInForTokenOut as _spotPriceAfterSwapExactTokenInForTokenOut,
    stableMathBigInt__spotPriceAfterSwapTokenInForExactTokenOut as _spotPriceAfterSwapTokenInForExactTokenOut,
    stableMathBigInt__spotPriceAfterSwapExactTokenInForBPTOut as _spotPriceAfterSwapExactTokenInForBPTOut,
    stableMathBigInt__spotPriceAfterSwapTokenInForExactBPTOut as _spotPriceAfterSwapTokenInForExactBPTOut,
    stableMathBigInt__spotPriceAfterSwapExactBPTInForTokenOut as _spotPriceAfterSwapExactBPTInForTokenOut,
    stableMathBigInt__spotPriceAfterSwapBPTInForExactTokenOut as _spotPriceAfterSwapBPTInForExactTokenOut,
    stableMathBigInt__poolDerivatives as _poolDerivatives,
    stableMathBigInt__poolDerivativesBPT as _poolDerivativesBPT,
  };
}

declare function _findVirtualParams(invariant: BigNumber$1, sqrtAlpha: BigNumber$1, sqrtBeta: BigNumber$1): [BigNumber$1, BigNumber$1];
declare function _calculateInvariant$1(balances: BigNumber$1[], // balances
sqrtAlpha: BigNumber$1, sqrtBeta: BigNumber$1): BigNumber$1;
declare function _calculateQuadraticTerms(balances: BigNumber$1[], sqrtAlpha: BigNumber$1, sqrtBeta: BigNumber$1): [BigNumber$1, BigNumber$1, BigNumber$1, BigNumber$1];
declare function _calculateQuadratic(a: BigNumber$1, mb: BigNumber$1, bSquare: BigNumber$1, mc: BigNumber$1): BigNumber$1;
declare function _calcOutGivenIn$1(balanceIn: BigNumber$1, balanceOut: BigNumber$1, amountIn: BigNumber$1, virtualParamIn: BigNumber$1, virtualParamOut: BigNumber$1): BigNumber$1;
declare function _calcInGivenOut$1(balanceIn: BigNumber$1, balanceOut: BigNumber$1, amountOut: BigNumber$1, virtualParamIn: BigNumber$1, virtualParamOut: BigNumber$1): BigNumber$1;
declare function _calculateNewSpotPrice$1(balances: BigNumber$1[], inAmount: BigNumber$1, outAmount: BigNumber$1, virtualParamIn: BigNumber$1, virtualParamOut: BigNumber$1, swapFee: BigNumber$1): BigNumber$1;
declare function _derivativeSpotPriceAfterSwapExactTokenInForTokenOut$1(balances: BigNumber$1[], outAmount: BigNumber$1, virtualParamOut: BigNumber$1): BigNumber$1;
declare function _derivativeSpotPriceAfterSwapTokenInForExactTokenOut$1(balances: BigNumber$1[], inAmount: BigNumber$1, outAmount: BigNumber$1, virtualParamIn: BigNumber$1, virtualParamOut: BigNumber$1, swapFee: BigNumber$1): BigNumber$1;
declare function _getNormalizedLiquidity$1(balances: BigNumber$1[], virtualParamOut: BigNumber$1): BigNumber$1;

declare const gyro2Math__findVirtualParams: typeof _findVirtualParams;
declare const gyro2Math__calculateQuadraticTerms: typeof _calculateQuadraticTerms;
declare const gyro2Math__calculateQuadratic: typeof _calculateQuadratic;
declare namespace gyro2Math {
  export {
    gyro2Math__findVirtualParams as _findVirtualParams,
    _calculateInvariant$1 as _calculateInvariant,
    gyro2Math__calculateQuadraticTerms as _calculateQuadraticTerms,
    gyro2Math__calculateQuadratic as _calculateQuadratic,
    _calcOutGivenIn$1 as _calcOutGivenIn,
    _calcInGivenOut$1 as _calcInGivenOut,
    _calculateNewSpotPrice$1 as _calculateNewSpotPrice,
    _derivativeSpotPriceAfterSwapExactTokenInForTokenOut$1 as _derivativeSpotPriceAfterSwapExactTokenInForTokenOut,
    _derivativeSpotPriceAfterSwapTokenInForExactTokenOut$1 as _derivativeSpotPriceAfterSwapTokenInForExactTokenOut,
    _getNormalizedLiquidity$1 as _getNormalizedLiquidity,
  };
}

declare function _calculateInvariant(balances: BigNumber$1[], root3Alpha: BigNumber$1): BigNumber$1;
/** @dev Prepares quadratic terms for input to _calculateCubic
 *  assumes a > 0, b < 0, c <= 0, and d <= 0 and returns a, -b, -c, -d
 *  terms come from cubic in Section 3.1.1
 *  argument root3Alpha = cube root of alpha
 */
declare function _calculateCubicTerms(balances: BigNumber$1[], root3Alpha: BigNumber$1): [BigNumber$1, BigNumber$1, BigNumber$1, BigNumber$1];
/** @dev Calculate the maximal root of the polynomial a L^3 - mb L^2 - mc L - md.
 *   This root is always non-negative, and it is the unique positive root unless mb == mc == md == 0. */
declare function _calculateCubic(a: BigNumber$1, mb: BigNumber$1, mc: BigNumber$1, md: BigNumber$1, root3Alpha: BigNumber$1): BigNumber$1;
/** @dev Starting point for Newton iteration. Safe with all cubic polynomials where the coefficients have the appropriate
 *   signs, but calibrated to the particular polynomial for computing the invariant. */
declare function _calculateCubicStartingPoint(a: BigNumber$1, mb: BigNumber$1, mc: BigNumber$1): BigNumber$1;
/** @dev Find a root of the given polynomial with the given starting point l.
 *   Safe iff l > the local minimum.
 *   Note that f(l) may be negative for the first iteration and will then be positive (up to rounding errors).
 *   f'(l) is always positive for the range of values we consider.
 *   See write-up, Appendix A. */
declare function _runNewtonIteration(a: BigNumber$1, mb: BigNumber$1, mc: BigNumber$1, md: BigNumber$1, root3Alpha: BigNumber$1, rootEst: BigNumber$1): BigNumber$1;
declare function _calcNewtonDelta(a: BigNumber$1, mb: BigNumber$1, mc: BigNumber$1, md: BigNumber$1, root3Alpha: BigNumber$1, rootEst: BigNumber$1): [BigNumber$1, boolean];
/** @dev Computes how many tokens can be taken out of a pool if `amountIn` are sent, given the
 * current balances and weights.
 * Changed signs compared to original algorithm to account for amountOut < 0.
 * See Proposition 12 in 3.1.4.*/
declare function _calcOutGivenIn(balanceIn: BigNumber$1, balanceOut: BigNumber$1, amountIn: BigNumber$1, virtualOffset: BigNumber$1): BigNumber$1;
/** @dev Computes how many tokens must be sent to a pool in order to take `amountOut`, given the
 * currhent balances and weights.
 * Similar to the one before but adapting bc negative values (amountOut would be negative).*/
declare function _calcInGivenOut(balanceIn: BigNumber$1, balanceOut: BigNumber$1, amountOut: BigNumber$1, virtualOffset: BigNumber$1): BigNumber$1;
declare function _calculateNewSpotPrice(balances: BigNumber$1[], inAmount: BigNumber$1, outAmount: BigNumber$1, virtualOffsetInOut: BigNumber$1, swapFee: BigNumber$1): BigNumber$1;
declare function _derivativeSpotPriceAfterSwapExactTokenInForTokenOut(balances: BigNumber$1[], outAmount: BigNumber$1, virtualOffsetInOut: BigNumber$1): BigNumber$1;
declare function _derivativeSpotPriceAfterSwapTokenInForExactTokenOut(balances: BigNumber$1[], inAmount: BigNumber$1, outAmount: BigNumber$1, virtualOffsetInOut: BigNumber$1, swapFee: BigNumber$1): BigNumber$1;
declare function _getNormalizedLiquidity(balances: BigNumber$1[], virtualParamOut: BigNumber$1): BigNumber$1;

declare const gyro3Math__calculateInvariant: typeof _calculateInvariant;
declare const gyro3Math__calculateCubicTerms: typeof _calculateCubicTerms;
declare const gyro3Math__calculateCubic: typeof _calculateCubic;
declare const gyro3Math__calculateCubicStartingPoint: typeof _calculateCubicStartingPoint;
declare const gyro3Math__runNewtonIteration: typeof _runNewtonIteration;
declare const gyro3Math__calcNewtonDelta: typeof _calcNewtonDelta;
declare const gyro3Math__calcOutGivenIn: typeof _calcOutGivenIn;
declare const gyro3Math__calcInGivenOut: typeof _calcInGivenOut;
declare const gyro3Math__calculateNewSpotPrice: typeof _calculateNewSpotPrice;
declare const gyro3Math__derivativeSpotPriceAfterSwapExactTokenInForTokenOut: typeof _derivativeSpotPriceAfterSwapExactTokenInForTokenOut;
declare const gyro3Math__derivativeSpotPriceAfterSwapTokenInForExactTokenOut: typeof _derivativeSpotPriceAfterSwapTokenInForExactTokenOut;
declare const gyro3Math__getNormalizedLiquidity: typeof _getNormalizedLiquidity;
declare namespace gyro3Math {
  export {
    gyro3Math__calculateInvariant as _calculateInvariant,
    gyro3Math__calculateCubicTerms as _calculateCubicTerms,
    gyro3Math__calculateCubic as _calculateCubic,
    gyro3Math__calculateCubicStartingPoint as _calculateCubicStartingPoint,
    gyro3Math__runNewtonIteration as _runNewtonIteration,
    gyro3Math__calcNewtonDelta as _calcNewtonDelta,
    gyro3Math__calcOutGivenIn as _calcOutGivenIn,
    gyro3Math__calcInGivenOut as _calcInGivenOut,
    gyro3Math__calculateNewSpotPrice as _calculateNewSpotPrice,
    gyro3Math__derivativeSpotPriceAfterSwapExactTokenInForTokenOut as _derivativeSpotPriceAfterSwapExactTokenInForTokenOut,
    gyro3Math__derivativeSpotPriceAfterSwapTokenInForExactTokenOut as _derivativeSpotPriceAfterSwapTokenInForExactTokenOut,
    gyro3Math__getNormalizedLiquidity as _getNormalizedLiquidity,
  };
}

declare type GyroEParams = {
    alpha: BigNumber$1;
    beta: BigNumber$1;
    c: BigNumber$1;
    s: BigNumber$1;
    lambda: BigNumber$1;
};
declare type DerivedGyroEParams = {
    tauAlpha: Vector2;
    tauBeta: Vector2;
    u: BigNumber$1;
    v: BigNumber$1;
    w: BigNumber$1;
    z: BigNumber$1;
    dSq: BigNumber$1;
};
declare type Vector2 = {
    x: BigNumber$1;
    y: BigNumber$1;
};
declare function balancesFromTokenInOut(balanceTokenIn: BigNumber$1, balanceTokenOut: BigNumber$1, tokenInIsToken0: boolean): [BigNumber$1, BigNumber$1];

declare function calculateNormalizedLiquidity(balances: BigNumber$1[], params: GyroEParams, derived: DerivedGyroEParams, r: Vector2, fee: BigNumber$1, tokenInIsToken0: boolean): BigNumber$1;
declare function calculateInvariantWithError(balances: BigNumber$1[], params: GyroEParams, derived: DerivedGyroEParams): [BigNumber$1, BigNumber$1];
declare function calcOutGivenIn(balances: BigNumber$1[], amountIn: BigNumber$1, tokenInIsToken0: boolean, params: GyroEParams, derived: DerivedGyroEParams, invariant: Vector2): BigNumber$1;
declare function calcInGivenOut(balances: BigNumber$1[], amountOut: BigNumber$1, tokenInIsToken0: boolean, params: GyroEParams, derived: DerivedGyroEParams, invariant: Vector2): BigNumber$1;
declare function calcSpotPriceAfterSwapOutGivenIn(balances: BigNumber$1[], amountIn: BigNumber$1, tokenInIsToken0: boolean, params: GyroEParams, derived: DerivedGyroEParams, invariant: Vector2, swapFee: BigNumber$1): BigNumber$1;
declare function calcSpotPriceAfterSwapInGivenOut(balances: BigNumber$1[], amountOut: BigNumber$1, tokenInIsToken0: boolean, params: GyroEParams, derived: DerivedGyroEParams, invariant: Vector2, swapFee: BigNumber$1): BigNumber$1;
declare function calcDerivativePriceAfterSwapOutGivenIn(balances: BigNumber$1[], tokenInIsToken0: boolean, params: GyroEParams, derived: DerivedGyroEParams, invariant: Vector2, swapFee: BigNumber$1): BigNumber$1;
declare function calcDerivativeSpotPriceAfterSwapInGivenOut(balances: BigNumber$1[], tokenInIsToken0: boolean, params: GyroEParams, derived: DerivedGyroEParams, invariant: Vector2, swapFee: BigNumber$1): BigNumber$1;

declare const gyroEMath_calculateNormalizedLiquidity: typeof calculateNormalizedLiquidity;
declare const gyroEMath_calculateInvariantWithError: typeof calculateInvariantWithError;
declare const gyroEMath_calcOutGivenIn: typeof calcOutGivenIn;
declare const gyroEMath_calcInGivenOut: typeof calcInGivenOut;
declare const gyroEMath_calcSpotPriceAfterSwapOutGivenIn: typeof calcSpotPriceAfterSwapOutGivenIn;
declare const gyroEMath_calcSpotPriceAfterSwapInGivenOut: typeof calcSpotPriceAfterSwapInGivenOut;
declare const gyroEMath_calcDerivativePriceAfterSwapOutGivenIn: typeof calcDerivativePriceAfterSwapOutGivenIn;
declare const gyroEMath_calcDerivativeSpotPriceAfterSwapInGivenOut: typeof calcDerivativeSpotPriceAfterSwapInGivenOut;
declare namespace gyroEMath {
  export {
    gyroEMath_calculateNormalizedLiquidity as calculateNormalizedLiquidity,
    gyroEMath_calculateInvariantWithError as calculateInvariantWithError,
    gyroEMath_calcOutGivenIn as calcOutGivenIn,
    gyroEMath_calcInGivenOut as calcInGivenOut,
    gyroEMath_calcSpotPriceAfterSwapOutGivenIn as calcSpotPriceAfterSwapOutGivenIn,
    gyroEMath_calcSpotPriceAfterSwapInGivenOut as calcSpotPriceAfterSwapInGivenOut,
    gyroEMath_calcDerivativePriceAfterSwapOutGivenIn as calcDerivativePriceAfterSwapOutGivenIn,
    gyroEMath_calcDerivativeSpotPriceAfterSwapInGivenOut as calcDerivativeSpotPriceAfterSwapInGivenOut,
  };
}

declare type Params = {
    fee: bigint;
    rate: bigint;
    lowerTarget: bigint;
    upperTarget: bigint;
};
declare function _calcBptOutPerMainIn(mainIn: bigint, mainBalance: bigint, wrappedBalance: bigint, bptSupply: bigint, params: Params): bigint;
declare function _calcBptInPerMainOut(mainOut: bigint, mainBalance: bigint, wrappedBalance: bigint, bptSupply: bigint, params: Params): bigint;
declare function _calcBptInPerWrappedOut(wrappedOut: bigint, mainBalance: bigint, wrappedBalance: bigint, bptSupply: bigint, params: Params): bigint;
declare function _calcWrappedOutPerMainIn(mainIn: bigint, mainBalance: bigint, wrappedBalance: bigint, bptSupply: bigint, params: Params): bigint;
declare function _calcWrappedInPerMainOut(mainOut: bigint, mainBalance: bigint, wrappedBalance: bigint, bptSupply: bigint, params: Params): bigint;
declare function _calcMainInPerBptOut(bptOut: bigint, mainBalance: bigint, wrappedBalance: bigint, bptSupply: bigint, params: Params): bigint;
declare function _calcMainOutPerBptIn(bptIn: bigint, mainBalance: bigint, wrappedBalance: bigint, bptSupply: bigint, params: Params): bigint;
declare function _calcMainOutPerWrappedIn(wrappedIn: bigint, mainBalance: bigint, wrappedBalance: bigint, bptSupply: bigint, params: Params): bigint;
declare function _calcMainInPerWrappedOut(wrappedOut: bigint, mainBalance: bigint, wrappedBalance: bigint, bptSupply: bigint, params: Params): bigint;
declare function _calcBptOutPerWrappedIn(wrappedIn: bigint, mainBalance: bigint, wrappedBalance: bigint, bptSupply: bigint, params: Params): bigint;
declare function _calcWrappedInPerBptOut(bptOut: bigint, mainBalance: bigint, wrappedBalance: bigint, bptSupply: bigint, params: Params): bigint;
declare function _calcWrappedOutPerBptIn(bptIn: bigint, mainBalance: bigint, wrappedBalance: bigint, bptSupply: bigint, params: Params): bigint;
declare function _calcTokensOutGivenExactBptIn(balances: bigint[], bptAmountIn: bigint, bptTotalSupply: bigint, bptIndex: number): bigint[];
declare function _spotPriceAfterSwapBptOutPerMainIn(mainIn: bigint, mainBalance: bigint, wrappedBalance: bigint, bptSupply: bigint, params: Params): bigint;
declare function _spotPriceAfterSwapMainInPerBptOut(bptOut: bigint, mainBalance: bigint, wrappedBalance: bigint, bptSupply: bigint, params: Params): bigint;
declare function _spotPriceAfterSwapMainOutPerBptIn(bptIn: bigint, mainBalance: bigint, wrappedBalance: bigint, bptSupply: bigint, params: Params): bigint;
declare function _spotPriceAfterSwapBptInPerMainOut(mainOut: bigint, mainBalance: bigint, wrappedBalance: bigint, bptSupply: bigint, params: Params): bigint;
declare function _spotPriceAfterSwapMainInPerWrappedOut(wrappedOut: bigint, mainBalance: bigint, wrappedBalance: bigint, bptSupply: bigint, params: Params): bigint;
declare function _spotPriceAfterSwapWrappedInPerMainOut(mainOut: bigint, mainBalance: bigint, wrappedBalance: bigint, bptSupply: bigint, params: Params): bigint;
declare function _spotPriceAfterSwapWrappedOutPerMainIn(mainIn: bigint, mainBalance: bigint, wrappedBalance: bigint, bptSupply: bigint, params: Params): bigint;
declare function _spotPriceAfterSwapMainOutPerWrappedIn(wrappedIn: bigint, mainBalance: bigint, wrappedBalance: bigint, bptSupply: bigint, params: Params): bigint;
declare function _spotPriceAfterSwapBptOutPerWrappedIn(wrappedIn: bigint, mainBalance: bigint, wrappedBalance: bigint, bptSupply: bigint, params: Params): bigint;
declare function _spotPriceAfterSwapWrappedOutPerBptIn(bptIn: bigint, mainBalance: bigint, wrappedBalance: bigint, bptSupply: bigint, params: Params): bigint;
declare function _spotPriceAfterSwapWrappedInPerBptOut(bptOut: bigint, mainBalance: bigint, wrappedBalance: bigint, bptSupply: bigint, params: Params): bigint;
declare function _spotPriceAfterSwapBptInPerWrappedOut(wrappedOut: bigint, mainBalance: bigint, wrappedBalance: bigint, bptSupply: bigint, params: Params): bigint;

declare const linearMath__calcBptOutPerMainIn: typeof _calcBptOutPerMainIn;
declare const linearMath__calcBptInPerMainOut: typeof _calcBptInPerMainOut;
declare const linearMath__calcBptInPerWrappedOut: typeof _calcBptInPerWrappedOut;
declare const linearMath__calcWrappedOutPerMainIn: typeof _calcWrappedOutPerMainIn;
declare const linearMath__calcWrappedInPerMainOut: typeof _calcWrappedInPerMainOut;
declare const linearMath__calcMainInPerBptOut: typeof _calcMainInPerBptOut;
declare const linearMath__calcMainOutPerBptIn: typeof _calcMainOutPerBptIn;
declare const linearMath__calcMainOutPerWrappedIn: typeof _calcMainOutPerWrappedIn;
declare const linearMath__calcMainInPerWrappedOut: typeof _calcMainInPerWrappedOut;
declare const linearMath__calcBptOutPerWrappedIn: typeof _calcBptOutPerWrappedIn;
declare const linearMath__calcWrappedInPerBptOut: typeof _calcWrappedInPerBptOut;
declare const linearMath__calcWrappedOutPerBptIn: typeof _calcWrappedOutPerBptIn;
declare const linearMath__calcTokensOutGivenExactBptIn: typeof _calcTokensOutGivenExactBptIn;
declare const linearMath__spotPriceAfterSwapBptOutPerMainIn: typeof _spotPriceAfterSwapBptOutPerMainIn;
declare const linearMath__spotPriceAfterSwapMainInPerBptOut: typeof _spotPriceAfterSwapMainInPerBptOut;
declare const linearMath__spotPriceAfterSwapMainOutPerBptIn: typeof _spotPriceAfterSwapMainOutPerBptIn;
declare const linearMath__spotPriceAfterSwapBptInPerMainOut: typeof _spotPriceAfterSwapBptInPerMainOut;
declare const linearMath__spotPriceAfterSwapMainInPerWrappedOut: typeof _spotPriceAfterSwapMainInPerWrappedOut;
declare const linearMath__spotPriceAfterSwapWrappedInPerMainOut: typeof _spotPriceAfterSwapWrappedInPerMainOut;
declare const linearMath__spotPriceAfterSwapWrappedOutPerMainIn: typeof _spotPriceAfterSwapWrappedOutPerMainIn;
declare const linearMath__spotPriceAfterSwapMainOutPerWrappedIn: typeof _spotPriceAfterSwapMainOutPerWrappedIn;
declare const linearMath__spotPriceAfterSwapBptOutPerWrappedIn: typeof _spotPriceAfterSwapBptOutPerWrappedIn;
declare const linearMath__spotPriceAfterSwapWrappedOutPerBptIn: typeof _spotPriceAfterSwapWrappedOutPerBptIn;
declare const linearMath__spotPriceAfterSwapWrappedInPerBptOut: typeof _spotPriceAfterSwapWrappedInPerBptOut;
declare const linearMath__spotPriceAfterSwapBptInPerWrappedOut: typeof _spotPriceAfterSwapBptInPerWrappedOut;
declare namespace linearMath {
  export {
    linearMath__calcBptOutPerMainIn as _calcBptOutPerMainIn,
    linearMath__calcBptInPerMainOut as _calcBptInPerMainOut,
    linearMath__calcBptInPerWrappedOut as _calcBptInPerWrappedOut,
    linearMath__calcWrappedOutPerMainIn as _calcWrappedOutPerMainIn,
    linearMath__calcWrappedInPerMainOut as _calcWrappedInPerMainOut,
    linearMath__calcMainInPerBptOut as _calcMainInPerBptOut,
    linearMath__calcMainOutPerBptIn as _calcMainOutPerBptIn,
    linearMath__calcMainOutPerWrappedIn as _calcMainOutPerWrappedIn,
    linearMath__calcMainInPerWrappedOut as _calcMainInPerWrappedOut,
    linearMath__calcBptOutPerWrappedIn as _calcBptOutPerWrappedIn,
    linearMath__calcWrappedInPerBptOut as _calcWrappedInPerBptOut,
    linearMath__calcWrappedOutPerBptIn as _calcWrappedOutPerBptIn,
    linearMath__calcTokensOutGivenExactBptIn as _calcTokensOutGivenExactBptIn,
    linearMath__spotPriceAfterSwapBptOutPerMainIn as _spotPriceAfterSwapBptOutPerMainIn,
    linearMath__spotPriceAfterSwapMainInPerBptOut as _spotPriceAfterSwapMainInPerBptOut,
    linearMath__spotPriceAfterSwapMainOutPerBptIn as _spotPriceAfterSwapMainOutPerBptIn,
    linearMath__spotPriceAfterSwapBptInPerMainOut as _spotPriceAfterSwapBptInPerMainOut,
    linearMath__spotPriceAfterSwapMainInPerWrappedOut as _spotPriceAfterSwapMainInPerWrappedOut,
    linearMath__spotPriceAfterSwapWrappedInPerMainOut as _spotPriceAfterSwapWrappedInPerMainOut,
    linearMath__spotPriceAfterSwapWrappedOutPerMainIn as _spotPriceAfterSwapWrappedOutPerMainIn,
    linearMath__spotPriceAfterSwapMainOutPerWrappedIn as _spotPriceAfterSwapMainOutPerWrappedIn,
    linearMath__spotPriceAfterSwapBptOutPerWrappedIn as _spotPriceAfterSwapBptOutPerWrappedIn,
    linearMath__spotPriceAfterSwapWrappedOutPerBptIn as _spotPriceAfterSwapWrappedOutPerBptIn,
    linearMath__spotPriceAfterSwapWrappedInPerBptOut as _spotPriceAfterSwapWrappedInPerBptOut,
    linearMath__spotPriceAfterSwapBptInPerWrappedOut as _spotPriceAfterSwapBptInPerWrappedOut,
  };
}

export { ComposableStablePool, DerivedGyroEParams, FundManagement, GraphQLArgs, gyro2Math as Gyro2Maths, gyro3Math as Gyro3Maths, gyroEMath as GyroEMaths, GyroEParams, linearMath as LinearMaths, LinearPool, MetaStablePool, NewPath, NoNullableField, PhantomStablePool, PoolBase, PoolDataService, PoolDictionary, PoolFilter, PoolPairBase, PoolPairDictionary, PoolTypes, RouteProposer, SOR, SorConfig, stableMathBigInt as StableMathBigInt, stableMath as StableMaths, StablePool, SubgraphPoolBase, SubgraphToken, SubgraphTokenData, Swap, SwapInfo, SwapOptions, SwapTypes, SwapV2, TokenPriceService, Vector2, weightedMath as WeightedMaths, WeightedPool, ZERO, balancesFromTokenInOut, bnum, formatSequence, getSpotPriceAfterSwapForPath, getTokenAddressesForSwap, hopDictionary, parseToPoolsDict, BPTForTokensZeroPriceImpact as stableBPTForTokensZeroPriceImpact, BPTForTokensZeroPriceImpact$1 as weightedBPTForTokensZeroPriceImpact };
