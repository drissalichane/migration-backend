/**
 * Trello Node - Version 1
 * Discriminator: resource=list, operation=getCards
 */


interface Credentials {
  trelloApi: CredentialReference;
}

/** Get all the cards in a list */
export type TrelloV1ListGetCardsParams = {
  resource: 'list';
  operation: 'getCards';
/**
 * The ID of the list to get cards
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

export type TrelloV1ListGetCardsOutput = {
  badges?: {
    attachments?: number;
    attachmentsByType?: {
      trello?: {
        board?: number;
        card?: number;
      };
    };
    checkItems?: number;
    checkItemsChecked?: number;
    checkItemsEarliestDue?: null;
    comments?: number;
    description?: boolean;
    dueComplete?: boolean;
    fogbugz?: string;
    lastUpdatedByAi?: boolean;
    location?: boolean;
    maliciousAttachments?: number;
    subscribed?: boolean;
    viewingMemberVoted?: boolean;
    votes?: number;
  };
  cardRole?: null;
  checkItemStates?: Array<{
    idCheckItem?: string;
    state?: string;
  }>;
  closed?: boolean;
  cover?: {
    brightness?: string;
    idUploadedBackground?: null;
    size?: string;
  };
  dateLastActivity?: string;
  desc?: string;
  dueComplete?: boolean;
  email?: null;
  id?: string;
  idBoard?: string;
  idChecklists?: Array<string>;
  idLabels?: Array<string>;
  idList?: string;
  idMembers?: Array<string>;
  idMembersVoted?: Array<string>;
  idShort?: number;
  isTemplate?: boolean;
  labels?: Array<{
    id?: string;
    idBoard?: string;
    idOrganization?: string;
    name?: string;
    nodeId?: string;
    uses?: number;
  }>;
  manualCoverAttachment?: boolean;
  mirrorSourceId?: null;
  name?: string;
  nodeId?: string;
  pinned?: boolean;
  shortLink?: string;
  shortUrl?: string;
  subscribed?: boolean;
  url?: string;
};

export type TrelloV1ListGetCardsNode = {
  type: 'n8n-nodes-base.trello';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<TrelloV1ListGetCardsParams>;
  output?: Items<TrelloV1ListGetCardsOutput>;
};