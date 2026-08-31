/**
 * Wekan Node - Version 1
 * Discriminator: resource=checklistItem, operation=update
 */


interface Credentials {
  wekanApi: CredentialReference;
}

/** Update a card */
export type WekanV1ChecklistItemUpdateParams = {
  resource: 'checklistItem';
  operation: 'update';
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
 * The ID of the checklistItem that card belongs to. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
 */
    checklistId?: string | Expression<string>;
/**
 * The ID of the checklistItem item to update. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
 */
    checklistItemId?: string | Expression<string>;
/**
 * Update Fields
 * @default {}
 */
    updateFields?: {
    /** The new title for the checklistItem item
     */
    title?: string | Expression<string> | PlaceholderValue;
    /** Whether the item is checked
     * @default false
     */
    isFinished?: boolean | Expression<boolean>;
  };
};

export type WekanV1ChecklistItemUpdateNode = {
  type: 'n8n-nodes-base.wekan';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<WekanV1ChecklistItemUpdateParams>;
};