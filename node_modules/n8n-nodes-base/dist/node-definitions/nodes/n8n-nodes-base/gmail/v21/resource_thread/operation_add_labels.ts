/**
 * Gmail Node - Version 2.1
 * Discriminator: resource=thread, operation=addLabels
 */


interface Credentials {
  googleApi: CredentialReference;
  gmailOAuth2: CredentialReference;
}

export type GmailV21ThreadAddLabelsParams = {
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

export type GmailV21ThreadAddLabelsOutput = {
  id?: string;
  messages?: Array<{
    id?: string;
    labelIds?: Array<string>;
    threadId?: string;
  }>;
};

export type GmailV21ThreadAddLabelsNode = {
  type: 'n8n-nodes-base.gmail';
  version: 2.1;
  credentials?: Credentials;
  config: NodeConfig<GmailV21ThreadAddLabelsParams>;
  output?: Items<GmailV21ThreadAddLabelsOutput>;
};