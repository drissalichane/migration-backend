/**
 * Notion Node - Version 2.1
 * Discriminator: resource=databasePage, operation=get
 */


interface Credentials {
  notionApi: CredentialReference;
}

/** Get a database */
export type NotionV21DatabasePageGetParams = {
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

export type NotionV21DatabasePageGetOutput = {
  id?: string;
  name?: string;
  url?: string;
};

export type NotionV21DatabasePageGetNode = {
  type: 'n8n-nodes-base.notion';
  version: 2.1;
  credentials?: Credentials;
  config: NodeConfig<NotionV21DatabasePageGetParams>;
  output?: Items<NotionV21DatabasePageGetOutput>;
};