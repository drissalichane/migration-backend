/**
 * Google Drive Node - Version 2
 * Discriminator: resource=drive, operation=get
 */


interface Credentials {
  googleApi: CredentialReference;
  googleDriveOAuth2Api: CredentialReference;
}

/** Get a drive */
export type GoogleDriveV2DriveGetParams = {
  resource: 'drive';
  operation: 'get';
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
/**
 * Options
 * @default {}
 */
    options?: {
    /** Whether to issue the request as a domain administrator; if set to true, then the requester will be granted access if they are an administrator of the domain to which the shared drive belongs. (Default: false).
     * @default false
     */
    useDomainAdminAccess?: boolean | Expression<boolean>;
  };
};

export type GoogleDriveV2DriveGetNode = {
  type: 'n8n-nodes-base.googleDrive';
  version: 2;
  credentials?: Credentials;
  config: NodeConfig<GoogleDriveV2DriveGetParams>;
};