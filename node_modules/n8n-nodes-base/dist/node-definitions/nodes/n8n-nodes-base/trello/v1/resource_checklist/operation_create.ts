/**
 * Trello Node - Version 1
 * Discriminator: resource=checklist, operation=create
 */


interface Credentials {
  trelloApi: CredentialReference;
}

/** Create a new attachment for a card */
export type TrelloV1ChecklistCreateParams = {
  resource: 'checklist';
  operation: 'create';
/**
 * The ID of the card
 * @default {"mode":"list","value":""}
 */
    cardId?: { __rl: true; mode: 'list' | 'url' | 'id'; value: string; cachedResultName?: string };
/**
 * The URL of the checklist to add
 */
    name?: string | Expression<string> | PlaceholderValue;
/**
 * Additional Fields
 * @default {}
 */
    additionalFields?: {
    /** The ID of a source checklist to copy into the new one
     */
    idChecklistSource?: string | Expression<string> | PlaceholderValue;
    /** The position of the checklist on the card. One of: top, bottom, or a positive number.
     */
    pos?: string | Expression<string> | PlaceholderValue;
  };
};

export type TrelloV1ChecklistCreateOutput = {
  checkItems?: Array<{
    due?: null;
    dueReminder?: number;
    id?: string;
    idChecklist?: string;
    idMember?: null;
    name?: string;
    pos?: number;
    state?: string;
  }>;
  id?: string;
  idBoard?: string;
  idCard?: string;
  name?: string;
  pos?: number;
};

export type TrelloV1ChecklistCreateNode = {
  type: 'n8n-nodes-base.trello';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<TrelloV1ChecklistCreateParams>;
  output?: Items<TrelloV1ChecklistCreateOutput>;
};