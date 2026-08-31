/**
 * Gotify Node - Version 1
 * Discriminator: resource=message, operation=delete
 */


interface Credentials {
  gotifyApi: CredentialReference;
}

export type GotifyV1MessageDeleteParams = {
  resource: 'message';
  operation: 'delete';
/**
 * Message ID
 */
    messageId?: string | Expression<string> | PlaceholderValue;
};

export type GotifyV1MessageDeleteNode = {
  type: 'n8n-nodes-base.gotify';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<GotifyV1MessageDeleteParams>;
};