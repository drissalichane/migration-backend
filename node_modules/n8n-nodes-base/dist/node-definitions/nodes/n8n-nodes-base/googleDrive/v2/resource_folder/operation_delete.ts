/**
 * Google Drive Node - Version 2
 * Discriminator: resource=folder, operation=delete
 */


interface Credentials {
  googleApi: CredentialReference;
  googleDriveOAuth2Api: CredentialReference;
}

/** Delete a file */
export type GoogleDriveV2FolderDeleteParams = {
  resource: 'folder';
  operation: 'delete';
/**
 * Authentication
 * @default oAuth2
 */
    authentication?: 'oAuth2' | 'serviceAccount' | Expression<string>;
/**
 * The ID of the folder
 * @default {"mode":"list","value":""}
 */
    fileId?: { __rl: true; mode: 'list' | 'url' | 'id'; value: string; cachedResultName?: string };
};

export type GoogleDriveV2FolderDeleteNode = {
  type: 'n8n-nodes-base.googleDrive';
  version: 2;
  credentials?: Credentials;
  config: NodeConfig<GoogleDriveV2FolderDeleteParams>;
};