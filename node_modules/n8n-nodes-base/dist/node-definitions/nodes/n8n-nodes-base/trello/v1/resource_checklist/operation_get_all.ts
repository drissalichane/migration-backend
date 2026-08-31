/**
 * Trello Node - Version 1
 * Discriminator: resource=checklist, operation=getAll
 */


interface Credentials {
  trelloApi: CredentialReference;
}

/** Returns many attachments for the card */
export type TrelloV1ChecklistGetAllParams = {
  resource: 'checklist';
  operation: 'getAll';
/**
 * The ID of the card
 * @default {"mode":"list","value":""}
 */
    cardId?: { __rl: true; mode: 'list' | 'url' | 'id'; value: string; cachedResultName?: string };
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

export type TrelloV1ChecklistGetAllOutput = {
  checkItems?: Array<{
    id?: string;
    idChecklist?: string;
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

export type TrelloV1ChecklistGetAllNode = {
  type: 'n8n-nodes-base.trello';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<TrelloV1ChecklistGetAllParams>;
  output?: Items<TrelloV1ChecklistGetAllOutput>;
};