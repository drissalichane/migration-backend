/**
 * Trello Node - Version 1
 * Discriminator: resource=list, operation=update
 */


interface Credentials {
  trelloApi: CredentialReference;
}

/** Update a board */
export type TrelloV1ListUpdateParams = {
  resource: 'list';
  operation: 'update';
/**
 * The ID of the list to update
 */
    id?: string | Expression<string> | PlaceholderValue;
/**
 * Update Fields
 * @default {}
 */
    updateFields?: {
    /** ID of a board the list should be moved to
     */
    idBoard?: string | Expression<string> | PlaceholderValue;
    /** Whether the list is closed
     * @default false
     */
    closed?: boolean | Expression<boolean>;
    /** New name of the list
     */
    name?: string | Expression<string> | PlaceholderValue;
    /** The position of the list. top, bottom, or a positive float.
     * @default bottom
     */
    pos?: string | Expression<string> | PlaceholderValue;
    /** Whether the acting user is subscribed to the list
     * @default false
     */
    subscribed?: boolean | Expression<boolean>;
  };
};

export type TrelloV1ListUpdateNode = {
  type: 'n8n-nodes-base.trello';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<TrelloV1ListUpdateParams>;
};