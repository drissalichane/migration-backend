/**
 * Notion Node - Version 2
 * Discriminator: resource=database, operation=getAll
 */


interface Credentials {
  notionApi: CredentialReference;
}

/** Get many child blocks */
export type NotionV2DatabaseGetAllParams = {
  resource: 'database';
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
/**
 * Whether to return a simplified version of the response instead of the raw data
 * @default true
 */
    simple?: boolean | Expression<boolean>;
};

export type NotionV2DatabaseGetAllOutput = {
  id?: string;
  name?: string;
  url?: string;
};

export type NotionV2DatabaseGetAllNode = {
  type: 'n8n-nodes-base.notion';
  version: 2;
  credentials?: Credentials;
  config: NodeConfig<NotionV2DatabaseGetAllParams>;
  output?: Items<NotionV2DatabaseGetAllOutput>;
};