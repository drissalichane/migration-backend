/**
 * Google Drive Node - Version 2
 * Discriminator: resource=file, operation=share
 */


interface Credentials {
  googleApi: CredentialReference;
  googleDriveOAuth2Api: CredentialReference;
}

/** Share a file */
export type GoogleDriveV2FileShareParams = {
  resource: 'file';
  operation: 'share';
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
/**
 * Permissions
 * @default {}
 */
    permissionsUi?: {
        /** Permission
     */
    permissionsValues?: {
      /** Role
       */
      role?: 'commenter' | 'fileOrganizer' | 'organizer' | 'owner' | 'reader' | 'writer' | Expression<string>;
      /** Information about the different types can be found &lt;a href="https://developers.google.com/drive/api/v3/ref-roles"&gt;here&lt;/a&gt;
       */
      type?: 'user' | 'group' | 'domain' | 'anyone' | Expression<string>;
      /** The email address of the user or group to which this permission refers
       * @displayOptions.show { type: ["user", "group"] }
       */
      emailAddress?: string | Expression<string> | PlaceholderValue;
      /** The domain to which this permission refers
       * @displayOptions.show { type: ["domain"] }
       */
      domain?: string | Expression<string> | PlaceholderValue;
      /** Whether the permission allows the file to be discovered through search
       * @displayOptions.show { type: ["domain", "anyone"] }
       * @default false
       */
      allowFileDiscovery?: boolean | Expression<boolean>;
    };
  };
};

export type GoogleDriveV2FileShareNode = {
  type: 'n8n-nodes-base.googleDrive';
  version: 2;
  credentials?: Credentials;
  config: NodeConfig<GoogleDriveV2FileShareParams>;
};