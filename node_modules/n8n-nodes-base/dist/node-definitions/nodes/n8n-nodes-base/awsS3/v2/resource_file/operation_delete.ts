/**
 * AWS S3 Node - Version 2
 * Discriminator: resource=file, operation=delete
 */


interface Credentials {
  aws: CredentialReference;
  awsAssumeRole: CredentialReference;
}

/** Delete a bucket */
export type AwsS3V2FileDeleteParams = {
  resource: 'file';
  operation: 'delete';
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
 * Options
 * @default {}
 */
    options?: {
    /** Version ID
     */
    versionId?: string | Expression<string> | PlaceholderValue;
  };
};

export type AwsS3V2FileDeleteOutput = {
  success?: boolean;
};

export type AwsS3V2FileDeleteNode = {
  type: 'n8n-nodes-base.awsS3';
  version: 2;
  credentials?: Credentials;
  config: NodeConfig<AwsS3V2FileDeleteParams>;
  output?: Items<AwsS3V2FileDeleteOutput>;
};