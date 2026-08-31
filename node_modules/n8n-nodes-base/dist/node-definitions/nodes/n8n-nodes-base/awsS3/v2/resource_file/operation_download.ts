/**
 * AWS S3 Node - Version 2
 * Discriminator: resource=file, operation=download
 */


interface Credentials {
  aws: CredentialReference;
  awsAssumeRole: CredentialReference;
}

/** Download a file */
export type AwsS3V2FileDownloadParams = {
  resource: 'file';
  operation: 'download';
  authentication?: 'iam' | 'assumeRole' | Expression<string>;
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

export type AwsS3V2FileDownloadOutput = {
  ETag?: string;
  Key?: string;
  LastModified?: string;
  Size?: string;
  StorageClass?: string;
};

export type AwsS3V2FileDownloadNode = {
  type: 'n8n-nodes-base.awsS3';
  version: 2;
  credentials?: Credentials;
  config: NodeConfig<AwsS3V2FileDownloadParams>;
  output?: Items<AwsS3V2FileDownloadOutput>;
};