/**
 * SeaTable Node - Version 1
 * Consume the SeaTable API
 */


export interface SeaTableV1Params {
  resource?: 'row';
/**
 * The operation being performed
 * @default create
 */
    operation?: 'create' | 'delete' | 'get' | 'getAll' | 'update';
/**
 * The name of SeaTable table to access. Choose from the list, or specify the name using an &lt;a href="https://docs.n8n.io/code-examples/expressions/"&gt;expression&lt;/a&gt;.
 * @displayOptions.hide { operation: ["get"] }
 */
    tableName?: string | Expression<string>;
/**
 * The name of SeaTable table to access. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
 * @displayOptions.show { operation: ["get"] }
 */
    tableId?: string | Expression<string>;
/**
 * Row ID
 * @displayOptions.show { operation: ["update"] }
 */
    rowId?: string | Expression<string> | PlaceholderValue;
/**
 * Whether to insert the input data this node receives in the new row
 * @displayOptions.show { operation: ["create", "update"] }
 * @default defineBelow
 */
    fieldsToSend?: 'autoMapInputData' | 'defineBelow' | Expression<string>;
/**
 * List of input properties to avoid sending, separated by commas. Leave empty to send all properties.
 * @displayOptions.show { operation: ["create", "update"], fieldsToSend: ["autoMapInputData"] }
 */
    inputsToIgnore?: string | Expression<string> | PlaceholderValue;
/**
 * Add destination column with its value
 * @displayOptions.show { operation: ["create", "update"], fieldsToSend: ["defineBelow"] }
 * @default {}
 */
    columnsUi?: {
        /** Column
     */
    columnValues?: Array<{
      /** Choose from the list, or specify the name using an &lt;a href="https://docs.n8n.io/code-examples/expressions/"&gt;expression&lt;/a&gt;
       */
      columnName?: string | Expression<string>;
      /** Column Value
       */
      columnValue?: string | Expression<string> | PlaceholderValue;
    }>;
  };
/**
 * Whether to return all results or only up to a given limit
 * @displayOptions.show { operation: ["getAll"] }
 * @default true
 */
    returnAll?: boolean | Expression<boolean>;
/**
 * Max number of results to return
 * @displayOptions.show { operation: ["getAll"], returnAll: [false] }
 * @default 50
 */
    limit?: number | Expression<number>;
/**
 * Filters
 * @displayOptions.show { operation: ["getAll"] }
 * @default {}
 */
    filters?: {
    /** Choose from the list, or specify an View Name using an &lt;a href="https://docs.n8n.io/code-examples/expressions/"&gt;expression&lt;/a&gt;
     */
    view_name?: string | Expression<string>;
  };
/**
 * Options
 * @displayOptions.show { operation: ["getAll"] }
 * @default {}
 */
    options?: {
    /** Whether the ID of the linked row is returned in the link column (true). Otherwise, it return the name of the linked row (false).
     * @default false
     */
    convert_link_id?: boolean | Expression<boolean>;
    /** The direction of the sort, ascending (asc) or descending (desc)
     * @default asc
     */
    direction?: 'asc' | 'desc' | Expression<string>;
    /** Choose from the list, or specify a Column using an &lt;a href="https://docs.n8n.io/code-examples/expressions/"&gt;expression&lt;/a&gt;
     */
    order_by?: string | Expression<string>;
  };
}

export interface SeaTableV1Credentials {
  seaTableApi: CredentialReference;
}

interface SeaTableV1NodeBase {
  type: 'n8n-nodes-base.seaTable';
  version: 1;
  credentials?: SeaTableV1Credentials;
}

export type SeaTableV1ParamsNode = SeaTableV1NodeBase & {
  config: NodeConfig<SeaTableV1Params>;
};

export type SeaTableV1Node = SeaTableV1ParamsNode;