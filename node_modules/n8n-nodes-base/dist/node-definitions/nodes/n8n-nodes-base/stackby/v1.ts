/**
 * Stackby Node - Version 1
 * Read, write, and delete data in Stackby
 */


export interface StackbyV1Params {
  operation?: 'append' | 'delete' | 'list' | 'read';
/**
 * The ID of the stack to access
 */
    stackId?: string | Expression<string> | PlaceholderValue;
/**
 * Enter Table Name
 */
    table?: string | Expression<string> | PlaceholderValue;
/**
 * ID of the record to return
 * @displayOptions.show { operation: ["read", "delete"] }
 */
    id?: string | Expression<string> | PlaceholderValue;
/**
 * Whether to return all results or only up to a given limit
 * @displayOptions.show { operation: ["list"] }
 * @default true
 */
    returnAll?: boolean | Expression<boolean>;
/**
 * Max number of results to return
 * @displayOptions.show { operation: ["list"], returnAll: [false] }
 * @default 1000
 */
    limit?: number | Expression<number>;
/**
 * Additional Fields
 * @displayOptions.show { operation: ["list"] }
 * @default {}
 */
    additionalFields?: {
    /** The name or ID of a view in the Stories table. If set, only the records in that view will be returned. The records will be sorted according to the order of the view.
     */
    view?: string | Expression<string> | PlaceholderValue;
  };
/**
 * Comma-separated list of the properties which should used as columns for the new rows
 * @displayOptions.show { operation: ["append"] }
 */
    columns?: string | Expression<string> | PlaceholderValue;
}

export interface StackbyV1Credentials {
  stackbyApi: CredentialReference;
}

interface StackbyV1NodeBase {
  type: 'n8n-nodes-base.stackby';
  version: 1;
  credentials?: StackbyV1Credentials;
}

export type StackbyV1ParamsNode = StackbyV1NodeBase & {
  config: NodeConfig<StackbyV1Params>;
};

export type StackbyV1Node = StackbyV1ParamsNode;