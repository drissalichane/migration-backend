/**
 * Strapi Node - Version 1
 * Discriminator: resource=entry, operation=update
 */


interface Credentials {
  strapiApi: CredentialReference;
  strapiTokenApi: CredentialReference;
}

/** Update an entry */
export type StrapiV1EntryUpdateParams = {
  resource: 'entry';
  operation: 'update';
  authentication?: 'password' | 'token' | Expression<string>;
/**
 * Name of the content type
 */
    contentType?: string | Expression<string> | PlaceholderValue;
/**
 * Name of the property which decides which rows in the database should be updated. Normally that would be "id".
 * @default id
 */
    updateKey?: string | Expression<string> | PlaceholderValue;
/**
 * Comma-separated list of the properties which should used as columns for the new rows
 */
    columns?: string | Expression<string> | PlaceholderValue;
};

export type StrapiV1EntryUpdateNode = {
  type: 'n8n-nodes-base.strapi';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<StrapiV1EntryUpdateParams>;
};