/**
 * Keap Node - Version 1
 * Discriminator: resource=ecommerceProduct, operation=delete
 */


interface Credentials {
  keapOAuth2Api: CredentialReference;
}

/** Delete an contact */
export type KeapV1EcommerceProductDeleteParams = {
  resource: 'ecommerceProduct';
  operation: 'delete';
/**
 * Product ID
 */
    productId?: string | Expression<string> | PlaceholderValue;
};

export type KeapV1EcommerceProductDeleteNode = {
  type: 'n8n-nodes-base.keap';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<KeapV1EcommerceProductDeleteParams>;
};