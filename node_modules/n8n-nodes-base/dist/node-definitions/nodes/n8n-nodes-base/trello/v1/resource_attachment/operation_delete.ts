/**
 * Trello Node - Version 1
 * Discriminator: resource=attachment, operation=delete
 */


interface Credentials {
  trelloApi: CredentialReference;
}

/** Delete an attachment */
export type TrelloV1AttachmentDeleteParams = {
  resource: 'attachment';
  operation: 'delete';
/**
 * The ID of the card
 * @default {"mode":"list","value":""}
 */
    cardId?: { __rl: true; mode: 'list' | 'url' | 'id'; value: string; cachedResultName?: string };
/**
 * The ID of the attachment to delete
 */
    id?: string | Expression<string> | PlaceholderValue;
};

export type TrelloV1AttachmentDeleteNode = {
  type: 'n8n-nodes-base.trello';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<TrelloV1AttachmentDeleteParams>;
};