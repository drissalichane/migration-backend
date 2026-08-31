/**
 * Harvest Node - Version 1
 * Discriminator: resource=client, operation=update
 */


interface Credentials {
  harvestApi: CredentialReference;
  harvestOAuth2Api: CredentialReference;
}

/** Update a client */
export type HarvestV1ClientUpdateParams = {
  resource: 'client';
  operation: 'update';
  authentication?: 'accessToken' | 'oAuth2' | Expression<string>;
/**
 * Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
 */
    accountId?: string | Expression<string>;
/**
 * The ID of the client want to update
 */
    id?: string | Expression<string> | PlaceholderValue;
/**
 * Update Fields
 * @default {}
 */
    updateFields?: {
    /** A textual representation of the client’s physical address. May include new line characters.
     */
    address?: string | Expression<string> | PlaceholderValue;
    /** The currency used by the estimate. If not provided, the client’s currency will be used. See a list of supported currencies
     */
    currency?: string | Expression<string> | PlaceholderValue;
    /** Whether the client is active, or archived. Defaults to true.
     * @default true
     */
    is_active?: boolean | Expression<boolean>;
    /** Whether the client is active, or archived. Defaults to true.
     */
    name?: string | Expression<string> | PlaceholderValue;
  };
};

export type HarvestV1ClientUpdateNode = {
  type: 'n8n-nodes-base.harvest';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<HarvestV1ClientUpdateParams>;
};