/**
 * HaloPSA Node - Version 1
 * Discriminator: resource=client, operation=update
 */


interface Credentials {
  haloPSAApi: CredentialReference;
}

/** Update a client */
export type HaloPSAV1ClientUpdateParams = {
  resource: 'client';
  operation: 'update';
/**
 * Client ID
 */
    clientId?: string | Expression<string> | PlaceholderValue;
/**
 * Update Fields
 * @default {}
 */
    updateFields?: {
    /** Account Status
     * @default false
     */
    inactive?: false | true | Expression<boolean>;
    /** Name
     */
    name?: string | Expression<string> | PlaceholderValue;
    /** Notes
     */
    notes?: string | Expression<string> | PlaceholderValue;
    /** Whether the client is VIP or not
     * @default false
     */
    is_vip?: boolean | Expression<boolean>;
    /** Website
     */
    website?: string | Expression<string> | PlaceholderValue;
  };
};

export type HaloPSAV1ClientUpdateNode = {
  type: 'n8n-nodes-base.haloPSA';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<HaloPSAV1ClientUpdateParams>;
};