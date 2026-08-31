/**
 * SyncroMSP Node - Version 1
 * Discriminator: resource=contact, operation=get
 */


interface Credentials {
  syncroMspApi: CredentialReference;
}

/** Retrieve customer */
export type SyncroMspV1ContactGetParams = {
  resource: 'contact';
  operation: 'get';
/**
 * Get specific contact by ID
 */
    contactId?: string | Expression<string> | PlaceholderValue;
};

export type SyncroMspV1ContactGetNode = {
  type: 'n8n-nodes-base.syncroMsp';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<SyncroMspV1ContactGetParams>;
};