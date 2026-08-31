/**
 * SyncroMSP Node - Version 1
 * Discriminator: resource=contact, operation=delete
 */


interface Credentials {
  syncroMspApi: CredentialReference;
}

/** Delete customer */
export type SyncroMspV1ContactDeleteParams = {
  resource: 'contact';
  operation: 'delete';
/**
 * Delete a specific contact by ID
 */
    contactId?: string | Expression<string> | PlaceholderValue;
};

export type SyncroMspV1ContactDeleteNode = {
  type: 'n8n-nodes-base.syncroMsp';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<SyncroMspV1ContactDeleteParams>;
};