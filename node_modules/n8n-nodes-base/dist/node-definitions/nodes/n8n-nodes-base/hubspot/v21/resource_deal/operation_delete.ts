/**
 * HubSpot Node - Version 2.1
 * Discriminator: resource=deal, operation=delete
 */


interface Credentials {
  hubspotApi: CredentialReference;
  hubspotAppToken: CredentialReference;
  hubspotOAuth2Api: CredentialReference;
}

/** Delete a contact */
export type HubspotV21DealDeleteParams = {
  resource: 'deal';
  operation: 'delete';
  authentication?: 'apiKey' | 'appToken' | 'oAuth2' | Expression<string>;
/**
 * Deal to Delete
 * @default {"mode":"list","value":""}
 */
    dealId?: { __rl: true; mode: 'list' | 'id'; value: string; cachedResultName?: string };
};

export type HubspotV21DealDeleteNode = {
  type: 'n8n-nodes-base.hubspot';
  version: 2.1;
  credentials?: Credentials;
  config: NodeConfig<HubspotV21DealDeleteParams>;
};