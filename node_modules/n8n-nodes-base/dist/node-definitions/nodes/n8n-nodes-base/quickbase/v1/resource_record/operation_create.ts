/**
 * Quick Base Node - Version 1
 * Discriminator: resource=record, operation=create
 */


interface Credentials {
  quickbaseApi: CredentialReference;
}

/** Create a record */
export type QuickbaseV1RecordCreateParams = {
  resource: 'record';
  operation: 'create';
/**
 * The table identifier
 */
    tableId?: string | Expression<string> | PlaceholderValue;
/**
 * Comma-separated list of the properties which should used as columns for the new rows
 */
    columns?: string | Expression<string> | PlaceholderValue;
/**
 * Whether to return a simplified version of the response instead of the raw data
 * @default true
 */
    simple?: boolean | Expression<boolean>;
/**
 * Options
 * @default {}
 */
    options?: {
    /** Specify an array of field IDs that will return data for any updates or added record. Record ID (FID 3) is always returned if any field ID is requested. Choose from the list, or specify IDs using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
     * @default []
     */
    fields?: string[];
    /** Whether to use Field IDs instead of Field Names in Columns
     * @default false
     */
    useFieldIDs?: boolean | Expression<boolean>;
  };
};

export type QuickbaseV1RecordCreateNode = {
  type: 'n8n-nodes-base.quickbase';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<QuickbaseV1RecordCreateParams>;
};