/**
 * Wekan Node - Version 1
 * Discriminator: resource=cardComment, operation=get
 */


interface Credentials {
  wekanApi: CredentialReference;
}

/** Get the data of a board */
export type WekanV1CardCommentGetParams = {
  resource: 'cardComment';
  operation: 'get';
/**
 * The ID of the board that card belongs to
 */
    boardId?: string | Expression<string> | PlaceholderValue;
/**
 * The ID of the list that card belongs to. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
 */
    listId?: string | Expression<string>;
/**
 * The ID of the card. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
 */
    cardId?: string | Expression<string>;
/**
 * The ID of the comment to get
 */
    commentId?: string | Expression<string> | PlaceholderValue;
};

export type WekanV1CardCommentGetNode = {
  type: 'n8n-nodes-base.wekan';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<WekanV1CardCommentGetParams>;
};