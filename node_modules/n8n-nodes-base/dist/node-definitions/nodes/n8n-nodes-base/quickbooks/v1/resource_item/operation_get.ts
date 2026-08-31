/**
 * QuickBooks Online Node - Version 1
 * Discriminator: resource=item, operation=get
 */


interface Credentials {
  quickBooksOAuth2Api: CredentialReference;
}

export type QuickbooksV1ItemGetParams = {
  resource: 'item';
  operation: 'get';
/**
 * The ID of the item to retrieve
 */
    itemId?: string | Expression<string> | PlaceholderValue;
};

export type QuickbooksV1ItemGetNode = {
  type: 'n8n-nodes-base.quickbooks';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<QuickbooksV1ItemGetParams>;
};