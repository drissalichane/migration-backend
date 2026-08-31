/**
 * Drift Node - Version 1
 * Discriminator: resource=contact, operation=get
 */


interface Credentials {
  driftApi: CredentialReference;
  driftOAuth2Api: CredentialReference;
}

/** Get a contact */
export type DriftV1ContactGetParams = {
  resource: 'contact';
  operation: 'get';
  authentication?: 'accessToken' | 'oAuth2' | Expression<string>;
/**
 * Unique identifier for the contact
 */
    contactId?: string | Expression<string> | PlaceholderValue;
};

export type DriftV1ContactGetNode = {
  type: 'n8n-nodes-base.drift';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<DriftV1ContactGetParams>;
};