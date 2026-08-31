/**
 * Drift Node - Version 1
 * Discriminator: resource=contact, operation=create
 */


interface Credentials {
  driftApi: CredentialReference;
  driftOAuth2Api: CredentialReference;
}

/** Create a contact */
export type DriftV1ContactCreateParams = {
  resource: 'contact';
  operation: 'create';
  authentication?: 'accessToken' | 'oAuth2' | Expression<string>;
/**
 * The email of the contact
 */
    email?: string | Expression<string> | PlaceholderValue;
/**
 * Additional Fields
 * @default {}
 */
    additionalFields?: {
    /** The name of the contact
     */
    name?: string | Expression<string> | PlaceholderValue;
    /** The phone number associated with the contact
     */
    phone?: string | Expression<string> | PlaceholderValue;
  };
};

export type DriftV1ContactCreateNode = {
  type: 'n8n-nodes-base.drift';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<DriftV1ContactCreateParams>;
};