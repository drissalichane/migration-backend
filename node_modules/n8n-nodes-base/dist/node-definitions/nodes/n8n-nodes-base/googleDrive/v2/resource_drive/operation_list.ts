/**
 * Google Drive Node - Version 2
 * Discriminator: resource=drive, operation=list
 */


interface Credentials {
  googleApi: CredentialReference;
  googleDriveOAuth2Api: CredentialReference;
}

/** List files and folders */
export type GoogleDriveV2DriveListParams = {
  resource: 'drive';
  operation: 'list';
/**
 * Authentication
 * @default oAuth2
 */
    authentication?: 'oAuth2' | 'serviceAccount' | Expression<string>;
/**
 * Whether to return all results or only up to a given limit
 * @default false
 */
    returnAll?: boolean | Expression<boolean>;
/**
 * Max number of results to return
 * @displayOptions.show { returnAll: [false] }
 * @default 100
 */
    limit?: number | Expression<number>;
/**
 * Options
 * @default {}
 */
    options?: {
    /** Query string for searching shared drives. See the &lt;a href="https://developers.google.com/drive/api/v3/search-shareddrives"&gt;"Search for shared drives"&lt;/a&gt; guide for supported syntax.
     */
    q?: string | Expression<string> | PlaceholderValue;
    /** Whether to issue the request as a domain administrator; if set to true, then the requester will be granted access if they are an administrator of the domain to which the shared drive belongs. (Default: false).
     * @default false
     */
    useDomainAdminAccess?: boolean | Expression<boolean>;
  };
};

export type GoogleDriveV2DriveListNode = {
  type: 'n8n-nodes-base.googleDrive';
  version: 2;
  credentials?: Credentials;
  config: NodeConfig<GoogleDriveV2DriveListParams>;
};