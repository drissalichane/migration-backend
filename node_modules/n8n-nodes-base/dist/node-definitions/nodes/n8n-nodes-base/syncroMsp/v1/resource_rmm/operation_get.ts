/**
 * SyncroMSP Node - Version 1
 * Discriminator: resource=rmm, operation=get
 */


interface Credentials {
  syncroMspApi: CredentialReference;
}

/** Retrieve customer */
export type SyncroMspV1RmmGetParams = {
  resource: 'rmm';
  operation: 'get';
/**
 * Get specific RMM alert by ID
 */
    alertId?: string | Expression<string> | PlaceholderValue;
};

export type SyncroMspV1RmmGetNode = {
  type: 'n8n-nodes-base.syncroMsp';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<SyncroMspV1RmmGetParams>;
};