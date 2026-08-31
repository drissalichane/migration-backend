/**
 * Trello Node - Version 1
 * Discriminator: resource=attachment, operation=get
 */


interface Credentials {
  trelloApi: CredentialReference;
}

/** Get the data of an attachment */
export type TrelloV1AttachmentGetParams = {
  resource: 'attachment';
  operation: 'get';
/**
 * The ID of the card
 * @default {"mode":"list","value":""}
 */
    cardId?: { __rl: true; mode: 'list' | 'url' | 'id'; value: string; cachedResultName?: string };
/**
 * The ID of the attachment to get
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

export type TrelloV1AttachmentGetOutput = {
  date?: string;
  fileName?: string;
  id?: string;
  idMember?: string;
  isMalicious?: boolean;
  isUpload?: boolean;
  mimeType?: string;
  name?: string;
  pos?: number;
  previews?: Array<{
    _id?: string;
    bytes?: number;
    height?: number;
    id?: string;
    scaled?: boolean;
    url?: string;
    width?: number;
  }>;
  url?: string;
};

export type TrelloV1AttachmentGetNode = {
  type: 'n8n-nodes-base.trello';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<TrelloV1AttachmentGetParams>;
  output?: Items<TrelloV1AttachmentGetOutput>;
};