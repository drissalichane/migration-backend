/**
 * QuickBooks Online Node - Version 1
 * Discriminator: resource=payment, operation=delete
 */


interface Credentials {
  quickBooksOAuth2Api: CredentialReference;
}

export type QuickbooksV1PaymentDeleteParams = {
  resource: 'payment';
  operation: 'delete';
/**
 * The ID of the payment to delete
 */
    paymentId?: string | Expression<string> | PlaceholderValue;
};

export type QuickbooksV1PaymentDeleteNode = {
  type: 'n8n-nodes-base.quickbooks';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<QuickbooksV1PaymentDeleteParams>;
};