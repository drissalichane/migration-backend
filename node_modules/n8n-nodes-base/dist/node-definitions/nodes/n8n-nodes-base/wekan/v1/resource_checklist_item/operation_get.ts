/**
 * Wekan Node - Version 1
 * Discriminator: resource=checklistItem, operation=get
 */


interface Credentials {
  wekanApi: CredentialReference;
}

/** Get the data of a board */
export type WekanV1ChecklistItemGetParams = {
  resource: 'checklistItem';
  operation: 'get';
/**
 * The ID of the board that card belongs to. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
 */
    boardId?: string | Expression<string>;
/**
 * The ID of the list that card belongs to. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
 */
    listId?: string | Expression<string>;
/**
 * The ID of the card that checklistItem belongs to. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
 */
    cardId?: string | Expression<string>;
/**
 * The ID of the checklistItem that card belongs to
 */
    checklistId?: string | Expression<string> | PlaceholderValue;
/**
 * The ID of the checklistItem item to get. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
 */
    checklistItemId?: string | Expression<string>;
};

export type WekanV1ChecklistItemGetNode = {
  type: 'n8n-nodes-base.wekan';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<WekanV1ChecklistItemGetParams>;
};