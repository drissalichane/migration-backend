/**
 * Gmail Node - Version 2.2
 * Discriminator: resource=message, operation=markAsRead
 */


interface Credentials {
  googleApi: CredentialReference;
  gmailOAuth2: CredentialReference;
}

export type GmailV22MessageMarkAsReadParams = {
  resource: 'message';
  operation: 'markAsRead';
  authentication?: 'oAuth2' | 'serviceAccount' | Expression<string>;
/**
 * Message ID
 */
    messageId?: string | Expression<string> | PlaceholderValue;
};

export type GmailV22MessageMarkAsReadOutput = {
  id?: string;
  labelIds?: Array<string>;
  threadId?: string;
};

export type GmailV22MessageMarkAsReadNode = {
  type: 'n8n-nodes-base.gmail';
  version: 2.2;
  credentials?: Credentials;
  config: NodeConfig<GmailV22MessageMarkAsReadParams>;
  output?: Items<GmailV22MessageMarkAsReadOutput>;
};