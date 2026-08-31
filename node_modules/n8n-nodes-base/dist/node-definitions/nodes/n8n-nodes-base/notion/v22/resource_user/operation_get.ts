/**
 * Notion Node - Version 2.2
 * Discriminator: resource=user, operation=get
 */


interface Credentials {
  notionApi: CredentialReference;
}

/** Get a database */
export type NotionV22UserGetParams = {
  resource: 'user';
  operation: 'get';
/**
 * User ID
 */
    userId?: string | Expression<string> | PlaceholderValue;
};

export type NotionV22UserGetOutput = {
  id?: string;
  name?: string;
  object?: string;
  person?: {
    email?: string;
  };
  request_id?: string;
  type?: string;
};

export type NotionV22UserGetNode = {
  type: 'n8n-nodes-base.notion';
  version: 2.2;
  credentials?: Credentials;
  config: NodeConfig<NotionV22UserGetParams>;
  output?: Items<NotionV22UserGetOutput>;
};