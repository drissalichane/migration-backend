/**
 * Coda Node - Version 1
 * Discriminator: resource=table, operation=deleteRow
 */


interface Credentials {
  codaApi: CredentialReference;
}

/** Access data of tables in documents */
export type CodaV1TableDeleteRowParams = {
  resource: 'table';
  operation: 'deleteRow';
/**
 * ID of the doc. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
 */
    docId?: string | Expression<string>;
/**
 * The table to delete the row in. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
 */
    tableId?: string | Expression<string>;
/**
 * Row IDs to delete
 */
    rowId?: string | Expression<string> | PlaceholderValue;
};

export type CodaV1TableDeleteRowNode = {
  type: 'n8n-nodes-base.coda';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<CodaV1TableDeleteRowParams>;
};