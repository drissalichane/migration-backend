/**
 * Zendesk Node - Version 1
 * Discriminator: resource=organization, operation=getRelatedData
 */


interface Credentials {
  zendeskApi: CredentialReference;
  zendeskOAuth2Api: CredentialReference;
}

/** Manage organizations */
export type ZendeskV1OrganizationGetRelatedDataParams = {
  resource: 'organization';
  operation: 'getRelatedData';
  authentication?: 'apiToken' | 'oAuth2' | Expression<string>;
/**
 * Organization ID
 */
    id?: string | Expression<string> | PlaceholderValue;
};

export type ZendeskV1OrganizationGetRelatedDataNode = {
  type: 'n8n-nodes-base.zendesk';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<ZendeskV1OrganizationGetRelatedDataParams>;
};