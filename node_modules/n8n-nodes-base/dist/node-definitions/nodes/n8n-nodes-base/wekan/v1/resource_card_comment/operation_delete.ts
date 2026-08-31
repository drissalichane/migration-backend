/**
 * Wekan Node - Version 1
 * Discriminator: resource=cardComment, operation=delete
 */


interface Credentials {
  wekanApi: CredentialReference;
}

/** Delete a board */
export type WekanV1CardCommentDeleteParams = {
  resource: 'cardComment';
  operation: 'delete';
/**
 * The ID of the board that card belongs to. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
 */
    boardId?: string | Expression<string>;
/**
 * The ID of the list that card belongs to. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
 */
    listId?: string | Expression<string>;
/**
 * The ID of the card. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
 */
    cardId?: string | Expression<string>;
/**
 * The ID of the comment to delete. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
 */
    commentId?: string | Expression<string>;
};

export type WekanV1CardCommentDeleteNode = {
  type: 'n8n-nodes-base.wekan';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<WekanV1CardCommentDeleteParams>;
};