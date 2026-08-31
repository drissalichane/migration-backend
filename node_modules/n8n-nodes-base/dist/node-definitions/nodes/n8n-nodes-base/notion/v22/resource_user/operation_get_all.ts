/**
 * Notion Node - Version 2.2
 * Discriminator: resource=user, operation=getAll
 */


interface Credentials {
  notionApi: CredentialReference;
}

/** Get many child blocks */
export type NotionV22UserGetAllParams = {
  resource: 'user';
  operation: 'getAll';
/**
 * Whether to return all results or only up to a given limit
 * @default false
 */
    returnAll?: boolean | Expression<boolean>;
/**
 * Max number of results to return
 * @displayOptions.show { returnAll: [false] }
 * @default 50
 */
    limit?: number | Expression<number>;
};

export type NotionV22UserGetAllOutput = {
  id?: string;
  name?: string;
  object?: string;
  person?: {
    email?: string;
  };
  type?: string;
};

export type NotionV22UserGetAllNode = {
  type: 'n8n-nodes-base.notion';
  version: 2.2;
  credentials?: Credentials;
  config: NodeConfig<NotionV22UserGetAllParams>;
  output?: Items<NotionV22UserGetAllOutput>;
};