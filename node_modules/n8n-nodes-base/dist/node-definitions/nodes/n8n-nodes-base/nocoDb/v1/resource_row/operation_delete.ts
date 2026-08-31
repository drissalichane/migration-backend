/**
 * NocoDB Node - Version 1
 * Discriminator: resource=row, operation=delete
 */


interface Credentials {
  nocoDb: CredentialReference;
  nocoDbApiToken: CredentialReference;
}

/** Delete a row */
export type NocoDbV1RowDeleteParams = {
  resource: 'row';
  operation: 'delete';
  authentication?: 'nocoDbApiToken' | 'nocoDb' | Expression<string>;
/**
 * API Version
 * @default 1
 */
    version?: 1 | 2 | 3 | Expression<number>;
/**
 * Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
 * @displayOptions.show { version: [3] }
 * @default none
 */
    workspaceId?: string | Expression<string>;
/**
 * Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
 * @displayOptions.show { version: [3] }
 */
    projectId?: string | Expression<string>;
/**
 * The table to operate on. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
 * @displayOptions.show { version: [2, 3] }
 */
    table?: string | Expression<string>;
/**
 * Primary Key Type
 * @displayOptions.show { version: [1, 2] }
 * @default id
 */
    primaryKey?: 'id' | 'ncRecordId' | 'custom' | Expression<string>;
/**
 * Field Name
 * @displayOptions.show { version: [1, 2], primaryKey: ["custom"] }
 */
    customPrimaryKey?: string | Expression<string> | PlaceholderValue;
/**
 * The value of the ID field
 * @displayOptions.show { version: [1, 2] }
 */
    id?: string | Expression<string> | PlaceholderValue;
};

export type NocoDbV1RowDeleteNode = {
  type: 'n8n-nodes-base.nocoDb';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<NocoDbV1RowDeleteParams>;
};