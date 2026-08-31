/**
 * Trello Node - Version 1
 * Discriminator: resource=boardMember, operation=getAll
 */


interface Credentials {
  trelloApi: CredentialReference;
}

/** Returns many attachments for the card */
export type TrelloV1BoardMemberGetAllParams = {
  resource: 'boardMember';
  operation: 'getAll';
/**
 * The ID of the board to get members from
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
};

export type TrelloV1BoardMemberGetAllOutput = {
  fullName?: string;
  id?: string;
  username?: string;
};

export type TrelloV1BoardMemberGetAllNode = {
  type: 'n8n-nodes-base.trello';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<TrelloV1BoardMemberGetAllParams>;
  output?: Items<TrelloV1BoardMemberGetAllOutput>;
};