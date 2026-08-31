/**
 * Notion Node - Version 2
 * Discriminator: resource=user, operation=getAll
 */


interface Credentials {
  notionApi: CredentialReference;
}

/** Get many child blocks */
export type NotionV2UserGetAllParams = {
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

export type NotionV2UserGetAllOutput = {
  id?: string;
  name?: string;
  object?: string;
  person?: {
    email?: string;
  };
  type?: string;
};

export type NotionV2UserGetAllNode = {
  type: 'n8n-nodes-base.notion';
  version: 2;
  credentials?: Credentials;
  config: NodeConfig<NotionV2UserGetAllParams>;
  output?: Items<NotionV2UserGetAllOutput>;
};