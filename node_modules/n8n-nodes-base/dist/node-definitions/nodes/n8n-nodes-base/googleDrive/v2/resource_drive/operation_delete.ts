/**
 * Google Drive Node - Version 2
 * Discriminator: resource=drive, operation=delete
 */


interface Credentials {
  googleApi: CredentialReference;
  googleDriveOAuth2Api: CredentialReference;
}

/** Delete a file */
export type GoogleDriveV2DriveDeleteParams = {
  resource: 'drive';
  operation: 'delete';
/**
 * Authentication
 * @default oAuth2
 */
    authentication?: 'oAuth2' | 'serviceAccount' | Expression<string>;
/**
 * The ID of the drive
 * @hint The Google Drive drive to operate on
 * @default {"mode":"list","value":""}
 */
    driveId?: { __rl: true; mode: 'list' | 'url' | 'id'; value: string; cachedResultName?: string };
};

export type GoogleDriveV2DriveDeleteNode = {
  type: 'n8n-nodes-base.googleDrive';
  version: 2;
  credentials?: Credentials;
  config: NodeConfig<GoogleDriveV2DriveDeleteParams>;
};