/**
 * Trello Node - Version 1
 * Discriminator: resource=cardComment, operation=update
 */


interface Credentials {
  trelloApi: CredentialReference;
}

/** Update a board */
export type TrelloV1CardCommentUpdateParams = {
  resource: 'cardComment';
  operation: 'update';
/**
 * The ID of the card
 * @default {"mode":"list","value":""}
 */
    cardId?: { __rl: true; mode: 'list' | 'url' | 'id'; value: string; cachedResultName?: string };
/**
 * The ID of the comment to delete
 */
    commentId?: string | Expression<string> | PlaceholderValue;
/**
 * Text of the comment
 */
    text?: string | Expression<string> | PlaceholderValue;
};

export type TrelloV1CardCommentUpdateNode = {
  type: 'n8n-nodes-base.trello';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<TrelloV1CardCommentUpdateParams>;
};