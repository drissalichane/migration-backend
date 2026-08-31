/**
 * Google Drive Node - Version 1
 * Discriminator: resource=folder, operation=delete
 */


interface Credentials {
  googleApi: CredentialReference;
  googleDriveOAuth2Api: CredentialReference;
}

/** Delete a file */
export type GoogleDriveV1FolderDeleteParams = {
  resource: 'folder';
  operation: 'delete';
/**
 * Authentication
 * @default serviceAccount
 */
    authentication?: 'serviceAccount' | 'oAuth2' | Expression<string>;
/**
 * The ID of the folder
 * @default {"mode":"list","value":""}
 */
    fileId?: { __rl: true; mode: 'list' | 'url' | 'id'; value: string; cachedResultName?: string };
/**
 * Options
 * @displayOptions.show { /operation: ["copy", "list", "share", "create"] }
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
     * @displayOptions.show { /operation: ["list", "copy"] }
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
     * @displayOptions.show { /operation: ["copy"], /resource: ["file"] }
     */
    name?: string | Expression<string> | PlaceholderValue;
    /** The IDs of the parent folders the file/folder should be saved in
     * @displayOptions.show { /operation: ["copy", "create"] }
     * @default []
     */
    parents?: string | Expression<string> | PlaceholderValue;
    /** The spaces to operate on
     * @displayOptions.show { /operation: ["list"], /resource: ["file"] }
     * @default []
     */
    spaces?: Array<'*' | 'appDataFolder' | 'drive' | 'photos'>;
    /** The corpora to operate on
     * @displayOptions.show { /operation: ["list"], /resource: ["file"] }
     */
    corpora?: 'user' | 'domain' | 'drive' | 'allDrives' | Expression<string>;
    /** ID of the shared drive to search. The driveId parameter must be specified if and only if corpora is set to drive.
     * @displayOptions.show { /operation: ["list"], /resource: ["file"], corpora: ["drive"] }
     */
    driveId?: string | Expression<string> | PlaceholderValue;
  };
};

export type GoogleDriveV1FolderDeleteNode = {
  type: 'n8n-nodes-base.googleDrive';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<GoogleDriveV1FolderDeleteParams>;
};