/**
 * Invoice Ninja Node - Version 1
 * Discriminator: resource=quote, operation=get
 */


interface Credentials {
  invoiceNinjaApi: CredentialReference;
}

/** Get data of a client */
export type InvoiceNinjaV1QuoteGetParams = {
  resource: 'quote';
  operation: 'get';
/**
 * API Version
 * @default v4
 */
    apiVersion?: 'v4' | 'v5' | Expression<string>;
/**
 * Quote ID
 */
    quoteId?: string | Expression<string> | PlaceholderValue;
/**
 * Options
 * @default {}
 */
    options?: {
    /** Include
     * @default client
     */
    include?: 'client' | Expression<string>;
  };
};

export type InvoiceNinjaV1QuoteGetNode = {
  type: 'n8n-nodes-base.invoiceNinja';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<InvoiceNinjaV1QuoteGetParams>;
};