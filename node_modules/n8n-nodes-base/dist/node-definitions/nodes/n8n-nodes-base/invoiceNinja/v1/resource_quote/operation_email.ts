/**
 * Invoice Ninja Node - Version 1
 * Discriminator: resource=quote, operation=email
 */


interface Credentials {
  invoiceNinjaApi: CredentialReference;
}

/** Email an invoice */
export type InvoiceNinjaV1QuoteEmailParams = {
  resource: 'quote';
  operation: 'email';
/**
 * API Version
 * @default v4
 */
    apiVersion?: 'v4' | 'v5' | Expression<string>;
/**
 * Quote ID
 */
    quoteId?: string | Expression<string> | PlaceholderValue;
};

export type InvoiceNinjaV1QuoteEmailNode = {
  type: 'n8n-nodes-base.invoiceNinja';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<InvoiceNinjaV1QuoteEmailParams>;
};