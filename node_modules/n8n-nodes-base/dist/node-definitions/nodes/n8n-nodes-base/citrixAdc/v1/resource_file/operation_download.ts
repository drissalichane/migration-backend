/**
 * Netscaler ADC Node - Version 1
 * Discriminator: resource=file, operation=download
 */


interface Credentials {
  citrixAdcApi: CredentialReference;
}

export type CitrixAdcV1FileDownloadParams = {
  resource: 'file';
  operation: 'download';
/**
 * File Location
 * @default /nsconfig/ssl/
 */
    fileLocation?: string | Expression<string> | PlaceholderValue;
/**
 * Name of the file. It should not include filepath.
 */
    fileName?: string | Expression<string> | PlaceholderValue;
/**
 * The name of the output field to put the binary file data in
 * @default data
 */
    binaryProperty?: string | Expression<string> | PlaceholderValue;
};

export type CitrixAdcV1FileDownloadNode = {
  type: 'n8n-nodes-base.citrixAdc';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<CitrixAdcV1FileDownloadParams>;
};