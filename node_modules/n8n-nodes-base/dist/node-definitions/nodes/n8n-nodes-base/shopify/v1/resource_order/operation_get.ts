/**
 * Shopify Node - Version 1
 * Discriminator: resource=order, operation=get
 */


interface Credentials {
  shopifyApi: CredentialReference;
  shopifyAccessTokenApi: CredentialReference;
  shopifyOAuth2Api: CredentialReference;
}

/** Get an order */
export type ShopifyV1OrderGetParams = {
  resource: 'order';
  operation: 'get';
  authentication?: 'accessToken' | 'oAuth2' | 'apiKey' | Expression<string>;
/**
 * Order ID
 */
    orderId?: string | Expression<string> | PlaceholderValue;
/**
 * Options
 * @default {}
 */
    options?: {
    /** Fields the order will return, formatted as a string of comma-separated values. By default all the fields are returned.
     */
    fields?: string | Expression<string> | PlaceholderValue;
  };
};

export type ShopifyV1OrderGetOutput = {
  id?: number;
};

export type ShopifyV1OrderGetNode = {
  type: 'n8n-nodes-base.shopify';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<ShopifyV1OrderGetParams>;
  output?: Items<ShopifyV1OrderGetOutput>;
};