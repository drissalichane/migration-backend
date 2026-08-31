/**
 * Gmail Node - Version 2.1
 * Discriminator: resource=message, operation=removeLabels
 */


interface Credentials {
  googleApi: CredentialReference;
  gmailOAuth2: CredentialReference;
}

export type GmailV21MessageRemoveLabelsParams = {
  resource: 'message';
  operation: 'removeLabels';
  authentication?: 'oAuth2' | 'serviceAccount' | Expression<string>;
/**
 * Message ID
 */
    messageId?: string | Expression<string> | PlaceholderValue;
/**
 * Choose from the list, or specify IDs using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
 * @default []
 */
    labelIds?: string[];
};

export type GmailV21MessageRemoveLabelsOutput = {
  id?: string;
  labelIds?: Array<string>;
  threadId?: string;
};

export type GmailV21MessageRemoveLabelsNode = {
  type: 'n8n-nodes-base.gmail';
  version: 2.1;
  credentials?: Credentials;
  config: NodeConfig<GmailV21MessageRemoveLabelsParams>;
  output?: Items<GmailV21MessageRemoveLabelsOutput>;
};