/**
 * Notion Node - Version 2
 * Discriminator: resource=user, operation=get
 */


interface Credentials {
  notionApi: CredentialReference;
}

/** Get a database */
export type NotionV2UserGetParams = {
  resource: 'user';
  operation: 'get';
/**
 * User ID
 */
    userId?: string | Expression<string> | PlaceholderValue;
};

export type NotionV2UserGetOutput = {
  id?: string;
  name?: string;
  object?: string;
  person?: {
    email?: string;
  };
  request_id?: string;
  type?: string;
};

export type NotionV2UserGetNode = {
  type: 'n8n-nodes-base.notion';
  version: 2;
  credentials?: Credentials;
  config: NodeConfig<NotionV2UserGetParams>;
  output?: Items<NotionV2UserGetOutput>;
};