/**
 * Freshservice Node - Version 1
 * Discriminator: resource=product, operation=delete
 */


interface Credentials {
  freshserviceApi: CredentialReference;
}

/** Delete an agent */
export type FreshserviceV1ProductDeleteParams = {
  resource: 'product';
  operation: 'delete';
/**
 * ID of the product to delete
 */
    productId?: string | Expression<string> | PlaceholderValue;
};

export type FreshserviceV1ProductDeleteNode = {
  type: 'n8n-nodes-base.freshservice';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<FreshserviceV1ProductDeleteParams>;
};