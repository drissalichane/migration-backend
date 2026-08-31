/**
 * Zoho CRM Node - Version 1
 * Discriminator: resource=lead, operation=delete
 */


interface Credentials {
  zohoOAuth2Api: CredentialReference;
}

/** Delete an account */
export type ZohoCrmV1LeadDeleteParams = {
  resource: 'lead';
  operation: 'delete';
/**
 * ID of the lead to delete
 */
    leadId?: string | Expression<string> | PlaceholderValue;
};

export type ZohoCrmV1LeadDeleteNode = {
  type: 'n8n-nodes-base.zohoCrm';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<ZohoCrmV1LeadDeleteParams>;
};