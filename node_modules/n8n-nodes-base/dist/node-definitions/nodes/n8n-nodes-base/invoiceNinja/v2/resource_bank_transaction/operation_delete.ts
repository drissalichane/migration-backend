/**
 * Invoice Ninja Node - Version 2
 * Discriminator: resource=bank_transaction, operation=delete
 */


interface Credentials {
  invoiceNinjaApi: CredentialReference;
}

/** Delete a client */
export type InvoiceNinjaV2BankTransactionDeleteParams = {
  resource: 'bank_transaction';
  operation: 'delete';
/**
 * API Version
 * @default v5
 */
    apiVersion?: 'v4' | 'v5' | Expression<string>;
/**
 * Bank Transaction ID
 */
    bankTransactionId?: string | Expression<string> | PlaceholderValue;
};

export type InvoiceNinjaV2BankTransactionDeleteNode = {
  type: 'n8n-nodes-base.invoiceNinja';
  version: 2;
  credentials?: Credentials;
  config: NodeConfig<InvoiceNinjaV2BankTransactionDeleteParams>;
};