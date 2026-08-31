/**
 * Box Node - Version 1
 * Discriminator: resource=file, operation=download
 */


interface Credentials {
  boxOAuth2Api: CredentialReference;
}

/** Download a file */
export type BoxV1FileDownloadParams = {
  resource: 'file';
  operation: 'download';
/**
 * File ID
 */
    fileId?: string | Expression<string> | PlaceholderValue;
/**
 * Put Output File in Field
 * @hint The name of the output binary field to put the file in
 * @default data
 */
    binaryPropertyName?: string | Expression<string> | PlaceholderValue;
};

export type BoxV1FileDownloadOutput = {
  created_at?: string;
  created_by?: {
    id?: string;
    login?: string;
    name?: string;
    type?: string;
  };
  etag?: string;
  id?: string;
  name?: string;
  sequence_id?: string;
  type?: string;
};

export type BoxV1FileDownloadNode = {
  type: 'n8n-nodes-base.box';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<BoxV1FileDownloadParams>;
  output?: Items<BoxV1FileDownloadOutput>;
};