/**
 * Strapi Node - Version 1
 * Discriminator: resource=entry, operation=get
 */


interface Credentials {
  strapiApi: CredentialReference;
  strapiTokenApi: CredentialReference;
}

/** Get an entry */
export type StrapiV1EntryGetParams = {
  resource: 'entry';
  operation: 'get';
  authentication?: 'password' | 'token' | Expression<string>;
/**
 * Name of the content type
 */
    contentType?: string | Expression<string> | PlaceholderValue;
/**
 * The ID of the entry to get
 */
    entryId?: string | Expression<string> | PlaceholderValue;
};

export type StrapiV1EntryGetOutput = {
  attributes?: {
    content?: string;
    createdAt?: string;
    heading?: string;
    primaryText?: string;
    slug?: string;
    updatedAt?: string;
  };
  id?: number;
};

export type StrapiV1EntryGetNode = {
  type: 'n8n-nodes-base.strapi';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<StrapiV1EntryGetParams>;
  output?: Items<StrapiV1EntryGetOutput>;
};