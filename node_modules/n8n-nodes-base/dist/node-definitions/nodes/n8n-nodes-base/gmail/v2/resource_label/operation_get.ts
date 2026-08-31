/**
 * Gmail Node - Version 2
 * Discriminator: resource=label, operation=get
 */


interface Credentials {
  googleApi: CredentialReference;
  gmailOAuth2: CredentialReference;
}

export type GmailV2LabelGetParams = {
  resource: 'label';
  operation: 'get';
  authentication?: 'oAuth2' | 'serviceAccount' | Expression<string>;
/**
 * The ID of the label
 */
    labelId?: string | Expression<string> | PlaceholderValue;
};

export type GmailV2LabelGetOutput = {
  id?: string;
  labelListVisibility?: string;
  messageListVisibility?: string;
  messagesTotal?: number;
  messagesUnread?: number;
  name?: string;
  threadsTotal?: number;
  threadsUnread?: number;
  type?: string;
};

export type GmailV2LabelGetNode = {
  type: 'n8n-nodes-base.gmail';
  version: 2;
  credentials?: Credentials;
  config: NodeConfig<GmailV2LabelGetParams>;
  output?: Items<GmailV2LabelGetOutput>;
};