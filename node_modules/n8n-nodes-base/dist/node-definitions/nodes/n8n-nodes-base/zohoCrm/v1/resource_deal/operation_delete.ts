/**
 * Zoho CRM Node - Version 1
 * Discriminator: resource=deal, operation=delete
 */


interface Credentials {
  zohoOAuth2Api: CredentialReference;
}

/** Delete an account */
export type ZohoCrmV1DealDeleteParams = {
  resource: 'deal';
  operation: 'delete';
/**
 * ID of the deal to delete
 */
    dealId?: string | Expression<string> | PlaceholderValue;
};

export type ZohoCrmV1DealDeleteNode = {
  type: 'n8n-nodes-base.zohoCrm';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<ZohoCrmV1DealDeleteParams>;
};