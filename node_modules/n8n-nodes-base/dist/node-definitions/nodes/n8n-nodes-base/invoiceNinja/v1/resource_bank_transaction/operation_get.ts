/**
 * Invoice Ninja Node - Version 1
 * Discriminator: resource=bank_transaction, operation=get
 */


interface Credentials {
  invoiceNinjaApi: CredentialReference;
}

/** Get data of a client */
export type InvoiceNinjaV1BankTransactionGetParams = {
  resource: 'bank_transaction';
  operation: 'get';
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

export type InvoiceNinjaV1BankTransactionGetNode = {
  type: 'n8n-nodes-base.invoiceNinja';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<InvoiceNinjaV1BankTransactionGetParams>;
};