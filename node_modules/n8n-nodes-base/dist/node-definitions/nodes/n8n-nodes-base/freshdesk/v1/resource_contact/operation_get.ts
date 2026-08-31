/**
 * Freshdesk Node - Version 1
 * Discriminator: resource=contact, operation=get
 */


interface Credentials {
  freshdeskApi: CredentialReference;
}

/** Get a ticket */
export type FreshdeskV1ContactGetParams = {
  resource: 'contact';
  operation: 'get';
/**
 * Contact ID
 */
    contactId?: string | Expression<string> | PlaceholderValue;
};

export type FreshdeskV1ContactGetNode = {
  type: 'n8n-nodes-base.freshdesk';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<FreshdeskV1ContactGetParams>;
};