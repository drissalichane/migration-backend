/**
 * SendGrid Node - Version 1
 * Discriminator: resource=contact, operation=get
 */


interface Credentials {
  sendGridApi: CredentialReference;
}

/** Get a list */
export type SendGridV1ContactGetParams = {
  resource: 'contact';
  operation: 'get';
/**
 * Search the user by ID or email
 * @default id
 */
    by?: 'id' | 'email' | Expression<string>;
/**
 * ID of the contact
 * @displayOptions.show { by: ["id"] }
 */
    contactId?: string | Expression<string> | PlaceholderValue;
/**
 * Email of the contact
 * @displayOptions.show { by: ["email"] }
 */
    email?: string | Expression<string> | PlaceholderValue;
};

export type SendGridV1ContactGetNode = {
  type: 'n8n-nodes-base.sendGrid';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<SendGridV1ContactGetParams>;
};