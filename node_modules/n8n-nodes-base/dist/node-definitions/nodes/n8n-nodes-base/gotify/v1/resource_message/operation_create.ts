/**
 * Gotify Node - Version 1
 * Discriminator: resource=message, operation=create
 */


interface Credentials {
  gotifyApi: CredentialReference;
}

export type GotifyV1MessageCreateParams = {
  resource: 'message';
  operation: 'create';
/**
 * The message to send, If using Markdown add the Content Type option
 */
    message?: string | Expression<string> | PlaceholderValue;
/**
 * Additional Fields
 * @default {}
 */
    additionalFields?: {
    /** The priority of the message
     * @default 1
     */
    priority?: number | Expression<number>;
    /** The title of the message
     */
    title?: string | Expression<string> | PlaceholderValue;
  };
/**
 * Options
 * @default {}
 */
    options?: {
    /** The message content type
     * @default text/plain
     */
    contentType?: 'text/plain' | 'text/markdown' | Expression<string>;
  };
};

export type GotifyV1MessageCreateNode = {
  type: 'n8n-nodes-base.gotify';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<GotifyV1MessageCreateParams>;
};