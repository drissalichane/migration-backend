/**
 * Notion Node - Version 2.1
 * Discriminator: resource=page, operation=get
 */


interface Credentials {
  notionApi: CredentialReference;
}

/** Get a database */
export type NotionV21PageGetParams = {
  resource: 'page';
  operation: 'get';
};

export type NotionV21PageGetNode = {
  type: 'n8n-nodes-base.notion';
  version: 2.1;
  credentials?: Credentials;
  config: NodeConfig<NotionV21PageGetParams>;
};