/**
 * Trello Node - Version 1
 * Discriminator: resource=label, operation=getAll
 */


interface Credentials {
  trelloApi: CredentialReference;
}

/** Returns many attachments for the card */
export type TrelloV1LabelGetAllParams = {
  resource: 'label';
  operation: 'getAll';
/**
 * The ID of the board
 * @default {"mode":"list","value":""}
 */
    boardId?: { __rl: true; mode: 'list' | 'url' | 'id'; value: string; cachedResultName?: string };
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

export type TrelloV1LabelGetAllOutput = {
  id?: string;
  idBoard?: string;
  name?: string;
  uses?: number;
};

export type TrelloV1LabelGetAllNode = {
  type: 'n8n-nodes-base.trello';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<TrelloV1LabelGetAllParams>;
  output?: Items<TrelloV1LabelGetAllOutput>;
};