/**
 * Harvest Node - Version 1
 * Discriminator: resource=client, operation=create
 */


interface Credentials {
  harvestApi: CredentialReference;
  harvestOAuth2Api: CredentialReference;
}

/** Create a client */
export type HarvestV1ClientCreateParams = {
  resource: 'client';
  operation: 'create';
  authentication?: 'accessToken' | 'oAuth2' | Expression<string>;
/**
 * Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
 */
    accountId?: string | Expression<string>;
/**
 * The name of the client
 */
    name?: string | Expression<string> | PlaceholderValue;
/**
 * Additional Fields
 * @default {}
 */
    additionalFields?: {
    /** A textual representation of the client’s physical address. May include new line characters.
     */
    address?: string | Expression<string> | PlaceholderValue;
    /** The currency used by the estimate. If not provided, the client’s currency will be used. See a list of supported currencies
     */
    currency?: string | Expression<string> | PlaceholderValue;
    /** Whether the client is active, or archived. Defaults to true.
     */
    is_active?: string | Expression<string> | PlaceholderValue;
  };
};

export type HarvestV1ClientCreateNode = {
  type: 'n8n-nodes-base.harvest';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<HarvestV1ClientCreateParams>;
};