/**
 * Notion Node - Version 2.2
 * Discriminator: resource=page, operation=get
 */


interface Credentials {
  notionApi: CredentialReference;
}

/** Get a database */
export type NotionV22PageGetParams = {
  resource: 'page';
  operation: 'get';
};

export type NotionV22PageGetNode = {
  type: 'n8n-nodes-base.notion';
  version: 2.2;
  credentials?: Credentials;
  config: NodeConfig<NotionV22PageGetParams>;
};