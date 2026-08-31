/**
 * Quick Base Node - Version 1
 * Discriminator: resource=record, operation=delete
 */


interface Credentials {
  quickbaseApi: CredentialReference;
}

/** Delete a file */
export type QuickbaseV1RecordDeleteParams = {
  resource: 'record';
  operation: 'delete';
/**
 * The table identifier
 */
    tableId?: string | Expression<string> | PlaceholderValue;
/**
 * The filter to delete records. To delete all records specify a filter that will include all records, for example {3.GT.0} where 3 is the ID of the Record ID field.
 */
    where?: string | Expression<string> | PlaceholderValue;
};

export type QuickbaseV1RecordDeleteNode = {
  type: 'n8n-nodes-base.quickbase';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<QuickbaseV1RecordDeleteParams>;
};