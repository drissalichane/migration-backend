/**
 * Gmail Node - Version 2
 * Discriminator: resource=message, operation=markAsRead
 */


interface Credentials {
  googleApi: CredentialReference;
  gmailOAuth2: CredentialReference;
}

export type GmailV2MessageMarkAsReadParams = {
  resource: 'message';
  operation: 'markAsRead';
  authentication?: 'oAuth2' | 'serviceAccount' | Expression<string>;
/**
 * Message ID
 */
    messageId?: string | Expression<string> | PlaceholderValue;
};

export type GmailV2MessageMarkAsReadOutput = {
  id?: string;
  labelIds?: Array<string>;
  threadId?: string;
};

export type GmailV2MessageMarkAsReadNode = {
  type: 'n8n-nodes-base.gmail';
  version: 2;
  credentials?: Credentials;
  config: NodeConfig<GmailV2MessageMarkAsReadParams>;
  output?: Items<GmailV2MessageMarkAsReadOutput>;
};