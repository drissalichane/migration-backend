/**
 * SendGrid Node - Version 1
 * Discriminator: resource=list, operation=create
 */


interface Credentials {
  sendGridApi: CredentialReference;
}

/** Create a list */
export type SendGridV1ListCreateParams = {
  resource: 'list';
  operation: 'create';
/**
 * Name of the list
 */
    name?: string | Expression<string> | PlaceholderValue;
};

export type SendGridV1ListCreateOutput = {
  _metadata?: {
    self?: string;
  };
  contact_count?: number;
  id?: string;
  name?: string;
};

export type SendGridV1ListCreateNode = {
  type: 'n8n-nodes-base.sendGrid';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<SendGridV1ListCreateParams>;
  output?: Items<SendGridV1ListCreateOutput>;
};