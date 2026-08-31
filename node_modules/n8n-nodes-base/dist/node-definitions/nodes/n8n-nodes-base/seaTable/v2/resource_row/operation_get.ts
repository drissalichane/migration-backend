/**
 * SeaTable Node - Version 2
 * Discriminator: resource=row, operation=get
 */


interface Credentials {
  seaTableApi: CredentialReference;
}

/** Get the content of a row */
export type SeaTableV2RowGetParams = {
  resource: 'row';
  operation: 'get';
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
 * Options
 * @default {}
 */
    options?: {
    /** Whether to return a simplified version of the response instead of the raw data
     * @default true
     */
    simple?: boolean | Expression<boolean>;
    /** Whether to return the column keys (false) or the column names (true)
     * @default true
     */
    convert?: boolean | Expression<boolean>;
  };
};

export type SeaTableV2RowGetNode = {
  type: 'n8n-nodes-base.seaTable';
  version: 2;
  credentials?: Credentials;
  config: NodeConfig<SeaTableV2RowGetParams>;
};