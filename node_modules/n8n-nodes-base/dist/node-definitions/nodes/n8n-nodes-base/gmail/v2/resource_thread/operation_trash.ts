/**
 * Gmail Node - Version 2
 * Discriminator: resource=thread, operation=trash
 */


interface Credentials {
  googleApi: CredentialReference;
  gmailOAuth2: CredentialReference;
}

export type GmailV2ThreadTrashParams = {
  resource: 'thread';
  operation: 'trash';
  authentication?: 'oAuth2' | 'serviceAccount' | Expression<string>;
/**
 * The ID of the thread you are operating on
 */
    threadId?: string | Expression<string> | PlaceholderValue;
};

export type GmailV2ThreadTrashOutput = {
  id?: string;
  messages?: Array<{
    id?: string;
    labelIds?: Array<string>;
    threadId?: string;
  }>;
};

export type GmailV2ThreadTrashNode = {
  type: 'n8n-nodes-base.gmail';
  version: 2;
  credentials?: Credentials;
  config: NodeConfig<GmailV2ThreadTrashParams>;
  output?: Items<GmailV2ThreadTrashOutput>;
};