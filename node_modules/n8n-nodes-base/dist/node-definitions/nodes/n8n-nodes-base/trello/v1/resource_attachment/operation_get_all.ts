/**
 * Trello Node - Version 1
 * Discriminator: resource=attachment, operation=getAll
 */


interface Credentials {
  trelloApi: CredentialReference;
}

/** Returns many attachments for the card */
export type TrelloV1AttachmentGetAllParams = {
  resource: 'attachment';
  operation: 'getAll';
/**
 * The ID of the card
 * @default {"mode":"list","value":""}
 */
    cardId?: { __rl: true; mode: 'list' | 'url' | 'id'; value: string; cachedResultName?: string };
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

export type TrelloV1AttachmentGetAllOutput = {
  date?: string;
  fileName?: string;
  id?: string;
  idMember?: string;
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

export type TrelloV1AttachmentGetAllNode = {
  type: 'n8n-nodes-base.trello';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<TrelloV1AttachmentGetAllParams>;
  output?: Items<TrelloV1AttachmentGetAllOutput>;
};