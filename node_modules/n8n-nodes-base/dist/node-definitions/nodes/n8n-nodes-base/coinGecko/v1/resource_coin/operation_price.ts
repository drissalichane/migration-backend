/**
 * CoinGecko Node - Version 1
 * Discriminator: resource=coin, operation=price
 */


/** Get the current price of any cryptocurrencies in any other supported currencies that you need */
export type CoinGeckoV1CoinPriceParams = {
  resource: 'coin';
  operation: 'price';
/**
 * Search by coin ID or contract address
 * @default coinId
 */
    searchBy?: 'coinId' | 'contractAddress' | Expression<string>;
/**
 * The first currency in the pair. For BTC:ETH this is BTC. Choose from the list, or specify IDs using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
 * @displayOptions.show { searchBy: ["coinId"] }
 * @default []
 */
    baseCurrencies?: string[];
/**
 * The ID of the platform issuing tokens
 * @displayOptions.show { searchBy: ["contractAddress"] }
 * @default ethereum
 */
    platformId?: 'ethereum' | Expression<string>;
/**
 * The contract address of tokens, comma-separated
 * @displayOptions.show { searchBy: ["contractAddress"] }
 */
    contractAddresses?: string | Expression<string> | PlaceholderValue;
/**
 * The second currency in the pair. For BTC:ETH this is ETH. Choose from the list, or specify IDs using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
 * @default []
 */
    quoteCurrencies?: string[];
/**
 * Options
 * @default {}
 */
    options?: {
    /** Include 24hr Change
     * @default false
     */
    include_24hr_change?: boolean | Expression<boolean>;
    /** Include 24hr Vol
     * @default false
     */
    include_24hr_vol?: boolean | Expression<boolean>;
    /** Include Last Updated At
     * @default false
     */
    include_last_updated_at?: boolean | Expression<boolean>;
    /** Include Market Cap
     * @default false
     */
    include_market_cap?: boolean | Expression<boolean>;
  };
};

export type CoinGeckoV1CoinPriceOutput = {
  algorand?: {
    usd?: number;
    usd_24h_change?: number;
    usd_market_cap?: number;
  };
  'avalanche-2'?: {
    usd?: number;
    usd_24h_change?: number;
    usd_market_cap?: number;
  };
  binancecoin?: {
    usd?: number;
    usd_24h_change?: number;
    usd_market_cap?: number;
  };
  bitcoin?: {
    usd?: number;
    usd_24h_change?: number;
    usd_market_cap?: number;
  };
  cardano?: {
    gbp?: number;
    gbp_24h_change?: number;
    gbp_24h_vol?: number;
    gbp_market_cap?: number;
    usd?: number;
    usd_24h_change?: number;
    usd_24h_vol?: number;
    usd_market_cap?: number;
  };
  chainlink?: {
    usd?: number;
    usd_24h_change?: number;
    usd_market_cap?: number;
  };
  cosmos?: {
    usd?: number;
    usd_24h_change?: number;
    usd_market_cap?: number;
  };
  dogecoin?: {
    usd?: number;
    usd_24h_change?: number;
    usd_market_cap?: number;
  };
  ethereum?: {
    usd?: number;
    usd_24h_change?: number;
    usd_market_cap?: number;
  };
  filecoin?: {
    usd?: number;
    usd_24h_change?: number;
    usd_market_cap?: number;
  };
  'internet-computer'?: {
    usd?: number;
    usd_24h_change?: number;
    usd_market_cap?: number;
  };
  litecoin?: {
    usd?: number;
    usd_24h_change?: number;
    usd_market_cap?: number;
  };
  'nacho-the-kat'?: {
    usd: number;
  };
  polkadot?: {
    usd?: number;
    usd_24h_change?: number;
    usd_market_cap?: number;
  };
  ripple?: {
    usd?: number;
    usd_24h_change?: number;
    usd_market_cap?: number;
  };
  solana?: {
    usd?: number;
    usd_24h_change?: number;
    usd_market_cap?: number;
  };
  stellar?: {
    usd?: number;
    usd_24h_change?: number;
    usd_market_cap?: number;
  };
  tron?: {
    usd?: number;
    usd_24h_change?: number;
    usd_market_cap?: number;
  };
  uniswap?: {
    usd?: number;
    usd_24h_change?: number;
    usd_market_cap?: number;
  };
  vechain?: {
    usd?: number;
    usd_24h_change?: number;
    usd_market_cap?: number;
  };
};

export type CoinGeckoV1CoinPriceNode = {
  type: 'n8n-nodes-base.coinGecko';
  version: 1;
  config: NodeConfig<CoinGeckoV1CoinPriceParams>;
  output?: Items<CoinGeckoV1CoinPriceOutput>;
};