/**
 * Harvest Node - Version 1
 * Discriminator: resource=expense, operation=delete
 */


interface Credentials {
  harvestApi: CredentialReference;
  harvestOAuth2Api: CredentialReference;
}

/** Delete a client */
export type HarvestV1ExpenseDeleteParams = {
  resource: 'expense';
  operation: 'delete';
  authentication?: 'accessToken' | 'oAuth2' | Expression<string>;
/**
 * Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
 */
    accountId?: string | Expression<string>;
/**
 * The ID of the expense you want to delete
 */
    id?: string | Expression<string> | PlaceholderValue;
};

export type HarvestV1ExpenseDeleteNode = {
  type: 'n8n-nodes-base.harvest';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<HarvestV1ExpenseDeleteParams>;
};