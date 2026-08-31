/**
 * Dropbox Node - Version 1
 * Discriminator: resource=folder, operation=copy
 */


interface Credentials {
  dropboxApi: CredentialReference;
  dropboxOAuth2Api: CredentialReference;
}

/** Copy a file */
export type DropboxV1FolderCopyParams = {
  resource: 'folder';
  operation: 'copy';
/**
 * Means of authenticating with the service
 * @default accessToken
 */
    authentication?: 'accessToken' | 'oAuth2' | Expression<string>;
/**
 * The path of file or folder to copy
 */
    path?: string | Expression<string> | PlaceholderValue;
/**
 * The destination path of file or folder
 */
    toPath?: string | Expression<string> | PlaceholderValue;
};

export type DropboxV1FolderCopyNode = {
  type: 'n8n-nodes-base.dropbox';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<DropboxV1FolderCopyParams>;
};