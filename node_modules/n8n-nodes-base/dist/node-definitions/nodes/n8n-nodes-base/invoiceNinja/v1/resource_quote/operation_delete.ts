/**
 * Invoice Ninja Node - Version 1
 * Discriminator: resource=quote, operation=delete
 */


interface Credentials {
  invoiceNinjaApi: CredentialReference;
}

/** Delete a client */
export type InvoiceNinjaV1QuoteDeleteParams = {
  resource: 'quote';
  operation: 'delete';
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

export type InvoiceNinjaV1QuoteDeleteNode = {
  type: 'n8n-nodes-base.invoiceNinja';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<InvoiceNinjaV1QuoteDeleteParams>;
};