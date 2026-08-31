/**
 * Google Drive Node - Version 2
 * Discriminator: resource=folder, operation=create
 */


interface Credentials {
  googleApi: CredentialReference;
  googleDriveOAuth2Api: CredentialReference;
}

/** Create a folder */
export type GoogleDriveV2FolderCreateParams = {
  resource: 'folder';
  operation: 'create';
/**
 * Authentication
 * @default oAuth2
 */
    authentication?: 'oAuth2' | 'serviceAccount' | Expression<string>;
/**
 * The name of folder to create
 */
    name?: string | Expression<string> | PlaceholderValue;
};

export type GoogleDriveV2FolderCreateNode = {
  type: 'n8n-nodes-base.googleDrive';
  version: 2;
  credentials?: Credentials;
  config: NodeConfig<GoogleDriveV2FolderCreateParams>;
};