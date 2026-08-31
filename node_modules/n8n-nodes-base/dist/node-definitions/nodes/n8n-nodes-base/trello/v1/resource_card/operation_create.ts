/**
 * Trello Node - Version 1
 * Discriminator: resource=card, operation=create
 */


interface Credentials {
  trelloApi: CredentialReference;
}

/** Create a new attachment for a card */
export type TrelloV1CardCreateParams = {
  resource: 'card';
  operation: 'create';
/**
 * The ID of the list to create card in
 */
    listId?: string | Expression<string> | PlaceholderValue;
/**
 * The name of the card
 */
    name?: string | Expression<string> | PlaceholderValue;
/**
 * The description of the card
 */
    description?: string | Expression<string> | PlaceholderValue;
/**
 * Additional Fields
 * @default {}
 */
    additionalFields?: {
    /** A due date for the card
     */
    due?: string | Expression<string>;
    /** Whether the card is completed
     * @default false
     */
    dueComplete?: boolean | Expression<boolean>;
    /** The position of the new card. top, bottom, or a positive float.
     * @default bottom
     */
    pos?: string | Expression<string> | PlaceholderValue;
    /** Comma-separated list of member IDs to add to the card
     */
    idMembers?: string | Expression<string> | PlaceholderValue;
    /** Comma-separated list of label IDs to add to the card
     */
    idLabels?: string | Expression<string> | PlaceholderValue;
    /** A source URL to attach to card
     */
    urlSource?: string | Expression<string> | PlaceholderValue;
    /** The ID of a card to copy into the new card
     */
    idCardSource?: string | Expression<string> | PlaceholderValue;
    /** If using idCardSource you can specify which properties to copy over. all or comma-separated list of: attachments, checklists, comments, due, labels, members, stickers.
     * @default all
     */
    keepFromSource?: string | Expression<string> | PlaceholderValue;
  };
};

export type TrelloV1CardCreateOutput = {
  attachments?: Array<{
    bytes?: null;
    date?: string;
    edgeColor?: null;
    id?: string;
    idMember?: string;
    isMalicious?: boolean;
    isUpload?: boolean;
    mimeType?: string;
    name?: string;
    pos?: number;
    url?: string;
  }>;
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
    externalSource?: null;
    fogbugz?: string;
    lastUpdatedByAi?: boolean;
    location?: boolean;
    start?: null;
    subscribed?: boolean;
    viewingMemberVoted?: boolean;
    votes?: number;
  };
  cardRole?: null;
  closed?: boolean;
  cover?: {
    brightness?: string;
    color?: null;
    idAttachment?: null;
    idPlugin?: null;
    idUploadedBackground?: null;
    size?: string;
  };
  dateLastActivity?: string;
  desc?: string;
  dueComplete?: boolean;
  dueReminder?: null;
  email?: null;
  id?: string;
  idAttachmentCover?: null;
  idBoard?: string;
  idChecklists?: Array<string>;
  idLabels?: Array<string>;
  idList?: string;
  idMembers?: Array<string>;
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
  start?: null;
  subscribed?: boolean;
  url?: string;
};

export type TrelloV1CardCreateNode = {
  type: 'n8n-nodes-base.trello';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<TrelloV1CardCreateParams>;
  output?: Items<TrelloV1CardCreateOutput>;
};