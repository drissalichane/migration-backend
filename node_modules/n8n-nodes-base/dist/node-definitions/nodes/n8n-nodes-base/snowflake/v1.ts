/**
 * Snowflake Node - Version 1
 * Get, add and update data in Snowflake
 */


export interface SnowflakeV1Params {
  operation?: 'executeQuery' | 'insert' | 'update';
/**
 * The SQL query to execute
 * @displayOptions.show { operation: ["executeQuery"] }
 */
    query?: string;
/**
 * Name of the table in which to insert data to
 * @displayOptions.show { operation: ["insert"] }
 */
    table?: string | Expression<string> | PlaceholderValue;
/**
 * Comma-separated list of the properties which should used as columns for the new rows
 * @displayOptions.show { operation: ["insert"] }
 */
    columns?: string | Expression<string> | PlaceholderValue;
/**
 * Name of the property which decides which rows in the database should be updated. Normally that would be "id".
 * @displayOptions.show { operation: ["update"] }
 * @default id
 */
    updateKey?: string | Expression<string> | PlaceholderValue;
}

export interface SnowflakeV1Credentials {
  snowflake: CredentialReference;
}

interface SnowflakeV1NodeBase {
  type: 'n8n-nodes-base.snowflake';
  version: 1;
  credentials?: SnowflakeV1Credentials;
}

export type SnowflakeV1ParamsNode = SnowflakeV1NodeBase & {
  config: NodeConfig<SnowflakeV1Params>;
};

export type SnowflakeV1Node = SnowflakeV1ParamsNode;