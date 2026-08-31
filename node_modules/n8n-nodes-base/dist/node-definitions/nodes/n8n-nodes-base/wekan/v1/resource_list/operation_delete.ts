/**
 * Wekan Node - Version 1
 * Discriminator: resource=list, operation=delete
 */


interface Credentials {
  wekanApi: CredentialReference;
}

/** Delete a board */
export type WekanV1ListDeleteParams = {
  resource: 'list';
  operation: 'delete';
/**
 * The ID of the board that list belongs to. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
 */
    boardId?: string | Expression<string>;
/**
 * The ID of the list to delete. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
 */
    listId?: string | Expression<string>;
};

export type WekanV1ListDeleteNode = {
  type: 'n8n-nodes-base.wekan';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<WekanV1ListDeleteParams>;
};