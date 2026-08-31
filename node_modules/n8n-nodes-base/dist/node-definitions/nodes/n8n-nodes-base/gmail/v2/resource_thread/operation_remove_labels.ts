/**
 * Gmail Node - Version 2
 * Discriminator: resource=thread, operation=removeLabels
 */


interface Credentials {
  googleApi: CredentialReference;
  gmailOAuth2: CredentialReference;
}

export type GmailV2ThreadRemoveLabelsParams = {
  resource: 'thread';
  operation: 'removeLabels';
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

export type GmailV2ThreadRemoveLabelsOutput = {
  id?: string;
  messages?: Array<{
    id?: string;
    labelIds?: Array<string>;
    threadId?: string;
  }>;
};

export type GmailV2ThreadRemoveLabelsNode = {
  type: 'n8n-nodes-base.gmail';
  version: 2;
  credentials?: Credentials;
  config: NodeConfig<GmailV2ThreadRemoveLabelsParams>;
  output?: Items<GmailV2ThreadRemoveLabelsOutput>;
};