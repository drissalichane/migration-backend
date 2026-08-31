/**
 * Data table Node - Version 1
 * Discriminator: resource=row, operation=upsert
 */


/** Update row(s), or insert if there is no match */
export type DataTableV1RowUpsertParams = {
  resource: 'row';
  operation: 'upsert';
/**
 * Data table
 * @builderHint Default to mode: 'list' which is easier for users to set up
 * @default {"mode":"list","value":""}
 */
    dataTableId?: { __rl: true; mode: 'list' | 'name' | 'id'; value: string; cachedResultName?: string };
/**
 * Must Match
 * @default anyCondition
 */
    matchType?: 'anyCondition' | 'allConditions' | Expression<string>;
/**
 * Filter to decide which rows get
 * @default {}
 */
    filters?: {
        /** Conditions
     */
    conditions?: Array<{
      /** Choose from the list, or specify using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
       * @default id
       */
      keyName?: string | Expression<string>;
      /** Condition
       * @default eq
       */
      condition?: string | Expression<string>;
      /** Value
       * @displayOptions.hide { condition: ["isEmpty", "isNotEmpty", "isTrue", "isFalse"] }
       */
      keyValue?: string | Expression<string> | PlaceholderValue;
    }>;
  };
/**
 * Columns
 * @default {"mappingMode":"defineBelow","value":null}
 */
    columns?: string;
/**
 * Options
 * @default {}
 */
    options?: {
    /** Whether the operation simulates and returns affected rows in their "before" and "after" states
     * @default false
     */
    dryRun?: boolean | Expression<boolean>;
  };
};

export type DataTableV1RowUpsertNode = {
  type: 'n8n-nodes-base.dataTable';
  version: 1;
  config: NodeConfig<DataTableV1RowUpsertParams>;
};