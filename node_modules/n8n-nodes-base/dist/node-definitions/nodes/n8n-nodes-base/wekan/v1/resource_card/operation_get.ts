/**
 * Wekan Node - Version 1
 * Discriminator: resource=card, operation=get
 */


interface Credentials {
  wekanApi: CredentialReference;
}

/** Get the data of a board */
export type WekanV1CardGetParams = {
  resource: 'card';
  operation: 'get';
/**
 * The ID of the board that list belongs to. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
 */
    boardId?: string | Expression<string>;
/**
 * The ID of the list that card belongs to. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
 */
    listId?: string | Expression<string>;
/**
 * The ID of the card to get
 */
    cardId?: string | Expression<string> | PlaceholderValue;
};

export type WekanV1CardGetNode = {
  type: 'n8n-nodes-base.wekan';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<WekanV1CardGetParams>;
};