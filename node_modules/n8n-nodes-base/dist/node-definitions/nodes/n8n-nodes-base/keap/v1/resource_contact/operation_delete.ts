/**
 * Keap Node - Version 1
 * Discriminator: resource=contact, operation=delete
 */


interface Credentials {
  keapOAuth2Api: CredentialReference;
}

/** Delete an contact */
export type KeapV1ContactDeleteParams = {
  resource: 'contact';
  operation: 'delete';
/**
 * Contact ID
 */
    contactId?: string | Expression<string> | PlaceholderValue;
};

export type KeapV1ContactDeleteNode = {
  type: 'n8n-nodes-base.keap';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<KeapV1ContactDeleteParams>;
};