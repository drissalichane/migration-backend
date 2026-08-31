/**
 * Zoho CRM Node - Version 1
 * Discriminator: resource=product, operation=get
 */


interface Credentials {
  zohoOAuth2Api: CredentialReference;
}

/** Get an account */
export type ZohoCrmV1ProductGetParams = {
  resource: 'product';
  operation: 'get';
/**
 * ID of the product to retrieve
 */
    productId?: string | Expression<string> | PlaceholderValue;
};

export type ZohoCrmV1ProductGetNode = {
  type: 'n8n-nodes-base.zohoCrm';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<ZohoCrmV1ProductGetParams>;
};