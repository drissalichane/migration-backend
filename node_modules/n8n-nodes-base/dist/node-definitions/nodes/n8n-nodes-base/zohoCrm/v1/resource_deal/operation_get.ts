/**
 * Zoho CRM Node - Version 1
 * Discriminator: resource=deal, operation=get
 */


interface Credentials {
  zohoOAuth2Api: CredentialReference;
}

/** Get an account */
export type ZohoCrmV1DealGetParams = {
  resource: 'deal';
  operation: 'get';
/**
 * ID of the deal to retrieve
 */
    dealId?: string | Expression<string> | PlaceholderValue;
};

export type ZohoCrmV1DealGetNode = {
  type: 'n8n-nodes-base.zohoCrm';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<ZohoCrmV1DealGetParams>;
};