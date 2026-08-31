/**
 * Help Scout Node - Version 1
 * Discriminator: resource=customer, operation=get
 */


interface Credentials {
  helpScoutOAuth2Api: CredentialReference;
}

/** Get a conversation */
export type HelpScoutV1CustomerGetParams = {
  resource: 'customer';
  operation: 'get';
/**
 * Customer ID
 */
    customerId?: string | Expression<string> | PlaceholderValue;
};

export type HelpScoutV1CustomerGetNode = {
  type: 'n8n-nodes-base.helpScout';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<HelpScoutV1CustomerGetParams>;
};