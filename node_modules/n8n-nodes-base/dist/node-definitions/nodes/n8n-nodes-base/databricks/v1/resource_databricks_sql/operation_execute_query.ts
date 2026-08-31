/**
 * Databricks Node - Version 1
 * Discriminator: resource=databricksSql, operation=executeQuery
 */


interface Credentials {
  databricksApi: CredentialReference;
  databricksOAuth2Api: CredentialReference;
}

/** Execute SQL queries on data warehouses. <a href="https://docs.databricks.com/sql/index.html" target="_blank">Learn more</a>. */
export type DatabricksV1DatabricksSqlExecuteQueryParams = {
  resource: 'databricksSql';
  operation: 'executeQuery';
  authentication?: 'accessToken' | 'oAuth2' | Expression<string>;
/**
 * The SQL warehouse to use
 * @default {"mode":"list","value":""}
 */
    warehouseId?: { __rl: true; mode: 'list' | 'id' | 'url'; value: string; cachedResultName?: string };
/**
 * SQL query to execute
 */
    query?: string | Expression<string> | PlaceholderValue;
/**
 * Named parameters for the query. Reference them in your SQL as &lt;code&gt;:name&lt;/code&gt;, e.g. &lt;code&gt;WHERE ID = :user_id&lt;/code&gt;.
 * @default {}
 */
    queryParameters?: {
        /** Parameter
     */
    parameters?: Array<{
      /** Parameter name, referenced in the query as :name
       */
      name?: string | Expression<string> | PlaceholderValue;
      /** Value
       */
      value?: string | Expression<string> | PlaceholderValue;
      /** Leave unset to treat the value as a string
       */
      type?: '' | 'BOOLEAN' | 'DATE' | 'DOUBLE' | 'FLOAT' | 'INT' | 'LONG' | 'STRING' | 'TIMESTAMP' | Expression<string>;
    }>;
  };
};

export type DatabricksV1DatabricksSqlExecuteQueryNode = {
  type: 'n8n-nodes-base.databricks';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<DatabricksV1DatabricksSqlExecuteQueryParams>;
};