/**
 * Grist Node - Version 1
 * Consume the Grist API
 */


export interface GristV1Params {
  operation?: 'create' | 'delete' | 'getAll' | 'update';
/**
 * In your document, click your profile icon, then Document Settings, then copy the value under "This document's ID"
 */
    docId?: string | Expression<string> | PlaceholderValue;
/**
 * ID of table to operate on. If unsure, look at the Code View.
 */
    tableId?: string | Expression<string> | PlaceholderValue;
/**
 * ID of the row to delete, or comma-separated list of row IDs to delete
 * @displayOptions.show { operation: ["delete"] }
 */
    rowId?: string | Expression<string> | PlaceholderValue;
/**
 * Whether to return all results or only up to a given limit
 * @displayOptions.show { operation: ["getAll"] }
 * @default false
 */
    returnAll?: boolean | Expression<boolean>;
/**
 * Max number of results to return
 * @displayOptions.show { operation: ["getAll"], returnAll: [false] }
 * @default 50
 */
    limit?: number | Expression<number>;
/**
 * Additional Options
 * @displayOptions.show { operation: ["getAll"] }
 * @default {}
 */
    additionalOptions?: {
    /** Only return rows matching all of the given filters. For complex filters, create a formula column and filter for the value "true".
     * @default {}
     */
    filter?: {
        /** Filter Properties
     */
    filterProperties?: Array<{
      /** Column to apply the filter in. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
       */
      field?: string | Expression<string>;
      /** Comma-separated list of values to search for in the filtered column
       */
      values?: string | Expression<string> | PlaceholderValue;
    }>;
  };
    /** Sort Order
     * @default {}
     */
    sort?: {
        /** Sort Properties
     */
    sortProperties?: Array<{
      /** Column to sort on. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
       */
      field?: string | Expression<string>;
      /** Direction to sort in
       * @default asc
       */
      direction?: 'asc' | 'desc' | Expression<string>;
    }>;
  };
  };
/**
 * Whether to insert the input data this node receives in the new row
 * @displayOptions.show { operation: ["create", "update"] }
 * @default defineInNode
 */
    dataToSend?: 'autoMapInputs' | 'defineInNode' | Expression<string>;
/**
 * List of input properties to avoid sending, separated by commas. Leave empty to send all properties.
 * @displayOptions.show { operation: ["create", "update"], dataToSend: ["autoMapInputs"] }
 */
    inputsToIgnore?: string | Expression<string> | PlaceholderValue;
/**
 * Fields to Send
 * @displayOptions.show { operation: ["create", "update"], dataToSend: ["defineInNode"] }
 * @default {}
 */
    fieldsToSend?: {
        /** Properties
     */
    properties?: Array<{
      /** Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
       */
      fieldId?: string | Expression<string>;
      /** Field Value
       */
      fieldValue?: string | Expression<string> | PlaceholderValue;
    }>;
  };
}

export interface GristV1Credentials {
  gristApi: CredentialReference;
}

interface GristV1NodeBase {
  type: 'n8n-nodes-base.grist';
  version: 1;
  credentials?: GristV1Credentials;
}

export type GristV1ParamsNode = GristV1NodeBase & {
  config: NodeConfig<GristV1Params>;
};

export type GristV1Node = GristV1ParamsNode;