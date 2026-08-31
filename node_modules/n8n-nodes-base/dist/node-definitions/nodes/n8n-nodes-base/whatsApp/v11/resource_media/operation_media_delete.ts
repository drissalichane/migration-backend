/**
 * WhatsApp Business Cloud Node - Version 1.1
 * Discriminator: resource=media, operation=mediaDelete
 */


interface Credentials {
  whatsAppApi: CredentialReference;
}

export type WhatsAppV11MediaMediaDeleteParams = {
  resource: 'media';
  operation: 'mediaDelete';
/**
 * The ID of the media
 */
    mediaDeleteId?: string | Expression<string> | PlaceholderValue;
};

export type WhatsAppV11MediaMediaDeleteNode = {
  type: 'n8n-nodes-base.whatsApp';
  version: 1.1;
  credentials?: Credentials;
  config: NodeConfig<WhatsAppV11MediaMediaDeleteParams>;
};