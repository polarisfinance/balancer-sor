import fetch from 'isomorphic-fetch';

const SUBGRAPH_URL =
    process.env.SUBGRAPH_URL ||
    'https://api.thegraph.com/subgraphs/name/balancer-labs/balancer-kovan-v2';

// Returns all public pools
export async function fetchSubgraphPools(SubgraphUrl: string = '') {
    // can filter for publicSwap too??
    const query = `
      {
        pools: pools(first: 1000, where: {id_not_in: ["0xae1c69eae0f1342425ea3fdb51e9f11223c7ad5b00010000000000000000000b", "0x5018fa8aa910fa2eea07529d80e7a44b2e2d29cf000100000000000000000022", "0xe2fd25b84aa76486e0cbc2c2ca383c3587abb942000100000000000000000028"]}) {
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

    console.log(
        `fetchSubgraphPools: ${SubgraphUrl === '' ? SUBGRAPH_URL : SubgraphUrl}`
    );
    const response = await fetch(
        SubgraphUrl === '' ? SUBGRAPH_URL : SubgraphUrl,
        {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                query,
            }),
        }
    );

    const { data } = await response.json();

    return { pools: data.pools };
}
