/**
 * Notion Node - Version 2.1
 * Discriminator: resource=user, operation=get
 */


interface Credentials {
  notionApi: CredentialReference;
}

/** Get a database */
export type NotionV21UserGetParams = {
  resource: 'user';
  operation: 'get';
/**
 * User ID
 */
    userId?: string | Expression<string> | PlaceholderValue;
};

export type NotionV21UserGetOutput = {
  id?: string;
  name?: string;
  object?: string;
  person?: {
    email?: string;
  };
  request_id?: string;
  type?: string;
};

export type NotionV21UserGetNode = {
  type: 'n8n-nodes-base.notion';
  version: 2.1;
  credentials?: Credentials;
  config: NodeConfig<NotionV21UserGetParams>;
  output?: Items<NotionV21UserGetOutput>;
};