/**
 * QuickBooks Online Node - Version 1
 * Discriminator: resource=customer, operation=get
 */


interface Credentials {
  quickBooksOAuth2Api: CredentialReference;
}

export type QuickbooksV1CustomerGetParams = {
  resource: 'customer';
  operation: 'get';
/**
 * The ID of the customer to retrieve
 */
    customerId?: string | Expression<string> | PlaceholderValue;
};

export type QuickbooksV1CustomerGetNode = {
  type: 'n8n-nodes-base.quickbooks';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<QuickbooksV1CustomerGetParams>;
};