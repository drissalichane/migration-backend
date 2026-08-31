/**
 * Trello Node - Version 1
 * Discriminator: resource=list, operation=create
 */


interface Credentials {
  trelloApi: CredentialReference;
}

/** Create a new attachment for a card */
export type TrelloV1ListCreateParams = {
  resource: 'list';
  operation: 'create';
/**
 * The ID of the board the list should be created in
 */
    idBoard?: string | Expression<string> | PlaceholderValue;
/**
 * The name of the list
 */
    name?: string | Expression<string> | PlaceholderValue;
/**
 * Additional Fields
 * @default {}
 */
    additionalFields?: {
    /** ID of the list to copy into the new list
     */
    idListSource?: string | Expression<string> | PlaceholderValue;
    /** The position of the new list. top, bottom, or a positive float.
     * @default bottom
     */
    pos?: string | Expression<string> | PlaceholderValue;
  };
};

export type TrelloV1ListCreateOutput = {
  closed?: boolean;
  color?: null;
  datasource?: {
    filter?: boolean;
  };
  id?: string;
  idBoard?: string;
  name?: string;
  type?: null;
};

export type TrelloV1ListCreateNode = {
  type: 'n8n-nodes-base.trello';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<TrelloV1ListCreateParams>;
  output?: Items<TrelloV1ListCreateOutput>;
};