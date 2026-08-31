/**
 * Monday.com Node - Version 1
 * Discriminator: resource=boardGroup, operation=delete
 */


interface Credentials {
  mondayComApi: CredentialReference;
  mondayComOAuth2Api: CredentialReference;
}

/** Delete a group in a board */
export type MondayComV1BoardGroupDeleteParams = {
  resource: 'boardGroup';
  operation: 'delete';
  authentication?: 'accessToken' | 'oAuth2' | Expression<string>;
/**
 * Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
 */
    boardId?: string | Expression<string>;
/**
 * Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
 */
    groupId?: string | Expression<string>;
};

export type MondayComV1BoardGroupDeleteNode = {
  type: 'n8n-nodes-base.mondayCom';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<MondayComV1BoardGroupDeleteParams>;
};