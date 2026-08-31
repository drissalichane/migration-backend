/**
 * Wekan Node - Version 1
 * Discriminator: resource=list, operation=create
 */


interface Credentials {
  wekanApi: CredentialReference;
}

/** Create a new board */
export type WekanV1ListCreateParams = {
  resource: 'list';
  operation: 'create';
/**
 * The ID of the board the list should be created in. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
 */
    boardId?: string | Expression<string>;
/**
 * The title of the list
 */
    title?: string | Expression<string> | PlaceholderValue;
};

export type WekanV1ListCreateNode = {
  type: 'n8n-nodes-base.wekan';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<WekanV1ListCreateParams>;
};