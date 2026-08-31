/**
 * NocoDB Node - Version 2
 * Discriminator: resource=row, operation=delete
 */


interface Credentials {
  nocoDb: CredentialReference;
  nocoDbApiToken: CredentialReference;
}

/** Delete a row */
export type NocoDbV2RowDeleteParams = {
  resource: 'row';
  operation: 'delete';
  authentication?: 'nocoDbApiToken' | 'nocoDb' | Expression<string>;
/**
 * API Version
 * @default 2
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
 * @displayOptions.show { version: [3, 1, 2] }
 */
    projectId?: string | Expression<string>;
/**
 * The table to operate on. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
 * @displayOptions.show { version: [2, 3, 1] }
 */
    table?: string | Expression<string>;
/**
 * Primary Key Type
 * @displayOptions.show { version: [1, 2, 3] }
 * @default id
 */
    primaryKey?: 'id' | 'ncRecordId' | 'custom' | Expression<string>;
/**
 * Field Name
 * @displayOptions.show { version: [1, 2, 3], primaryKey: ["custom"] }
 */
    customPrimaryKey?: string | Expression<string> | PlaceholderValue;
/**
 * The value of the ID field
 * @displayOptions.show { version: [1, 2, 3] }
 */
    id?: string | Expression<string> | PlaceholderValue;
};

export type NocoDbV2RowDeleteNode = {
  type: 'n8n-nodes-base.nocoDb';
  version: 2;
  credentials?: Credentials;
  config: NodeConfig<NocoDbV2RowDeleteParams>;
};