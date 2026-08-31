/**
 * AWS S3 Node - Version 1
 * Discriminator: resource=bucket, operation=delete
 */


interface Credentials {
  aws: CredentialReference;
}

/** Delete a bucket */
export type AwsS3V1BucketDeleteParams = {
  resource: 'bucket';
  operation: 'delete';
/**
 * Name of the AWS S3 bucket to delete
 */
    name?: string | Expression<string> | PlaceholderValue;
};

export type AwsS3V1BucketDeleteNode = {
  type: 'n8n-nodes-base.awsS3';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<AwsS3V1BucketDeleteParams>;
};