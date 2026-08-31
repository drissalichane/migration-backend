/**
 * Gmail Node - Version 2
 * Discriminator: resource=label, operation=delete
 */


interface Credentials {
  googleApi: CredentialReference;
  gmailOAuth2: CredentialReference;
}

export type GmailV2LabelDeleteParams = {
  resource: 'label';
  operation: 'delete';
  authentication?: 'oAuth2' | 'serviceAccount' | Expression<string>;
/**
 * The ID of the label
 */
    labelId?: string | Expression<string> | PlaceholderValue;
};

export type GmailV2LabelDeleteNode = {
  type: 'n8n-nodes-base.gmail';
  version: 2;
  credentials?: Credentials;
  config: NodeConfig<GmailV2LabelDeleteParams>;
};