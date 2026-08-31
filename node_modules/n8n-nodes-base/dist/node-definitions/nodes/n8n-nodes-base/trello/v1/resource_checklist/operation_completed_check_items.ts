/**
 * Trello Node - Version 1
 * Discriminator: resource=checklist, operation=completedCheckItems
 */


interface Credentials {
  trelloApi: CredentialReference;
}

/** Get the completed checklist items on a card */
export type TrelloV1ChecklistCompletedCheckItemsParams = {
  resource: 'checklist';
  operation: 'completedCheckItems';
/**
 * Additional Fields
 * @default {}
 */
    additionalFields?: {
    /** Fields to return. Either "all" or a comma-separated list of: "idCheckItem", "state".
     * @default all
     */
    fields?: string | Expression<string> | PlaceholderValue;
  };
};

export type TrelloV1ChecklistCompletedCheckItemsNode = {
  type: 'n8n-nodes-base.trello';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<TrelloV1ChecklistCompletedCheckItemsParams>;
};