/**
 * AWS S3 Node - Version 1
 * Discriminator: resource=file, operation=download
 */


interface Credentials {
  aws: CredentialReference;
}

/** Download a file */
export type AwsS3V1FileDownloadParams = {
  resource: 'file';
  operation: 'download';
/**
 * Bucket Name
 */
    bucketName?: string | Expression<string> | PlaceholderValue;
/**
 * File Key
 */
    fileKey?: string | Expression<string> | PlaceholderValue;
/**
 * Put Output File in Field
 * @hint The name of the output binary field to put the file in
 * @default data
 */
    binaryPropertyName?: string | Expression<string> | PlaceholderValue;
};

export type AwsS3V1FileDownloadNode = {
  type: 'n8n-nodes-base.awsS3';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<AwsS3V1FileDownloadParams>;
};