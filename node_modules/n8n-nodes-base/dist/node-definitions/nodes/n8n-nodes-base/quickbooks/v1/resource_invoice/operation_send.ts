/**
 * QuickBooks Online Node - Version 1
 * Discriminator: resource=invoice, operation=send
 */


interface Credentials {
  quickBooksOAuth2Api: CredentialReference;
}

export type QuickbooksV1InvoiceSendParams = {
  resource: 'invoice';
  operation: 'send';
/**
 * The ID of the invoice to send
 */
    invoiceId?: string | Expression<string> | PlaceholderValue;
/**
 * The email of the recipient of the invoice
 */
    email?: string | Expression<string> | PlaceholderValue;
};

export type QuickbooksV1InvoiceSendNode = {
  type: 'n8n-nodes-base.quickbooks';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<QuickbooksV1InvoiceSendParams>;
};