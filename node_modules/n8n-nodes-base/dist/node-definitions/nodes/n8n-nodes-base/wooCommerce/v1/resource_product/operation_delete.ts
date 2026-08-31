/**
 * WooCommerce Node - Version 1
 * Discriminator: resource=product, operation=delete
 */


interface Credentials {
  wooCommerceApi: CredentialReference;
}

/** Delete a customer */
export type WooCommerceV1ProductDeleteParams = {
  resource: 'product';
  operation: 'delete';
/**
 * Product ID
 */
    productId?: string | Expression<string> | PlaceholderValue;
};

export type WooCommerceV1ProductDeleteNode = {
  type: 'n8n-nodes-base.wooCommerce';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<WooCommerceV1ProductDeleteParams>;
};