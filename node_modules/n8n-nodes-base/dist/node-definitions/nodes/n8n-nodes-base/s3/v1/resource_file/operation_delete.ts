/**
 * S3 Node - Version 1
 * Discriminator: resource=file, operation=delete
 */


interface Credentials {
  s3: CredentialReference;
}

/** Delete a bucket */
export type S3V1FileDeleteParams = {
  resource: 'file';
  operation: 'delete';
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

export type S3V1FileDeleteOutput = {
  success?: boolean;
};

export type S3V1FileDeleteNode = {
  type: 'n8n-nodes-base.s3';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<S3V1FileDeleteParams>;
  output?: Items<S3V1FileDeleteOutput>;
};