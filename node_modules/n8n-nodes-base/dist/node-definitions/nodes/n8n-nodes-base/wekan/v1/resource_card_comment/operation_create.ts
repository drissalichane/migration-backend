/**
 * Wekan Node - Version 1
 * Discriminator: resource=cardComment, operation=create
 */


interface Credentials {
  wekanApi: CredentialReference;
}

/** Create a new board */
export type WekanV1CardCommentCreateParams = {
  resource: 'cardComment';
  operation: 'create';
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
 * The user who posted the comment. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
 */
    authorId?: string | Expression<string>;
/**
 * The comment text
 */
    comment?: string | Expression<string> | PlaceholderValue;
};

export type WekanV1CardCommentCreateNode = {
  type: 'n8n-nodes-base.wekan';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<WekanV1CardCommentCreateParams>;
};