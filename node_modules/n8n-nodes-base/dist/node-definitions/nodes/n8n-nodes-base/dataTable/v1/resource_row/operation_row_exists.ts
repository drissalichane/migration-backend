/**
 * Data table Node - Version 1
 * Discriminator: resource=row, operation=rowExists
 */


/** Match input items that are in the data table */
export type DataTableV1RowRowExistsParams = {
  resource: 'row';
  operation: 'rowExists';
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

export type DataTableV1RowRowExistsNode = {
  type: 'n8n-nodes-base.dataTable';
  version: 1;
  config: NodeConfig<DataTableV1RowRowExistsParams>;
};