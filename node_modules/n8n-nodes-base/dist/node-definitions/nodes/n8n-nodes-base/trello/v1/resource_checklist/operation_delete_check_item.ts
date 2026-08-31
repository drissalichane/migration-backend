/**
 * Trello Node - Version 1
 * Discriminator: resource=checklist, operation=deleteCheckItem
 */


interface Credentials {
  trelloApi: CredentialReference;
}

/** Delete a checklist item */
export type TrelloV1ChecklistDeleteCheckItemParams = {
  resource: 'checklist';
  operation: 'deleteCheckItem';
/**
 * The ID of the card
 * @default {"mode":"list","value":""}
 */
    cardId?: { __rl: true; mode: 'list' | 'url' | 'id'; value: string; cachedResultName?: string };
/**
 * The ID of the checklist item to delete
 */
    checkItemId?: string | Expression<string> | PlaceholderValue;
};

export type TrelloV1ChecklistDeleteCheckItemNode = {
  type: 'n8n-nodes-base.trello';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<TrelloV1ChecklistDeleteCheckItemParams>;
};