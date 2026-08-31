/**
 * Invoice Ninja Node - Version 1
 * Discriminator: resource=task, operation=delete
 */


interface Credentials {
  invoiceNinjaApi: CredentialReference;
}

/** Delete a client */
export type InvoiceNinjaV1TaskDeleteParams = {
  resource: 'task';
  operation: 'delete';
/**
 * API Version
 * @default v4
 */
    apiVersion?: 'v4' | 'v5' | Expression<string>;
/**
 * Task ID
 */
    taskId?: string | Expression<string> | PlaceholderValue;
};

export type InvoiceNinjaV1TaskDeleteNode = {
  type: 'n8n-nodes-base.invoiceNinja';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<InvoiceNinjaV1TaskDeleteParams>;
};