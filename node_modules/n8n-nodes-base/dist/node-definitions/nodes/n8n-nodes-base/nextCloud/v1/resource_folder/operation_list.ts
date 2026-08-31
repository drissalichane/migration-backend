/**
 * Nextcloud Node - Version 1
 * Discriminator: resource=folder, operation=list
 */


interface Credentials {
  nextCloudApi: CredentialReference;
  nextCloudOAuth2Api: CredentialReference;
}

/** Return the contents of a given folder */
export type NextCloudV1FolderListParams = {
  resource: 'folder';
  operation: 'list';
  authentication?: 'accessToken' | 'oAuth2' | Expression<string>;
/**
 * The path of which to list the content. The path should start with "/".
 */
    path?: string | Expression<string> | PlaceholderValue;
};

export type NextCloudV1FolderListOutput = {
  contentLength?: string;
  contentType?: string;
  eTag?: string;
  lastModified?: string;
  path?: string;
  type?: string;
};

export type NextCloudV1FolderListNode = {
  type: 'n8n-nodes-base.nextCloud';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<NextCloudV1FolderListParams>;
  output?: Items<NextCloudV1FolderListOutput>;
};