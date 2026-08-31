/**
 * Quick Base Node - Version 1
 * Discriminator: resource=file, operation=delete
 */


interface Credentials {
  quickbaseApi: CredentialReference;
}

/** Delete a file */
export type QuickbaseV1FileDeleteParams = {
  resource: 'file';
  operation: 'delete';
/**
 * The table identifier
 */
    tableId?: string | Expression<string> | PlaceholderValue;
/**
 * The unique identifier of the record
 */
    recordId?: string | Expression<string> | PlaceholderValue;
/**
 * The unique identifier of the field
 */
    fieldId?: string | Expression<string> | PlaceholderValue;
/**
 * The file attachment version number
 * @default 1
 */
    versionNumber?: number | Expression<number>;
};

export type QuickbaseV1FileDeleteNode = {
  type: 'n8n-nodes-base.quickbase';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<QuickbaseV1FileDeleteParams>;
};