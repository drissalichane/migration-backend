/**
 * Data table Node - Version 1.1
 * Discriminator: resource=row, operation=rowNotExists
 */


/** Match input items that are not in the data table */
export type DataTableV11RowRowNotExistsParams = {
  resource: 'row';
  operation: 'rowNotExists';
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
};

export type DataTableV11RowRowNotExistsNode = {
  type: 'n8n-nodes-base.dataTable';
  version: 1.1;
  config: NodeConfig<DataTableV11RowRowNotExistsParams>;
};