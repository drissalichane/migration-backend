/**
 * Google BigQuery Node - Version 1
 * Discriminator: resource=record, operation=create
 */


interface Credentials {
  googleApi: CredentialReference;
  googleBigQueryOAuth2Api: CredentialReference;
}

/** Create a new record */
export type GoogleBigQueryV1RecordCreateParams = {
  resource: 'record';
  operation: 'create';
  authentication?: 'oAuth2' | 'serviceAccount';
/**
 * ID of the project to create the record in. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
 */
    projectId?: string | Expression<string>;
/**
 * ID of the dataset to create the record in. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
 */
    datasetId?: string | Expression<string>;
/**
 * ID of the table to create the record in. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
 */
    tableId?: string | Expression<string>;
/**
 * Comma-separated list of the item properties to use as columns
 */
    columns?: string | Expression<string> | PlaceholderValue;
/**
 * Options
 * @default {}
 */
    options?: {
    /** Whether to ignore row values that do not match the schema
     * @default false
     */
    ignoreUnknownValues?: boolean | Expression<boolean>;
    /** Whether to skip rows with values that do not match the schema
     * @default false
     */
    skipInvalidRows?: boolean | Expression<boolean>;
    /** Create a new table based on the destination table and insert rows into the new table. The new table will be named &lt;code&gt;{destinationTable}{templateSuffix}&lt;/code&gt;
     */
    templateSuffix?: string | Expression<string> | PlaceholderValue;
    /** Unique ID for the request, for debugging only. It is case-sensitive, limited to up to 36 ASCII characters. A UUID is recommended.
     */
    traceId?: string | Expression<string> | PlaceholderValue;
  };
};

export type GoogleBigQueryV1RecordCreateNode = {
  type: 'n8n-nodes-base.googleBigQuery';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<GoogleBigQueryV1RecordCreateParams>;
};