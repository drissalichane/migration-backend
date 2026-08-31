/**
 * Trello Node - Version 1
 * Discriminator: resource=list, operation=getAll
 */


interface Credentials {
  trelloApi: CredentialReference;
}

/** Returns many attachments for the card */
export type TrelloV1ListGetAllParams = {
  resource: 'list';
  operation: 'getAll';
/**
 * The ID of the board
 */
    id?: string | Expression<string> | PlaceholderValue;
/**
 * Whether to return all results or only up to a given limit
 * @default false
 */
    returnAll?: boolean | Expression<boolean>;
/**
 * Max number of results to return
 * @displayOptions.show { returnAll: [false] }
 * @default 20
 */
    limit?: number | Expression<number>;
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

export type TrelloV1ListGetAllOutput = {
  closed?: boolean;
  datasource?: {
    filter?: boolean;
  };
  id?: string;
  idBoard?: string;
  name?: string;
  subscribed?: boolean;
  type?: null;
};

export type TrelloV1ListGetAllNode = {
  type: 'n8n-nodes-base.trello';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<TrelloV1ListGetAllParams>;
  output?: Items<TrelloV1ListGetAllOutput>;
};