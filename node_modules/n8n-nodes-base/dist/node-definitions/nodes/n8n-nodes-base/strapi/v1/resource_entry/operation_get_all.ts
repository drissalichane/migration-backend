/**
 * Strapi Node - Version 1
 * Discriminator: resource=entry, operation=getAll
 */


interface Credentials {
  strapiApi: CredentialReference;
  strapiTokenApi: CredentialReference;
}

/** Get many entries */
export type StrapiV1EntryGetAllParams = {
  resource: 'entry';
  operation: 'getAll';
  authentication?: 'password' | 'token' | Expression<string>;
/**
 * Name of the content type
 */
    contentType?: string | Expression<string> | PlaceholderValue;
/**
 * Whether to return all results or only up to a given limit
 * @default false
 */
    returnAll?: boolean | Expression<boolean>;
/**
 * Max number of results to return
 * @displayOptions.show { returnAll: [false] }
 * @default 50
 */
    limit?: number | Expression<number>;
/**
 * Options
 * @default {}
 */
    options?: {
    /** Only select entries matching the publication state provided
     */
    publicationState?: 'live' | 'preview' | Expression<string>;
    /** Name of the fields to sort the data by. By default will be sorted ascendingly. To modify that behavior, you have to add the sort direction after the name of sort field preceded by a colon. For example: &lt;code&gt;name:asc&lt;/code&gt;.
     */
    sort?: string | Expression<string> | PlaceholderValue;
    /** JSON query to filter the data. &lt;a href="https://strapi.io/documentation/developer-docs/latest/developer-resources/content-api/content-api.html#filters"&gt;More info&lt;/a&gt;.
     */
    where?: string | Expression<string> | PlaceholderValue;
  };
};

export type StrapiV1EntryGetAllOutput = {
  createdAt?: string;
  documentId?: string;
  id?: number;
  publishedAt?: string;
  updatedAt?: string;
};

export type StrapiV1EntryGetAllNode = {
  type: 'n8n-nodes-base.strapi';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<StrapiV1EntryGetAllParams>;
  output?: Items<StrapiV1EntryGetAllOutput>;
};