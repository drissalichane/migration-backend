/**
 * Trello Node - Version 1
 * Discriminator: resource=boardMember, operation=add
 */


interface Credentials {
  trelloApi: CredentialReference;
}

/** Add member to board using member ID */
export type TrelloV1BoardMemberAddParams = {
  resource: 'boardMember';
  operation: 'add';
/**
 * The ID of the board to add member to
 */
    id?: string | Expression<string> | PlaceholderValue;
/**
 * The ID of the member to add to the board
 */
    idMember?: string | Expression<string> | PlaceholderValue;
/**
 * Determines the type of membership the user being added should have
 * @default normal
 */
    type?: 'normal' | 'admin' | 'observer' | Expression<string>;
/**
 * Additional Fields
 * @default {}
 */
    additionalFields?: {
    /** Whether to allow organization admins to add multi-board guests onto a board
     * @default false
     */
    allowBillableGuest?: boolean | Expression<boolean>;
  };
};

export type TrelloV1BoardMemberAddNode = {
  type: 'n8n-nodes-base.trello';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<TrelloV1BoardMemberAddParams>;
};