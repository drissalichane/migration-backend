/**
 * Wekan Node - Version 1
 * Discriminator: resource=checklist, operation=delete
 */


interface Credentials {
  wekanApi: CredentialReference;
}

/** Delete a board */
export type WekanV1ChecklistDeleteParams = {
  resource: 'checklist';
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
 * The ID of the card that checklist belongs to. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
 */
    cardId?: string | Expression<string>;
/**
 * The ID of the checklist to delete. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
 */
    checklistId?: string | Expression<string>;
};

export type WekanV1ChecklistDeleteNode = {
  type: 'n8n-nodes-base.wekan';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<WekanV1ChecklistDeleteParams>;
};