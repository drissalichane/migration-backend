/**
 * Zendesk Node - Version 1
 * Discriminator: resource=user, operation=getRelatedData
 */


interface Credentials {
  zendeskApi: CredentialReference;
  zendeskOAuth2Api: CredentialReference;
}

/** Manage users */
export type ZendeskV1UserGetRelatedDataParams = {
  resource: 'user';
  operation: 'getRelatedData';
  authentication?: 'apiToken' | 'oAuth2' | Expression<string>;
/**
 * User ID
 */
    id?: string | Expression<string> | PlaceholderValue;
};

export type ZendeskV1UserGetRelatedDataOutput = {
  assigned_tickets?: number;
  ccd_tickets?: number;
  followed_tickets?: number;
  organization_subscriptions?: number;
  requested_tickets?: number;
};

export type ZendeskV1UserGetRelatedDataNode = {
  type: 'n8n-nodes-base.zendesk';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<ZendeskV1UserGetRelatedDataParams>;
  output?: Items<ZendeskV1UserGetRelatedDataOutput>;
};