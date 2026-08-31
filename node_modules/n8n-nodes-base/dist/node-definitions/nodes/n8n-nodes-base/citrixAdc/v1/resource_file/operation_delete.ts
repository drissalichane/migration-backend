/**
 * Netscaler ADC Node - Version 1
 * Discriminator: resource=file, operation=delete
 */


interface Credentials {
  citrixAdcApi: CredentialReference;
}

export type CitrixAdcV1FileDeleteParams = {
  resource: 'file';
  operation: 'delete';
/**
 * File Location
 * @default /nsconfig/ssl/
 */
    fileLocation?: string | Expression<string> | PlaceholderValue;
/**
 * Name of the file. It should not include filepath.
 */
    fileName?: string | Expression<string> | PlaceholderValue;
};

export type CitrixAdcV1FileDeleteNode = {
  type: 'n8n-nodes-base.citrixAdc';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<CitrixAdcV1FileDeleteParams>;
};