/**
 * Gmail Node - Version 2.1
 * Discriminator: resource=message, operation=markAsUnread
 */


interface Credentials {
  googleApi: CredentialReference;
  gmailOAuth2: CredentialReference;
}

export type GmailV21MessageMarkAsUnreadParams = {
  resource: 'message';
  operation: 'markAsUnread';
  authentication?: 'oAuth2' | 'serviceAccount' | Expression<string>;
/**
 * Message ID
 */
    messageId?: string | Expression<string> | PlaceholderValue;
};

export type GmailV21MessageMarkAsUnreadOutput = {
  historyId?: string;
  id?: string;
  internalDate?: string;
  labelIds?: Array<string>;
  sizeEstimate?: number;
  snippet?: string;
  threadId?: string;
};

export type GmailV21MessageMarkAsUnreadNode = {
  type: 'n8n-nodes-base.gmail';
  version: 2.1;
  credentials?: Credentials;
  config: NodeConfig<GmailV21MessageMarkAsUnreadParams>;
  output?: Items<GmailV21MessageMarkAsUnreadOutput>;
};