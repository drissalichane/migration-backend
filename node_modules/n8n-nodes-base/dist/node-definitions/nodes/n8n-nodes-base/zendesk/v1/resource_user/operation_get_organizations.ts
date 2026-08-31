/**
 * Zendesk Node - Version 1
 * Discriminator: resource=user, operation=getOrganizations
 */


interface Credentials {
  zendeskApi: CredentialReference;
  zendeskOAuth2Api: CredentialReference;
}

/** Manage users */
export type ZendeskV1UserGetOrganizationsParams = {
  resource: 'user';
  operation: 'getOrganizations';
  authentication?: 'apiToken' | 'oAuth2' | Expression<string>;
/**
 * User ID
 */
    id?: string | Expression<string> | PlaceholderValue;
};

export type ZendeskV1UserGetOrganizationsNode = {
  type: 'n8n-nodes-base.zendesk';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<ZendeskV1UserGetOrganizationsParams>;
};