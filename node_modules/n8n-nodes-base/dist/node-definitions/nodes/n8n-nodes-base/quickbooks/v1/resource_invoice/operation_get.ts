/**
 * QuickBooks Online Node - Version 1
 * Discriminator: resource=invoice, operation=get
 */


interface Credentials {
  quickBooksOAuth2Api: CredentialReference;
}

export type QuickbooksV1InvoiceGetParams = {
  resource: 'invoice';
  operation: 'get';
/**
 * The ID of the invoice to retrieve
 */
    invoiceId?: string | Expression<string> | PlaceholderValue;
/**
 * Whether to download the invoice as a PDF file
 * @default false
 */
    download?: boolean | Expression<boolean>;
/**
 * Put Output File in Field
 * @hint The name of the output binary field to put the file in
 * @displayOptions.show { download: [true] }
 * @default data
 */
    binaryProperty?: string | Expression<string> | PlaceholderValue;
/**
 * Name of the file that will be downloaded
 * @displayOptions.show { download: [true] }
 */
    fileName?: string | Expression<string> | PlaceholderValue;
};

export type QuickbooksV1InvoiceGetNode = {
  type: 'n8n-nodes-base.quickbooks';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<QuickbooksV1InvoiceGetParams>;
};