/**
 * QuickBooks Online Node - Version 1
 * Discriminator: resource=payment, operation=send
 */


interface Credentials {
  quickBooksOAuth2Api: CredentialReference;
}

export type QuickbooksV1PaymentSendParams = {
  resource: 'payment';
  operation: 'send';
/**
 * The ID of the payment to send
 */
    paymentId?: string | Expression<string> | PlaceholderValue;
/**
 * The email of the recipient of the payment
 */
    email?: string | Expression<string> | PlaceholderValue;
};

export type QuickbooksV1PaymentSendNode = {
  type: 'n8n-nodes-base.quickbooks';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<QuickbooksV1PaymentSendParams>;
};