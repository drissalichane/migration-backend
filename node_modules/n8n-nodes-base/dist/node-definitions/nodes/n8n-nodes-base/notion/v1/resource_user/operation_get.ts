/**
 * Notion Node - Version 1
 * Discriminator: resource=user, operation=get
 */


interface Credentials {
  notionApi: CredentialReference;
}

/** Get a database */
export type NotionV1UserGetParams = {
  resource: 'user';
  operation: 'get';
/**
 * User ID
 */
    userId?: string | Expression<string> | PlaceholderValue;
};

export type NotionV1UserGetNode = {
  type: 'n8n-nodes-base.notion';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<NotionV1UserGetParams>;
};