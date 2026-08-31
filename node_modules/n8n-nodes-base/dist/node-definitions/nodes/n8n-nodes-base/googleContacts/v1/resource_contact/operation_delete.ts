/**
 * Google Contacts Node - Version 1
 * Discriminator: resource=contact, operation=delete
 */


interface Credentials {
  googleContactsOAuth2Api: CredentialReference;
}

/** Delete a contact */
export type GoogleContactsV1ContactDeleteParams = {
  resource: 'contact';
  operation: 'delete';
/**
 * Contact ID
 */
    contactId?: string | Expression<string> | PlaceholderValue;
};

export type GoogleContactsV1ContactDeleteNode = {
  type: 'n8n-nodes-base.googleContacts';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<GoogleContactsV1ContactDeleteParams>;
};