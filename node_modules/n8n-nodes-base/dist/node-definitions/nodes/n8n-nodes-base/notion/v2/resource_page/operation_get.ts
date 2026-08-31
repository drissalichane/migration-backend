/**
 * Notion Node - Version 2
 * Discriminator: resource=page, operation=get
 */


interface Credentials {
  notionApi: CredentialReference;
}

/** Get a database */
export type NotionV2PageGetParams = {
  resource: 'page';
  operation: 'get';
};

export type NotionV2PageGetNode = {
  type: 'n8n-nodes-base.notion';
  version: 2;
  credentials?: Credentials;
  config: NodeConfig<NotionV2PageGetParams>;
};