/**
 * SyncroMSP Node - Version 1
 * Discriminator: resource=rmm, operation=create
 */


interface Credentials {
  syncroMspApi: CredentialReference;
}

/** Create new customer */
export type SyncroMspV1RmmCreateParams = {
  resource: 'rmm';
  operation: 'create';
/**
 * Asset ID
 */
    assetId?: string | Expression<string> | PlaceholderValue;
/**
 * Customer ID
 */
    customerId?: string | Expression<string> | PlaceholderValue;
/**
 * Description
 */
    description?: string | Expression<string> | PlaceholderValue;
/**
 * Additional Fields
 * @default {}
 */
    additionalFields?: {
    /** Resolved
     * @default false
     */
    resolved?: boolean | Expression<boolean>;
  };
};

export type SyncroMspV1RmmCreateNode = {
  type: 'n8n-nodes-base.syncroMsp';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<SyncroMspV1RmmCreateParams>;
};