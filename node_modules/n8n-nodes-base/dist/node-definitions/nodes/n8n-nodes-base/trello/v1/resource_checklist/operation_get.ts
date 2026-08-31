/**
 * Trello Node - Version 1
 * Discriminator: resource=checklist, operation=get
 */


interface Credentials {
  trelloApi: CredentialReference;
}

/** Get the data of an attachment */
export type TrelloV1ChecklistGetParams = {
  resource: 'checklist';
  operation: 'get';
/**
 * The ID of the checklist to get
 */
    id?: string | Expression<string> | PlaceholderValue;
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

export type TrelloV1ChecklistGetOutput = {
  checkItems?: Array<{
    id?: string;
    idChecklist?: string;
    name?: string;
    state?: string;
  }>;
  id?: string;
  idBoard?: string;
  idCard?: string;
  name?: string;
  pos?: number;
};

export type TrelloV1ChecklistGetNode = {
  type: 'n8n-nodes-base.trello';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<TrelloV1ChecklistGetParams>;
  output?: Items<TrelloV1ChecklistGetOutput>;
};