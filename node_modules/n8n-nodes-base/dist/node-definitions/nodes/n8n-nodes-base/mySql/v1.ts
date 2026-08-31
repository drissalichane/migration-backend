/**
 * MySQL Node - Version 1
 * Get, add and update data in MySQL
 */


export interface MySqlV1Params {
  operation?: 'executeQuery' | 'insert' | 'update';
/**
 * The SQL query to execute
 * @displayOptions.show { operation: ["executeQuery"] }
 */
    query?: string;
/**
 * Name of the table in which to insert data to
 * @displayOptions.show { operation: ["insert"] }
 * @default {"mode":"list","value":""}
 */
    table?: { __rl: true; mode: 'list' | 'name'; value: string; cachedResultName?: string };
/**
 * Comma-separated list of the properties which should used as columns for the new rows
 * @displayOptions.show { operation: ["insert"] }
 */
    columns?: string | Expression<string> | PlaceholderValue;
/**
 * Modifiers for INSERT statement
 * @displayOptions.show { operation: ["insert"] }
 * @default {}
 */
    options?: {
    /** Whether to ignore any ignorable errors that occur while executing the INSERT statement
     * @default true
     */
    ignore?: boolean | Expression<boolean>;
    /** Ignore any ignorable errors that occur while executing the INSERT statement
     * @default LOW_PRIORITY
     */
    priority?: 'LOW_PRIORITY' | 'HIGH_PRIORITY' | Expression<string>;
  };
/**
 * Name of the property which decides which rows in the database should be updated. Normally that would be "id".
 * @displayOptions.show { operation: ["update"] }
 * @default id
 */
    updateKey?: string | Expression<string> | PlaceholderValue;
}

export interface MySqlV1Credentials {
  mySql: CredentialReference;
}

interface MySqlV1NodeBase {
  type: 'n8n-nodes-base.mySql';
  version: 1;
  credentials?: MySqlV1Credentials;
}

export type MySqlV1ParamsNode = MySqlV1NodeBase & {
  config: NodeConfig<MySqlV1Params>;
};

export type MySqlV1Node = MySqlV1ParamsNode;