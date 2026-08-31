/**
 * Zendesk Node - Version 1
 * Discriminator: resource=organization, operation=get
 */


interface Credentials {
  zendeskApi: CredentialReference;
  zendeskOAuth2Api: CredentialReference;
}

/** Manage organizations */
export type ZendeskV1OrganizationGetParams = {
  resource: 'organization';
  operation: 'get';
  authentication?: 'apiToken' | 'oAuth2' | Expression<string>;
/**
 * Organization ID
 */
    id?: string | Expression<string> | PlaceholderValue;
};

export type ZendeskV1OrganizationGetNode = {
  type: 'n8n-nodes-base.zendesk';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<ZendeskV1OrganizationGetParams>;
};