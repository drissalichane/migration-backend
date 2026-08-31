/**
 * SendGrid Node - Version 1
 * Discriminator: resource=contact, operation=delete
 */


interface Credentials {
  sendGridApi: CredentialReference;
}

/** Delete a list */
export type SendGridV1ContactDeleteParams = {
  resource: 'contact';
  operation: 'delete';
/**
 * ID of the contact. Multiple can be added separated by comma.
 * @displayOptions.show { deleteAll: [false] }
 */
    ids?: string | Expression<string> | PlaceholderValue;
/**
 * Whether all contacts will be deleted
 * @default false
 */
    deleteAll?: boolean | Expression<boolean>;
};

export type SendGridV1ContactDeleteNode = {
  type: 'n8n-nodes-base.sendGrid';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<SendGridV1ContactDeleteParams>;
};