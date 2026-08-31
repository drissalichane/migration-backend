/**
 * QuickBooks Online Node - Version 1
 * Discriminator: resource=payment, operation=get
 */


interface Credentials {
  quickBooksOAuth2Api: CredentialReference;
}

export type QuickbooksV1PaymentGetParams = {
  resource: 'payment';
  operation: 'get';
/**
 * The ID of the payment to retrieve
 */
    paymentId?: string | Expression<string> | PlaceholderValue;
/**
 * Whether to download estimate as PDF file
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

export type QuickbooksV1PaymentGetNode = {
  type: 'n8n-nodes-base.quickbooks';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<QuickbooksV1PaymentGetParams>;
};