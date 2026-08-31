/**
 * Zoho CRM Node - Version 1
 * Discriminator: resource=lead, operation=get
 */


interface Credentials {
  zohoOAuth2Api: CredentialReference;
}

/** Get an account */
export type ZohoCrmV1LeadGetParams = {
  resource: 'lead';
  operation: 'get';
/**
 * ID of the lead to retrieve
 */
    leadId?: string | Expression<string> | PlaceholderValue;
};

export type ZohoCrmV1LeadGetNode = {
  type: 'n8n-nodes-base.zohoCrm';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<ZohoCrmV1LeadGetParams>;
};