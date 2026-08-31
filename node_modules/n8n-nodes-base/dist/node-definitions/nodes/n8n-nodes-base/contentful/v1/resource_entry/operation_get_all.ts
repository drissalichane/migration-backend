/**
 * Contentful Node - Version 1
 * Discriminator: resource=entry, operation=getAll
 */


interface Credentials {
  contentfulApi: CredentialReference;
}

export type ContentfulV1EntryGetAllParams = {
  resource: 'entry';
  operation: 'getAll';
/**
 * Pick where your data comes from, delivery or preview API
 * @default deliveryApi
 */
    source?: 'deliveryApi' | 'previewApi' | Expression<string>;
/**
 * The ID for the Contentful environment (e.g. master, staging, etc.). Depending on your plan, you might not have environments. In that case use "master".
 * @default master
 */
    environmentId?: string | Expression<string> | PlaceholderValue;
/**
 * Whether to return all results or only up to a given limit
 * @default false
 */
    returnAll?: boolean | Expression<boolean>;
/**
 * Max number of results to return
 * @displayOptions.show { returnAll: [false] }
 * @default 100
 */
    limit?: number | Expression<number>;
/**
 * Additional Fields
 * @default {}
 */
    additionalFields?: {
    /** To search for entries with a specific content type
     */
    content_type?: string | Expression<string> | PlaceholderValue;
    /** Search for all data that matches the condition: {attribute}={value}. Attribute can use dot notation.
     */
    equal?: string | Expression<string> | PlaceholderValue;
    /** Search for all data that matches the condition: {attribute}[nin]={value}. Attribute can use dot notation.
     */
    exclude?: string | Expression<string> | PlaceholderValue;
    /** Search for all data that matches the condition: {attribute}[exists]={value}. Attribute can use dot notation.
     */
    exist?: string | Expression<string> | PlaceholderValue;
    /** The select operator allows you to choose what fields to return from an entity. You can choose multiple values by combining comma-separated operators.
     */
    select?: string | Expression<string> | PlaceholderValue;
    /** Search for all data that matches the condition: {attribute}[in]={value}. Attribute can use dot notation.
     */
    include?: string | Expression<string> | PlaceholderValue;
    /** Search for all data that matches the condition: {attribute}[ne]={value}. Attribute can use dot notation.
     */
    notEqual?: string | Expression<string> | PlaceholderValue;
    /** You can order items in the response by specifying the order search parameter. You can use sys properties (such as sys.createdAt) or field values (such as fields.myCustomDateField) for ordering.
     */
    order?: string | Expression<string> | PlaceholderValue;
    /** Full-text search is case insensitive and might return more results than expected. A query will only take values with more than 1 character.
     */
    query?: string | Expression<string> | PlaceholderValue;
    /** Whether the data should be returned RAW instead of parsed
     * @default false
     */
    rawData?: boolean | Expression<boolean>;
  };
};

export type ContentfulV1EntryGetAllOutput = {
  fields?: {
    internalName?: string;
  };
  name?: string;
  sys?: {
    contentType?: {
      sys?: {
        id?: string;
        linkType?: string;
        type?: string;
      };
    };
    createdAt?: string;
    environment?: {
      sys?: {
        id?: string;
        linkType?: string;
        type?: string;
      };
    };
    id?: string;
    locale?: string;
    publishedVersion?: number;
    revision?: number;
    space?: {
      sys?: {
        id?: string;
        linkType?: string;
        type?: string;
      };
    };
    type?: string;
    updatedAt?: string;
  };
};

export type ContentfulV1EntryGetAllNode = {
  type: 'n8n-nodes-base.contentful';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<ContentfulV1EntryGetAllParams>;
  output?: Items<ContentfulV1EntryGetAllOutput>;
};