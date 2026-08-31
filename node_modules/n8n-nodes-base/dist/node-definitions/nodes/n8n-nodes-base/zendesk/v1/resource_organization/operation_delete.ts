/**
 * Zendesk Node - Version 1
 * Discriminator: resource=organization, operation=delete
 */


interface Credentials {
  zendeskApi: CredentialReference;
  zendeskOAuth2Api: CredentialReference;
}

/** Manage organizations */
export type ZendeskV1OrganizationDeleteParams = {
  resource: 'organization';
  operation: 'delete';
  authentication?: 'apiToken' | 'oAuth2' | Expression<string>;
/**
 * Organization ID
 */
    id?: string | Expression<string> | PlaceholderValue;
};

export type ZendeskV1OrganizationDeleteNode = {
  type: 'n8n-nodes-base.zendesk';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<ZendeskV1OrganizationDeleteParams>;
};