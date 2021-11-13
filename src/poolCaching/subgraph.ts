import fetch from 'isomorphic-fetch';
import { SubgraphPoolBase } from '../types';

// Returns all public pools
export async function fetchSubgraphPools(
    subgraphUrl: string
): Promise<SubgraphPoolBase[]> {
    // can filter for publicSwap too??
    const query = `
      {
        pools: pools(
          first: 1000,
          where: { swapEnabled: true, id_not_in: ["0xae1c69eae0f1342425ea3fdb51e9f11223c7ad5b00010000000000000000000b", "0x5018fa8aa910fa2eea07529d80e7a44b2e2d29cf000100000000000000000022", "0xe2fd25b84aa76486e0cbc2c2ca383c3587abb942000100000000000000000028", "0x51c5875ee17f1af4ddca0ce0df8dcad0b115b191000100000000000000000012", "0x78dec89d3b32f80fb388da61d87fc4c750d92b4e000200000000000000000087"] },
          orderBy: totalLiquidity,
          orderDirection: desc
        ) {
          id
          address
          poolType
          swapFee
          totalShares
          tokens {
            address
            balance
            decimals
            weight
            priceRate
          }
          tokensList
          totalWeight
          amp
          expiryTime
          unitSeconds
          principalToken
          baseToken
          swapEnabled
        }
      }
    `;

    const response = await fetch(subgraphUrl, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query,
        }),
    });

    const { data } = await response.json();

    return data.pools ?? [];
}
