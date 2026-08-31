/**
 * Gmail Node - Version 2.2
 * Discriminator: resource=thread, operation=addLabels
 */


interface Credentials {
  googleApi: CredentialReference;
  gmailOAuth2: CredentialReference;
}

export type GmailV22ThreadAddLabelsParams = {
  resource: 'thread';
  operation: 'addLabels';
  authentication?: 'oAuth2' | 'serviceAccount' | Expression<string>;
/**
 * Thread ID
 */
    threadId?: string | Expression<string> | PlaceholderValue;
/**
 * Choose from the list, or specify IDs using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
 * @default []
 */
    labelIds?: string[];
};

export type GmailV22ThreadAddLabelsOutput = {
  id?: string;
  messages?: Array<{
    id?: string;
    labelIds?: Array<string>;
    threadId?: string;
  }>;
};

export type GmailV22ThreadAddLabelsNode = {
  type: 'n8n-nodes-base.gmail';
  version: 2.2;
  credentials?: Credentials;
  config: NodeConfig<GmailV22ThreadAddLabelsParams>;
  output?: Items<GmailV22ThreadAddLabelsOutput>;
};