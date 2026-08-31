/**
 * Notion Node - Version 1
 * Discriminator: resource=page, operation=get
 */


interface Credentials {
  notionApi: CredentialReference;
}

/** Get a database */
export type NotionV1PageGetParams = {
  resource: 'page';
  operation: 'get';
/**
 * The Page URL from Notion's 'copy link' functionality (or just the ID contained within the URL)
 */
    pageId?: string | Expression<string> | PlaceholderValue;
/**
 * Whether to return a simplified version of the response instead of the raw data
 * @default true
 */
    simple?: boolean | Expression<boolean>;
};

export type NotionV1PageGetOutput = {
  id?: string;
  'Messaggi Schedulati'?: string;
};

export type NotionV1PageGetNode = {
  type: 'n8n-nodes-base.notion';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<NotionV1PageGetParams>;
  output?: Items<NotionV1PageGetOutput>;
};