/**
 * S3 Node - Version 1
 * Discriminator: resource=folder, operation=delete
 */


interface Credentials {
  s3: CredentialReference;
}

/** Delete a bucket */
export type S3V1FolderDeleteParams = {
  resource: 'folder';
  operation: 'delete';
/**
 * Bucket Name
 */
    bucketName?: string | Expression<string> | PlaceholderValue;
/**
 * Folder Key
 */
    folderKey?: string | Expression<string> | PlaceholderValue;
};

export type S3V1FolderDeleteNode = {
  type: 'n8n-nodes-base.s3';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<S3V1FolderDeleteParams>;
};