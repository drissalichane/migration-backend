/**
 * SeaTable Node - Version 2
 * Discriminator: resource=row, operation=unlock
 */


interface Credentials {
  seaTableApi: CredentialReference;
}

/** Remove the lock from a row */
export type SeaTableV2RowUnlockParams = {
  resource: 'row';
  operation: 'unlock';
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

export type SeaTableV2RowUnlockNode = {
  type: 'n8n-nodes-base.seaTable';
  version: 2;
  credentials?: Credentials;
  config: NodeConfig<SeaTableV2RowUnlockParams>;
};