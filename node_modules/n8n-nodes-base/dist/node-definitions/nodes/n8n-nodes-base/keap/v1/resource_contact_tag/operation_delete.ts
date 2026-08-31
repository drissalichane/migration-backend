/**
 * Keap Node - Version 1
 * Discriminator: resource=contactTag, operation=delete
 */


interface Credentials {
  keapOAuth2Api: CredentialReference;
}

/** Delete an contact */
export type KeapV1ContactTagDeleteParams = {
  resource: 'contactTag';
  operation: 'delete';
/**
 * Contact ID
 */
    contactId?: string | Expression<string> | PlaceholderValue;
/**
 * Tag IDs
 * @default Tag IDs, multiple IDs can be set separated by comma.
 */
    tagIds?: string | Expression<string> | PlaceholderValue;
};

export type KeapV1ContactTagDeleteNode = {
  type: 'n8n-nodes-base.keap';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<KeapV1ContactTagDeleteParams>;
};