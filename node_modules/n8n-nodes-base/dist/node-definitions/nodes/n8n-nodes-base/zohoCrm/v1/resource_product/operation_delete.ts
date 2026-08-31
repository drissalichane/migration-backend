/**
 * Zoho CRM Node - Version 1
 * Discriminator: resource=product, operation=delete
 */


interface Credentials {
  zohoOAuth2Api: CredentialReference;
}

/** Delete an account */
export type ZohoCrmV1ProductDeleteParams = {
  resource: 'product';
  operation: 'delete';
/**
 * ID of the product to delete
 */
    productId?: string | Expression<string> | PlaceholderValue;
};

export type ZohoCrmV1ProductDeleteNode = {
  type: 'n8n-nodes-base.zohoCrm';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<ZohoCrmV1ProductDeleteParams>;
};