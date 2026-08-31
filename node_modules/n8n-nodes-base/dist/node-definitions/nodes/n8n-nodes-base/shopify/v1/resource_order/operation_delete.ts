/**
 * Shopify Node - Version 1
 * Discriminator: resource=order, operation=delete
 */


interface Credentials {
  shopifyApi: CredentialReference;
  shopifyAccessTokenApi: CredentialReference;
  shopifyOAuth2Api: CredentialReference;
}

/** Delete an order */
export type ShopifyV1OrderDeleteParams = {
  resource: 'order';
  operation: 'delete';
  authentication?: 'accessToken' | 'oAuth2' | 'apiKey' | Expression<string>;
/**
 * Order ID
 */
    orderId?: string | Expression<string> | PlaceholderValue;
};

export type ShopifyV1OrderDeleteNode = {
  type: 'n8n-nodes-base.shopify';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<ShopifyV1OrderDeleteParams>;
};