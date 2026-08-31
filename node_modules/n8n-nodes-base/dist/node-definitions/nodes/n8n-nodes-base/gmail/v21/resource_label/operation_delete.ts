/**
 * Gmail Node - Version 2.1
 * Discriminator: resource=label, operation=delete
 */


interface Credentials {
  googleApi: CredentialReference;
  gmailOAuth2: CredentialReference;
}

export type GmailV21LabelDeleteParams = {
  resource: 'label';
  operation: 'delete';
  authentication?: 'oAuth2' | 'serviceAccount' | Expression<string>;
/**
 * The ID of the label
 */
    labelId?: string | Expression<string> | PlaceholderValue;
};

export type GmailV21LabelDeleteNode = {
  type: 'n8n-nodes-base.gmail';
  version: 2.1;
  credentials?: Credentials;
  config: NodeConfig<GmailV21LabelDeleteParams>;
};