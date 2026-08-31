/**
 * Google Drive Node - Version 2
 * Discriminator: resource=file, operation=delete
 */


interface Credentials {
  googleApi: CredentialReference;
  googleDriveOAuth2Api: CredentialReference;
}

/** Delete a file */
export type GoogleDriveV2FileDeleteParams = {
  resource: 'file';
  operation: 'delete';
/**
 * Authentication
 * @default oAuth2
 */
    authentication?: 'oAuth2' | 'serviceAccount' | Expression<string>;
/**
 * The ID of the file
 * @default {"mode":"list","value":""}
 */
    fileId?: { __rl: true; mode: 'list' | 'url' | 'id'; value: string; cachedResultName?: string };
};

export type GoogleDriveV2FileDeleteNode = {
  type: 'n8n-nodes-base.googleDrive';
  version: 2;
  credentials?: Credentials;
  config: NodeConfig<GoogleDriveV2FileDeleteParams>;
};