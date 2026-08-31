/**
 * Trello Node - Version 1
 * Discriminator: resource=attachment, operation=create
 */


interface Credentials {
  trelloApi: CredentialReference;
}

/** Create a new attachment for a card */
export type TrelloV1AttachmentCreateParams = {
  resource: 'attachment';
  operation: 'create';
/**
 * The ID of the card
 * @default {"mode":"list","value":""}
 */
    cardId?: { __rl: true; mode: 'list' | 'url' | 'id'; value: string; cachedResultName?: string };
/**
 * The URL of the attachment to add
 */
    url?: string | Expression<string> | PlaceholderValue;
/**
 * Additional Fields
 * @default {}
 */
    additionalFields?: {
    /** The MIME type of the attachment to add
     */
    mimeType?: string | Expression<string> | PlaceholderValue;
    /** The name of the attachment to add
     */
    name?: string | Expression<string> | PlaceholderValue;
  };
};

export type TrelloV1AttachmentCreateOutput = {
  date?: string;
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

export type TrelloV1AttachmentCreateNode = {
  type: 'n8n-nodes-base.trello';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<TrelloV1AttachmentCreateParams>;
  output?: Items<TrelloV1AttachmentCreateOutput>;
};