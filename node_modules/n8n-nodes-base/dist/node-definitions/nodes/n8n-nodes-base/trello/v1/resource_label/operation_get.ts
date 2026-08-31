/**
 * Trello Node - Version 1
 * Discriminator: resource=label, operation=get
 */


interface Credentials {
  trelloApi: CredentialReference;
}

/** Get the data of an attachment */
export type TrelloV1LabelGetParams = {
  resource: 'label';
  operation: 'get';
/**
 * Get information about a label by ID
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

export type TrelloV1LabelGetNode = {
  type: 'n8n-nodes-base.trello';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<TrelloV1LabelGetParams>;
};