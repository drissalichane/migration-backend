/**
 * Google Drive Node - Version 1
 * Discriminator: resource=file, operation=list
 */


interface Credentials {
  googleApi: CredentialReference;
  googleDriveOAuth2Api: CredentialReference;
}

/** List files and folders */
export type GoogleDriveV1FileListParams = {
  resource: 'file';
  operation: 'list';
/**
 * Authentication
 * @default serviceAccount
 */
    authentication?: 'serviceAccount' | 'oAuth2' | Expression<string>;
/**
 * Whether a query string should be used to filter results
 * @default false
 */
    useQueryString?: boolean | Expression<boolean>;
/**
 * Query to use to return only specific files
 * @displayOptions.show { useQueryString: [true] }
 */
    queryString?: string | Expression<string> | PlaceholderValue;
/**
 * Max number of results to return
 * @default 50
 */
    limit?: number | Expression<number>;
/**
 * Filters to use to return only specific files
 * @displayOptions.show { useQueryString: [false] }
 * @default {}
 */
    queryFilters?: {
        /** Name
     */
    name?: Array<{
      /** Operation
       * @default contains
       */
      operation?: 'contains' | 'is' | 'isNot';
      /** The value for operation
       */
      value?: string | Expression<string> | PlaceholderValue;
    }>;
        /** Mime Type
     */
    mimeType?: Array<{
      /** The Mime-Type of the files to return
       * @default application/vnd.google-apps.file
       */
      mimeType?: 'application/vnd.google-apps.drive-sdk' | 'application/vnd.google-apps.audio' | 'custom' | 'application/vnd.google-apps.script' | 'application/vnd.google-apps.document' | 'application/vnd.google-apps.drawing' | 'application/vnd.google-apps.file' | 'application/vnd.google-apps.folder' | 'application/vnd.google-apps.form' | 'application/vnd.google-apps.fusiontable' | 'application/vnd.google-apps.map' | 'application/vnd.google-apps.spreadsheet' | 'application/vnd.google-apps.site' | 'application/vnd.google-apps.presentation' | 'application/vnd.google-apps.photo' | 'application/vnd.google-apps.unknown' | 'application/vnd.google-apps.video' | Expression<string>;
      /** Custom Mime Type
       * @displayOptions.show { mimeType: ["custom"] }
       */
      customMimeType?: string | Expression<string> | PlaceholderValue;
    }>;
  };
/**
 * Options
 * @default {}
 */
    options?: {
    /** A plain text custom message to include in the notification email
     * @displayOptions.show { /operation: ["share"] }
     */
    emailMessage?: string | Expression<string> | PlaceholderValue;
    /** Whether to opt in to API behavior that aims for all items to have exactly one parent. This parameter only takes effect if the item is not in a shared drive.
     * @displayOptions.show { /operation: ["share"] }
     * @default false
     */
    enforceSingleParent?: boolean | Expression<boolean>;
    /** The fields to return
     * @default []
     */
    fields?: Array<'*' | 'explicitlyTrashed' | 'exportLinks' | 'hasThumbnail' | 'iconLink' | 'id' | 'kind' | 'mimeType' | 'name' | 'permissions' | 'shared' | 'spaces' | 'starred' | 'thumbnailLink' | 'trashed' | 'version' | 'webViewLink'>;
    /** &lt;p&gt;This parameter only takes effect if the item is not in a shared drive and the request is attempting to transfer the ownership of the item.&lt;/p&gt;&lt;p&gt;When set to true, the item is moved to the new owner's My Drive root folder and all prior parents removed.&lt;/p&gt;
     * @displayOptions.show { /operation: ["share"] }
     * @default false
     */
    moveToNewOwnersRoot?: boolean | Expression<boolean>;
    /** Whether to send a notification email when sharing to users or groups
     * @displayOptions.show { /operation: ["share"] }
     * @default false
     */
    sendNotificationEmail?: boolean | Expression<boolean>;
    /** Whether the requesting application supports both My Drives and shared drives
     * @displayOptions.show { /operation: ["share"] }
     * @default false
     */
    supportsAllDrives?: boolean | Expression<boolean>;
    /** Whether to transfer ownership to the specified user and downgrade the current owner to a writer
     * @displayOptions.show { /operation: ["share"] }
     * @default false
     */
    transferOwnership?: boolean | Expression<boolean>;
    /** Whether to perform the operation as domain administrator, i.e. if you are an administrator of the domain to which the shared drive belongs, you will be granted access automatically.
     * @displayOptions.show { /operation: ["share"] }
     * @default false
     */
    useDomainAdminAccess?: boolean | Expression<boolean>;
    /** The name the file should be saved as
     * @displayOptions.show { /operation: ["copy"] }
     */
    name?: string | Expression<string> | PlaceholderValue;
    /** The IDs of the parent folders the file/folder should be saved in
     * @displayOptions.show { /operation: ["copy", "create"] }
     * @default []
     */
    parents?: string | Expression<string> | PlaceholderValue;
    /** The spaces to operate on
     * @default []
     */
    spaces?: Array<'*' | 'appDataFolder' | 'drive' | 'photos'>;
    /** The corpora to operate on
     */
    corpora?: 'user' | 'domain' | 'drive' | 'allDrives' | Expression<string>;
    /** ID of the shared drive to search. The driveId parameter must be specified if and only if corpora is set to drive.
     * @displayOptions.show { corpora: ["drive"] }
     */
    driveId?: string | Expression<string> | PlaceholderValue;
  };
};

export type GoogleDriveV1FileListNode = {
  type: 'n8n-nodes-base.googleDrive';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<GoogleDriveV1FileListParams>;
};