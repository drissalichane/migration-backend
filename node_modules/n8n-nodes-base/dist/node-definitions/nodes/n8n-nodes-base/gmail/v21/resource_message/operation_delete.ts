/**
 * Gmail Node - Version 2.1
 * Discriminator: resource=message, operation=delete
 */


interface Credentials {
  googleApi: CredentialReference;
  gmailOAuth2: CredentialReference;
}

export type GmailV21MessageDeleteParams = {
  resource: 'message';
  operation: 'delete';
  authentication?: 'oAuth2' | 'serviceAccount' | Expression<string>;
/**
 * Message ID
 */
    messageId?: string | Expression<string> | PlaceholderValue;
};

export type GmailV21MessageDeleteOutput = {
  success?: boolean;
};

export type GmailV21MessageDeleteNode = {
  type: 'n8n-nodes-base.gmail';
  version: 2.1;
  credentials?: Credentials;
  config: NodeConfig<GmailV21MessageDeleteParams>;
  output?: Items<GmailV21MessageDeleteOutput>;
};