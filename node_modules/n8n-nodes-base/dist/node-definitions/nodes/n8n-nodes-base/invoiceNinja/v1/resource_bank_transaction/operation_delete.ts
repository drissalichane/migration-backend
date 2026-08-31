/**
 * Invoice Ninja Node - Version 1
 * Discriminator: resource=bank_transaction, operation=delete
 */


interface Credentials {
  invoiceNinjaApi: CredentialReference;
}

/** Delete a client */
export type InvoiceNinjaV1BankTransactionDeleteParams = {
  resource: 'bank_transaction';
  operation: 'delete';
/**
 * API Version
 * @default v4
 */
    apiVersion?: 'v4' | 'v5' | Expression<string>;
/**
 * Bank Transaction ID
 */
    bankTransactionId?: string | Expression<string> | PlaceholderValue;
};

export type InvoiceNinjaV1BankTransactionDeleteNode = {
  type: 'n8n-nodes-base.invoiceNinja';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<InvoiceNinjaV1BankTransactionDeleteParams>;
};