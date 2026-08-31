/**
 * HaloPSA Node - Version 1
 * Discriminator: resource=client, operation=create
 */


interface Credentials {
  haloPSAApi: CredentialReference;
}

/** Create a client */
export type HaloPSAV1ClientCreateParams = {
  resource: 'client';
  operation: 'create';
/**
 * Enter client name
 */
    clientName?: string | Expression<string> | PlaceholderValue;
/**
 * Additional Fields
 * @default {}
 */
    additionalFields?: {
    /** Account Status
     * @default false
     */
    inactive?: false | true | Expression<boolean>;
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

export type HaloPSAV1ClientCreateNode = {
  type: 'n8n-nodes-base.haloPSA';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<HaloPSAV1ClientCreateParams>;
};