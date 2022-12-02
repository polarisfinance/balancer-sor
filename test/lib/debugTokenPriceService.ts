import { Cache, CacheClass } from 'memory-cache';
import fetch from 'isomorphic-fetch';
import { TokenPriceService } from '../../src';
import { SOR_CONFIG } from '../testScripts/constants';
import { prisma } from './databasePoolDataService';

export class DebugTokenPriceService implements TokenPriceService {
    priceCace: CacheClass<string, number> = new Cache<string, number>();
    constructor(private readonly chainId: number) {}

    public async getNativeAssetPriceInToken(
        tokenAddress: string
    ): Promise<string> {
        const nativeAssetAddress = SOR_CONFIG[this.chainId].weth.toLowerCase();
        let normalizedTokenAddress = tokenAddress.toLowerCase();

        // if (
        //     normalizedTokenAddress === networkConfig.eth.address.toLowerCase()
        // ) {
        //     normalizedTokenAddress = networkConfig.weth.address.toLowerCase();
        // }
        const nativeAssetPrice = this.priceCace.get(nativeAssetAddress);
        const tokenPrice = this.priceCace.get(normalizedTokenAddress);
        if (nativeAssetPrice && tokenPrice) {
            return `${nativeAssetPrice / tokenPrice}`;
        } else {
            const tokenPrices = await prisma.prismaTokenCurrentPrice.findMany({
                where: {
                    OR: [
                        { tokenAddress: normalizedTokenAddress },
                        { tokenAddress: nativeAssetAddress },
                    ],
                },
            });
            const tokenPrice = tokenPrices.find(
                (price) => price.tokenAddress === normalizedTokenAddress
            );
            const nativeAssetPrice = tokenPrices.find(
                (price) => price.tokenAddress === nativeAssetAddress
            );

            if (tokenPrice && nativeAssetPrice) {
                this.priceCace.put(
                    normalizedTokenAddress,
                    tokenPrice.price,
                    30 * 1000
                );
                this.priceCace.put(
                    nativeAssetAddress,
                    nativeAssetPrice.price,
                    30 * 1000
                );
                const price = `${nativeAssetPrice.price / tokenPrice.price}`;
                console.log(`Native asset price`, price);
                return price;
            } else {
                console.log(
                    `Missing token price: native: ${nativeAssetPrice}, token: ${tokenPrice}`
                );
                return '0';
            }
        }

        const ethPerToken = await this.getTokenPriceInNativeAsset(tokenAddress);

        // We get the price of token in terms of ETH
        // We want the price of 1 ETH in terms of the token base units
        return `${1 / parseFloat(ethPerToken)}`;
    }

    /**
     * @dev Assumes that the native asset has 18 decimals
     * @param tokenAddress - the address of the token contract
     * @returns the price of 1 ETH in terms of the token base units
     */
    async getTokenPriceInNativeAsset(tokenAddress: string): Promise<string> {
        const nativeAssetAddress =
            '0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83'.toLowerCase();
        let normalizedTokenAddress = tokenAddress.toLowerCase();

        // if (
        //     normalizedTokenAddress === networkConfig.eth.address.toLowerCase()
        // ) {
        //     normalizedTokenAddress = networkConfig.weth.address.toLowerCase();
        // }
        const nativeAssetPrice = parseFloat(
            await this.getPriceForToken(nativeAssetAddress)
        );
        const tokenPrice = parseFloat(
            await this.getPriceForToken(normalizedTokenAddress)
        );
        if (nativeAssetPrice && tokenPrice) {
            return `${nativeAssetPrice / tokenPrice}`;
        } else {
            console.log(
                `Missing token price: native: ${nativeAssetPrice}, token: ${tokenPrice}`
            );
            return '0';
        }
    }

    private async getPriceForToken(tokenAddress: string) {
        const endpoint = `https://api.coingecko.com/api/v3/simple/token_price/${this.platformId}?contract_addresses=${tokenAddress}&vs_currencies=usd`;

        const response = await fetch(endpoint, {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        });

        const data = await response.json();
        console.log(data);

        if (data[tokenAddress.toLowerCase()] === undefined) {
            throw Error(`No price returned from Coingecko for ${tokenAddress}`);
        }

        return data[tokenAddress.toLowerCase()]['usd'];
    }

    private get platformId(): string {
        switch (this.chainId) {
            case 1:
                return 'ethereum';
            case 42:
                return 'ethereum';
            case 137:
                return 'polygon-pos';
            case 42161:
                return 'arbitrum-one';
            case 250:
                return 'fantom';
        }

        return '2';
    }

    private get nativeAssetId(): string {
        switch (this.chainId) {
            case 1:
                return 'eth';
            case 42:
                return 'eth';
            case 137:
                return '';
            case 42161:
                return 'eth';
            case 250:
                return 'ftm';
        }

        return '';
    }
}
