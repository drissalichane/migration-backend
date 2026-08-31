/**
 * Wise Node - Version 1
 * Discriminator: resource=transfer, operation=get
 */


interface Credentials {
  wiseApi: CredentialReference;
}

export type WiseV1TransferGetParams = {
  resource: 'transfer';
  operation: 'get';
/**
 * ID of the transfer to retrieve
 */
    transferId?: string | Expression<string> | PlaceholderValue;
/**
 * Whether to download the transfer receipt as a PDF file. Only for executed transfers, having status 'Outgoing Payment Sent'.
 * @default false
 */
    downloadReceipt?: boolean | Expression<boolean>;
/**
 * Put Output File in Field
 * @hint The name of the output binary field to put the file in
 * @displayOptions.show { downloadReceipt: [true] }
 * @default data
 */
    binaryProperty?: string | Expression<string> | PlaceholderValue;
/**
 * Name of the file that will be downloaded
 * @displayOptions.show { downloadReceipt: [true] }
 */
    fileName?: string | Expression<string> | PlaceholderValue;
};

export type WiseV1TransferGetNode = {
  type: 'n8n-nodes-base.wise';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<WiseV1TransferGetParams>;
};