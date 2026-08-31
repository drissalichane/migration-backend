/**
 * Trello Node - Version 1
 * Discriminator: resource=boardMember, operation=invite
 */


interface Credentials {
  trelloApi: CredentialReference;
}

/** Invite a new member to a board via email */
export type TrelloV1BoardMemberInviteParams = {
  resource: 'boardMember';
  operation: 'invite';
/**
 * The ID of the board to invite member to
 */
    id?: string | Expression<string> | PlaceholderValue;
/**
 * The ID of the board to update
 */
    email?: string | Expression<string> | PlaceholderValue;
/**
 * Additional Fields
 * @default {}
 */
    additionalFields?: {
    /** Determines the type of membership the user being added should have
     * @default normal
     */
    type?: 'normal' | 'admin' | 'observer' | Expression<string>;
    /** The full name of the user to add as a member of the board. Must have a length of at least 1 and cannot begin nor end with a space.
     */
    fullName?: string | Expression<string> | PlaceholderValue;
  };
};

export type TrelloV1BoardMemberInviteNode = {
  type: 'n8n-nodes-base.trello';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<TrelloV1BoardMemberInviteParams>;
};