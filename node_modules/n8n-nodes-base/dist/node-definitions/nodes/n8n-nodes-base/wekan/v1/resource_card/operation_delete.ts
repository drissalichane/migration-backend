/**
 * Wekan Node - Version 1
 * Discriminator: resource=card, operation=delete
 */


interface Credentials {
  wekanApi: CredentialReference;
}

/** Delete a board */
export type WekanV1CardDeleteParams = {
  resource: 'card';
  operation: 'delete';
/**
 * The ID of the board that list belongs to. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
 */
    boardId?: string | Expression<string>;
/**
 * The ID of the list that card belongs to. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
 */
    listId?: string | Expression<string>;
/**
 * The ID of the card to delete. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
 */
    cardId?: string | Expression<string>;
};

export type WekanV1CardDeleteNode = {
  type: 'n8n-nodes-base.wekan';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<WekanV1CardDeleteParams>;
};