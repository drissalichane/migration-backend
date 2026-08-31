/**
 * Quick Base Node - Version 1
 * Discriminator: resource=record, operation=getAll
 */


interface Credentials {
  quickbaseApi: CredentialReference;
}

/** Get many fields */
export type QuickbaseV1RecordGetAllParams = {
  resource: 'record';
  operation: 'getAll';
/**
 * The table identifier
 */
    tableId?: string | Expression<string> | PlaceholderValue;
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
    /** An array of field IDs for the fields that should be returned in the response. If empty, the default columns on the table will be returned. Choose from the list, or specify IDs using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
     * @default []
     */
    select?: string[];
    /** By default, queries will be sorted by the given sort fields or the default sort if the query does not provide any. Set to false to avoid sorting when the order of the data returned is not important. Returning data without sorting can improve performance.
     * @default {}
     */
    sortByUi?: {
        /** Sort By
     */
    sortByValues?: Array<{
      /** The unique identifier of a field in a table. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
       */
      fieldId?: string | Expression<string>;
      /** Order
       * @default ASC
       */
      order?: 'ASC' | 'DESC' | Expression<string>;
    }>;
  };
    /** The filter, using the &lt;a href="https://help.quickbase.com/api-guide/componentsquery.html"&gt;Quick Base query language&lt;/a&gt;, which determines the records to return
     */
    where?: string | Expression<string> | PlaceholderValue;
  };
};

export type QuickbaseV1RecordGetAllNode = {
  type: 'n8n-nodes-base.quickbase';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<QuickbaseV1RecordGetAllParams>;
};