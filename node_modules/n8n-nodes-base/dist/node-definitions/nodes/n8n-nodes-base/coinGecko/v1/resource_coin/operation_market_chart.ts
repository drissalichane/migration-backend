/**
 * CoinGecko Node - Version 1
 * Discriminator: resource=coin, operation=marketChart
 */


/** Get historical market data include price, market cap, and 24h volume (granularity auto) */
export type CoinGeckoV1CoinMarketChartParams = {
  resource: 'coin';
  operation: 'marketChart';
/**
 * Search by coin ID or contract address
 * @default coinId
 */
    searchBy?: 'coinId' | 'contractAddress' | Expression<string>;
/**
 * The ID of the platform issuing tokens
 * @displayOptions.show { searchBy: ["contractAddress"] }
 * @default ethereum
 */
    platformId?: 'ethereum' | Expression<string>;
/**
 * Token's contract address
 * @displayOptions.show { searchBy: ["contractAddress"] }
 */
    contractAddress?: string | Expression<string> | PlaceholderValue;
/**
 * The first currency in the pair. For BTC:ETH this is BTC. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
 * @displayOptions.show { searchBy: ["coinId"] }
 * @displayOptions.hide { searchBy: ["contractAddress"] }
 */
    baseCurrency?: string | Expression<string>;
/**
 * The second currency in the pair. For BTC:ETH this is ETH. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
 */
    quoteCurrency?: string | Expression<string>;
/**
 * Return data for this many days in the past from now
 */
    days?: '1' | '7' | '14' | '30' | '90' | '180' | '365' | 'max' | Expression<string>;
};

export type CoinGeckoV1CoinMarketChartOutput = {
  time?: string;
};

export type CoinGeckoV1CoinMarketChartNode = {
  type: 'n8n-nodes-base.coinGecko';
  version: 1;
  config: NodeConfig<CoinGeckoV1CoinMarketChartParams>;
  output?: Items<CoinGeckoV1CoinMarketChartOutput>;
};