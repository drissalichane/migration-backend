/**
 * SyncroMSP Node - Version 1
 * Discriminator: resource=customer, operation=get
 */


interface Credentials {
  syncroMspApi: CredentialReference;
}

/** Retrieve customer */
export type SyncroMspV1CustomerGetParams = {
  resource: 'customer';
  operation: 'get';
/**
 * Get specific customer by ID
 */
    customerId?: string | Expression<string> | PlaceholderValue;
};

export type SyncroMspV1CustomerGetNode = {
  type: 'n8n-nodes-base.syncroMsp';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<SyncroMspV1CustomerGetParams>;
};