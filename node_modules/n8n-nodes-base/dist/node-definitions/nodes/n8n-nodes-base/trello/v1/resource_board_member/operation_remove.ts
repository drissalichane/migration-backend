/**
 * Trello Node - Version 1
 * Discriminator: resource=boardMember, operation=remove
 */


interface Credentials {
  trelloApi: CredentialReference;
}

/** Remove member from board using member ID */
export type TrelloV1BoardMemberRemoveParams = {
  resource: 'boardMember';
  operation: 'remove';
/**
 * The ID of the board to remove member from
 */
    id?: string | Expression<string> | PlaceholderValue;
/**
 * The ID of the member to remove from the board
 */
    idMember?: string | Expression<string> | PlaceholderValue;
};

export type TrelloV1BoardMemberRemoveNode = {
  type: 'n8n-nodes-base.trello';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<TrelloV1BoardMemberRemoveParams>;
};