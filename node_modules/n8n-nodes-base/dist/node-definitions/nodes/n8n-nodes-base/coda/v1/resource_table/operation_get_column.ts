/**
 * Coda Node - Version 1
 * Discriminator: resource=table, operation=getColumn
 */


interface Credentials {
  codaApi: CredentialReference;
}

/** Access data of tables in documents */
export type CodaV1TableGetColumnParams = {
  resource: 'table';
  operation: 'getColumn';
/**
 * ID of the doc. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
 */
    docId?: string | Expression<string>;
/**
 * The table to get the row from. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
 */
    tableId?: string | Expression<string>;
/**
 * The table to get the row from
 */
    columnId?: string | Expression<string> | PlaceholderValue;
};

export type CodaV1TableGetColumnNode = {
  type: 'n8n-nodes-base.coda';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<CodaV1TableGetColumnParams>;
};