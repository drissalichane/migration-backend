/**
 * Trello Node - Version 1
 * Discriminator: resource=checklist, operation=getCheckItem
 */


interface Credentials {
  trelloApi: CredentialReference;
}

/** Get a specific checklist on a card */
export type TrelloV1ChecklistGetCheckItemParams = {
  resource: 'checklist';
  operation: 'getCheckItem';
/**
 * The ID of the card
 * @default {"mode":"list","value":""}
 */
    cardId?: { __rl: true; mode: 'list' | 'url' | 'id'; value: string; cachedResultName?: string };
/**
 * The ID of the checklist item to get
 */
    checkItemId?: string | Expression<string> | PlaceholderValue;
/**
 * Additional Fields
 * @default {}
 */
    additionalFields?: {
    /** Fields to return. Either "all" or a comma-separated list of fields.
     * @default all
     */
    fields?: string | Expression<string> | PlaceholderValue;
  };
};

export type TrelloV1ChecklistGetCheckItemNode = {
  type: 'n8n-nodes-base.trello';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<TrelloV1ChecklistGetCheckItemParams>;
};