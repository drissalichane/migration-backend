/**
 * S3 Node - Version 1
 * Discriminator: resource=file, operation=download
 */


interface Credentials {
  s3: CredentialReference;
}

/** Download a file */
export type S3V1FileDownloadParams = {
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

export type S3V1FileDownloadOutput = {
  ETag?: string;
  Key?: string;
  LastModified?: string;
  Size?: string;
  StorageClass?: string;
};

export type S3V1FileDownloadNode = {
  type: 'n8n-nodes-base.s3';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<S3V1FileDownloadParams>;
  output?: Items<S3V1FileDownloadOutput>;
};