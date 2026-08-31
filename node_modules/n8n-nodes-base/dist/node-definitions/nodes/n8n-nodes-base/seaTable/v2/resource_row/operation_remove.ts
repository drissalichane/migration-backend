/**
 * SeaTable Node - Version 2
 * Discriminator: resource=row, operation=remove
 */


interface Credentials {
  seaTableApi: CredentialReference;
}

/** Delete a row */
export type SeaTableV2RowRemoveParams = {
  resource: 'row';
  operation: 'remove';
/**
 * Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
 */
    tableName?: string | Expression<string>;
/**
 * Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
 * @displayOptions.hide { operation: ["create", "list", "search"] }
 */
    rowId?: string | Expression<string>;
};

export type SeaTableV2RowRemoveNode = {
  type: 'n8n-nodes-base.seaTable';
  version: 2;
  credentials?: Credentials;
  config: NodeConfig<SeaTableV2RowRemoveParams>;
};