/**
 * SeaTable Node - Version 2
 * Discriminator: resource=row, operation=update
 */


interface Credentials {
  seaTableApi: CredentialReference;
}

/** Update the content of a row */
export type SeaTableV2RowUpdateParams = {
  resource: 'row';
  operation: 'update';
/**
 * Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
 */
    tableName?: string | Expression<string>;
/**
 * Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
 * @displayOptions.hide { operation: ["create", "list", "search"] }
 */
    rowId?: string | Expression<string>;
/**
 * Whether to insert the input data this node receives in the new row
 * @default defineBelow
 */
    fieldsToSend?: 'autoMapInputData' | 'defineBelow' | Expression<string>;
/**
 * List of input properties to avoid sending, separated by commas. Leave empty to send all properties.
 * @displayOptions.show { fieldsToSend: ["autoMapInputData"] }
 */
    inputsToIgnore?: string | Expression<string> | PlaceholderValue;
/**
 * Add destination column with its value. Provide the value in this way:Date: YYYY-MM-DD or YYYY-MM-DD hh:mmDuration: time in secondsCheckbox: true, on or 1Multi-Select: comma-separated list.
 * @displayOptions.show { fieldsToSend: ["defineBelow"] }
 * @default {}
 */
    columnsUi?: {
        /** Column
     */
    columnValues?: Array<{
      /** Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
       */
      columnName?: string | Expression<string>;
      /** Column Value
       */
      columnValue?: string | Expression<string> | PlaceholderValue;
    }>;
  };
};

export type SeaTableV2RowUpdateNode = {
  type: 'n8n-nodes-base.seaTable';
  version: 2;
  credentials?: Credentials;
  config: NodeConfig<SeaTableV2RowUpdateParams>;
};