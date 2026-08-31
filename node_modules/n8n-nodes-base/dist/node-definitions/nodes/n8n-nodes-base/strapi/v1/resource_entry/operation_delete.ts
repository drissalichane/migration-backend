/**
 * Strapi Node - Version 1
 * Discriminator: resource=entry, operation=delete
 */


interface Credentials {
  strapiApi: CredentialReference;
  strapiTokenApi: CredentialReference;
}

/** Delete an entry */
export type StrapiV1EntryDeleteParams = {
  resource: 'entry';
  operation: 'delete';
  authentication?: 'password' | 'token' | Expression<string>;
/**
 * Name of the content type
 */
    contentType?: string | Expression<string> | PlaceholderValue;
/**
 * The ID of the entry to delete
 */
    entryId?: string | Expression<string> | PlaceholderValue;
};

export type StrapiV1EntryDeleteNode = {
  type: 'n8n-nodes-base.strapi';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<StrapiV1EntryDeleteParams>;
};