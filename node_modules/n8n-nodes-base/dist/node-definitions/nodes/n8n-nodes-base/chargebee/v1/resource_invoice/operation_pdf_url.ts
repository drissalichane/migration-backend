/**
 * Chargebee Node - Version 1
 * Discriminator: resource=invoice, operation=pdfUrl
 */


interface Credentials {
  chargebeeApi: CredentialReference;
}

/** Get URL for the invoice PDF */
export type ChargebeeV1InvoicePdfUrlParams = {
  resource: 'invoice';
  operation: 'pdfUrl';
/**
 * The ID of the invoice to get
 */
    invoiceId?: string | Expression<string> | PlaceholderValue;
};

export type ChargebeeV1InvoicePdfUrlNode = {
  type: 'n8n-nodes-base.chargebee';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<ChargebeeV1InvoicePdfUrlParams>;
};