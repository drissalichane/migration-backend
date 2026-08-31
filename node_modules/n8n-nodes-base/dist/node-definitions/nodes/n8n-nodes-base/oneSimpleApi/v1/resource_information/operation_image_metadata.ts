/**
 * One Simple API Node - Version 1
 * Discriminator: resource=information, operation=imageMetadata
 */


interface Credentials {
  oneSimpleApi: CredentialReference;
}

/** Retrieve image metadata from a URL */
export type OneSimpleApiV1InformationImageMetadataParams = {
  resource: 'information';
  operation: 'imageMetadata';
/**
 * Image to get metadata from
 */
    link?: string | Expression<string> | PlaceholderValue;
};

export type OneSimpleApiV1InformationImageMetadataNode = {
  type: 'n8n-nodes-base.oneSimpleApi';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<OneSimpleApiV1InformationImageMetadataParams>;
};