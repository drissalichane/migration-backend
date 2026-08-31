/**
 * Dropbox Node - Version 1
 * Discriminator: resource=file, operation=download
 */


interface Credentials {
  dropboxApi: CredentialReference;
  dropboxOAuth2Api: CredentialReference;
}

/** Download a file */
export type DropboxV1FileDownloadParams = {
  resource: 'file';
  operation: 'download';
/**
 * Means of authenticating with the service
 * @default accessToken
 */
    authentication?: 'accessToken' | 'oAuth2' | Expression<string>;
/**
 * The file path of the file to download. Has to contain the full path.
 */
    path?: string | Expression<string> | PlaceholderValue;
/**
 * Put Output File in Field
 * @hint The name of the output binary field to put the file in
 * @default data
 */
    binaryPropertyName?: string | Expression<string> | PlaceholderValue;
};

export type DropboxV1FileDownloadOutput = {
  contentHash?: string;
  contentSize?: number;
  id?: string;
  isDownloadable?: boolean;
  lastModifiedClient?: string;
  lastModifiedServer?: string;
  name?: string;
  pathDisplay?: string;
  pathLower?: string;
  rev?: string;
  type?: string;
};

export type DropboxV1FileDownloadNode = {
  type: 'n8n-nodes-base.dropbox';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<DropboxV1FileDownloadParams>;
  output?: Items<DropboxV1FileDownloadOutput>;
};