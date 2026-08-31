/**
 * Wekan Node - Version 1
 * Discriminator: resource=checklist, operation=create
 */


interface Credentials {
  wekanApi: CredentialReference;
}

/** Create a new board */
export type WekanV1ChecklistCreateParams = {
  resource: 'checklist';
  operation: 'create';
/**
 * The ID of the board where the card is in. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
 */
    boardId?: string | Expression<string>;
/**
 * The ID of the list that card belongs to. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
 */
    listId?: string | Expression<string>;
/**
 * The ID of the card to add checklist to. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
 */
    cardId?: string | Expression<string>;
/**
 * The title of the checklist to add
 */
    title?: string | Expression<string> | PlaceholderValue;
/**
 * Items to be added to the checklist
 * @default []
 */
    items?: string | Expression<string> | PlaceholderValue;
};

export type WekanV1ChecklistCreateNode = {
  type: 'n8n-nodes-base.wekan';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<WekanV1ChecklistCreateParams>;
};