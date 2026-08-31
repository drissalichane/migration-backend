/**
 * Invoice Ninja Node - Version 1
 * Discriminator: resource=payment, operation=delete
 */


interface Credentials {
  invoiceNinjaApi: CredentialReference;
}

/** Delete a client */
export type InvoiceNinjaV1PaymentDeleteParams = {
  resource: 'payment';
  operation: 'delete';
/**
 * API Version
 * @default v4
 */
    apiVersion?: 'v4' | 'v5' | Expression<string>;
/**
 * Payment ID
 */
    paymentId?: string | Expression<string> | PlaceholderValue;
};

export type InvoiceNinjaV1PaymentDeleteNode = {
  type: 'n8n-nodes-base.invoiceNinja';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<InvoiceNinjaV1PaymentDeleteParams>;
};