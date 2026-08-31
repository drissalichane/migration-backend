/**
 * Google Chat Node - Version 1
 * Discriminator: resource=message, operation=delete
 */


interface Credentials {
  googleApi: CredentialReference;
  googleChatOAuth2Api: CredentialReference;
}

/** Delete a message */
export type GoogleChatV1MessageDeleteParams = {
  resource: 'message';
  operation: 'delete';
  authentication?: 'oAuth2' | 'serviceAccount' | Expression<string>;
/**
 * Resource name of the message to be deleted, in the form "spaces//messages/"
 */
    messageId?: string | Expression<string> | PlaceholderValue;
};

export type GoogleChatV1MessageDeleteNode = {
  type: 'n8n-nodes-base.googleChat';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<GoogleChatV1MessageDeleteParams>;
};