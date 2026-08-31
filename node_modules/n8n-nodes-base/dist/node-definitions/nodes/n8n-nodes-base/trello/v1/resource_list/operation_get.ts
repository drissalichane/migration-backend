/**
 * Trello Node - Version 1
 * Discriminator: resource=list, operation=get
 */


interface Credentials {
  trelloApi: CredentialReference;
}

/** Get the data of an attachment */
export type TrelloV1ListGetParams = {
  resource: 'list';
  operation: 'get';
/**
 * The ID of the list to get
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

export type TrelloV1ListGetOutput = {
  closed?: boolean;
  datasource?: {
    filter?: boolean;
  };
  id?: string;
  idBoard?: string;
  name?: string;
  type?: null;
};

export type TrelloV1ListGetNode = {
  type: 'n8n-nodes-base.trello';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<TrelloV1ListGetParams>;
  output?: Items<TrelloV1ListGetOutput>;
};