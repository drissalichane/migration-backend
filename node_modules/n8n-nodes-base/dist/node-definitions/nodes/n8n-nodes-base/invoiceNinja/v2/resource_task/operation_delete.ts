/**
 * Invoice Ninja Node - Version 2
 * Discriminator: resource=task, operation=delete
 */


interface Credentials {
  invoiceNinjaApi: CredentialReference;
}

/** Delete a client */
export type InvoiceNinjaV2TaskDeleteParams = {
  resource: 'task';
  operation: 'delete';
/**
 * API Version
 * @default v5
 */
    apiVersion?: 'v4' | 'v5' | Expression<string>;
/**
 * Task ID
 */
    taskId?: string | Expression<string> | PlaceholderValue;
};

export type InvoiceNinjaV2TaskDeleteNode = {
  type: 'n8n-nodes-base.invoiceNinja';
  version: 2;
  credentials?: Credentials;
  config: NodeConfig<InvoiceNinjaV2TaskDeleteParams>;
};