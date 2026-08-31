/**
 * NocoDB Node - Version 1
 * Discriminator: resource=row, operation=get
 */


interface Credentials {
  nocoDb: CredentialReference;
  nocoDbApiToken: CredentialReference;
}

/** Retrieve a row */
export type NocoDbV1RowGetParams = {
  resource: 'row';
  operation: 'get';
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
 * The value of the ID field
 * @displayOptions.show { version: [1, 2] }
 */
    id?: string | Expression<string> | PlaceholderValue;
/**
 * Whether the attachment fields define in 'Download Fields' will be downloaded
 * @default false
 */
    downloadAttachments?: boolean | Expression<boolean>;
/**
 * Name of the fields of type 'attachment' that should be downloaded. Multiple ones can be defined separated by comma. Case sensitive.
 * @displayOptions.show { downloadAttachments: [true] }
 */
    downloadFieldNames?: string | Expression<string> | PlaceholderValue;
};

export type NocoDbV1RowGetNode = {
  type: 'n8n-nodes-base.nocoDb';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<NocoDbV1RowGetParams>;
};