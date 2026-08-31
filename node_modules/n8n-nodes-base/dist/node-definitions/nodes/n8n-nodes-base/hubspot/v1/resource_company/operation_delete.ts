/**
 * HubSpot Node - Version 1
 * Discriminator: resource=company, operation=delete
 */


interface Credentials {
  hubspotApi: CredentialReference;
  hubspotAppToken: CredentialReference;
  hubspotOAuth2Api: CredentialReference;
}

/** Delete a contact */
export type HubspotV1CompanyDeleteParams = {
  resource: 'company';
  operation: 'delete';
  authentication?: 'apiKey' | 'appToken' | 'oAuth2' | Expression<string>;
/**
 * Unique identifier for a particular company
 */
    companyId?: string | Expression<string> | PlaceholderValue;
};

export type HubspotV1CompanyDeleteNode = {
  type: 'n8n-nodes-base.hubspot';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<HubspotV1CompanyDeleteParams>;
};