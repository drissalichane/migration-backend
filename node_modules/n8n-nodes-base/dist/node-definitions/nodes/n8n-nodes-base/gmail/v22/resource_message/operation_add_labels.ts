/**
 * Gmail Node - Version 2.2
 * Discriminator: resource=message, operation=addLabels
 */


interface Credentials {
  googleApi: CredentialReference;
  gmailOAuth2: CredentialReference;
}

export type GmailV22MessageAddLabelsParams = {
  resource: 'message';
  operation: 'addLabels';
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

export type GmailV22MessageAddLabelsOutput = {
  id?: string;
  labelIds?: Array<string>;
  threadId?: string;
};

export type GmailV22MessageAddLabelsNode = {
  type: 'n8n-nodes-base.gmail';
  version: 2.2;
  credentials?: Credentials;
  config: NodeConfig<GmailV22MessageAddLabelsParams>;
  output?: Items<GmailV22MessageAddLabelsOutput>;
};