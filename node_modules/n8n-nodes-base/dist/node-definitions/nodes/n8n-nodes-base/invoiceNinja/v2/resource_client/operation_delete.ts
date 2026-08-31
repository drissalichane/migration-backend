/**
 * Invoice Ninja Node - Version 2
 * Discriminator: resource=client, operation=delete
 */


interface Credentials {
  invoiceNinjaApi: CredentialReference;
}

/** Delete a client */
export type InvoiceNinjaV2ClientDeleteParams = {
  resource: 'client';
  operation: 'delete';
/**
 * API Version
 * @default v5
 */
    apiVersion?: 'v4' | 'v5' | Expression<string>;
/**
 * Client ID
 */
    clientId?: string | Expression<string> | PlaceholderValue;
};

export type InvoiceNinjaV2ClientDeleteNode = {
  type: 'n8n-nodes-base.invoiceNinja';
  version: 2;
  credentials?: Credentials;
  config: NodeConfig<InvoiceNinjaV2ClientDeleteParams>;
};