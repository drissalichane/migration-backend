/**
 * Drift Node - Version 1
 * Discriminator: resource=contact, operation=update
 */


interface Credentials {
  driftApi: CredentialReference;
  driftOAuth2Api: CredentialReference;
}

/** Update a contact */
export type DriftV1ContactUpdateParams = {
  resource: 'contact';
  operation: 'update';
  authentication?: 'accessToken' | 'oAuth2' | Expression<string>;
/**
 * Unique identifier for the contact
 */
    contactId?: string | Expression<string> | PlaceholderValue;
/**
 * Update Fields
 * @default {}
 */
    updateFields?: {
    /** The email of the contact
     */
    email?: string | Expression<string> | PlaceholderValue;
    /** The name of the contact
     */
    name?: string | Expression<string> | PlaceholderValue;
    /** The phone number associated with the contact
     */
    phone?: string | Expression<string> | PlaceholderValue;
  };
};

export type DriftV1ContactUpdateNode = {
  type: 'n8n-nodes-base.drift';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<DriftV1ContactUpdateParams>;
};