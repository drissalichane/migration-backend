/**
 * Notion Node - Version 2
 * Discriminator: resource=databasePage, operation=get
 */


interface Credentials {
  notionApi: CredentialReference;
}

/** Get a database */
export type NotionV2DatabasePageGetParams = {
  resource: 'databasePage';
  operation: 'get';
/**
 * The Notion Database Page to get
 * @default {"mode":"url","value":""}
 */
    pageId?: { __rl: true; mode: 'url' | 'id'; value: string; cachedResultName?: string };
/**
 * Whether to return a simplified version of the response instead of the raw data
 * @default true
 */
    simple?: boolean | Expression<boolean>;
};

export type NotionV2DatabasePageGetOutput = {
  id?: string;
  name?: string;
  url?: string;
};

export type NotionV2DatabasePageGetNode = {
  type: 'n8n-nodes-base.notion';
  version: 2;
  credentials?: Credentials;
  config: NodeConfig<NotionV2DatabasePageGetParams>;
  output?: Items<NotionV2DatabasePageGetOutput>;
};