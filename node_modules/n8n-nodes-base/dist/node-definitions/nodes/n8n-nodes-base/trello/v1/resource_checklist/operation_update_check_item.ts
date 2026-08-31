/**
 * Trello Node - Version 1
 * Discriminator: resource=checklist, operation=updateCheckItem
 */


interface Credentials {
  trelloApi: CredentialReference;
}

/** Update an item in a checklist on a card */
export type TrelloV1ChecklistUpdateCheckItemParams = {
  resource: 'checklist';
  operation: 'updateCheckItem';
/**
 * The ID of the card
 * @default {"mode":"list","value":""}
 */
    cardId?: { __rl: true; mode: 'list' | 'url' | 'id'; value: string; cachedResultName?: string };
/**
 * The ID of the checklist item to update
 */
    checkItemId?: string | Expression<string> | PlaceholderValue;
/**
 * Additional Fields
 * @default {}
 */
    additionalFields?: {
    /** The new name for the checklist item
     */
    name?: string | Expression<string> | PlaceholderValue;
    /** State
     * @default complete
     */
    state?: 'complete' | 'incomplete' | Expression<string>;
    /** The ID of the checklist this item is in
     */
    checklistId?: string | Expression<string> | PlaceholderValue;
    /** The position of the checklist on the card. One of: top, bottom, or a positive number.
     */
    pos?: string | Expression<string> | PlaceholderValue;
  };
};

export type TrelloV1ChecklistUpdateCheckItemNode = {
  type: 'n8n-nodes-base.trello';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<TrelloV1ChecklistUpdateCheckItemParams>;
};