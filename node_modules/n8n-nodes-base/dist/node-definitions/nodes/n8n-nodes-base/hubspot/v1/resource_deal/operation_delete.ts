/**
 * HubSpot Node - Version 1
 * Discriminator: resource=deal, operation=delete
 */


interface Credentials {
  hubspotApi: CredentialReference;
  hubspotAppToken: CredentialReference;
  hubspotOAuth2Api: CredentialReference;
}

/** Delete a contact */
export type HubspotV1DealDeleteParams = {
  resource: 'deal';
  operation: 'delete';
  authentication?: 'apiKey' | 'appToken' | 'oAuth2' | Expression<string>;
/**
 * Unique identifier for a particular deal
 */
    dealId?: string | Expression<string> | PlaceholderValue;
};

export type HubspotV1DealDeleteNode = {
  type: 'n8n-nodes-base.hubspot';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<HubspotV1DealDeleteParams>;
};