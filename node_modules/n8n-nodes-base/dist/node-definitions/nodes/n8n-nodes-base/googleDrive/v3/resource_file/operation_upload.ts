/**
 * Google Drive Node - Version 3
 * Discriminator: resource=file, operation=upload
 */


interface Credentials {
  googleApi: CredentialReference;
  googleDriveOAuth2Api: CredentialReference;
}

/** Upload an existing file to Google Drive */
export type GoogleDriveV3FileUploadParams = {
  resource: 'file';
  operation: 'upload';
  authentication?: 'oAuth2' | 'serviceAccount' | Expression<string>;
/**
 * Find the name of input field containing the binary data to update the file in the Input panel on the left, in the Binary tab
 * @hint The name of the input field containing the binary file data to update the file
 * @default data
 */
    inputDataFieldName?: string | Expression<string> | PlaceholderValue;
/**
 * If not specified, the original file name will be used
 */
    name?: string | Expression<string> | PlaceholderValue;
/**
 * The drive where to upload the file
 * @default {"mode":"list","value":"My Drive"}
 */
    driveId?: { __rl: true; mode: 'list' | 'url' | 'id'; value: string; cachedResultName?: string };
/**
 * The folder where to upload the file
 * @default {"mode":"list","value":"root","cachedResultName":"/ (Root folder)"}
 */
    folderId?: { __rl: true; mode: 'list' | 'url' | 'id'; value: string; cachedResultName?: string };
/**
 * Options
 * @default {}
 */
    options?: {
    /** A collection of arbitrary key-value pairs which are private to the requesting app
     * @default {}
     */
    appPropertiesUi?: {
        /** APP Property
     */
    appPropertyValues?: Array<{
      /** Name of the key to add
       */
      key?: string | Expression<string> | PlaceholderValue;
      /** Value to set for the key
       */
      value?: string | Expression<string> | PlaceholderValue;
    }>;
  };
    /** A collection of arbitrary key-value pairs which are visible to all apps
     * @default {}
     */
    propertiesUi?: {
        /** Property
     */
    propertyValues?: Array<{
      /** Name of the key to add
       */
      key?: string | Expression<string> | PlaceholderValue;
      /** Value to set for the key
       */
      value?: string | Expression<string> | PlaceholderValue;
    }>;
  };
    /** Whether to set the 'keepForever' field in the new head revision. This is only applicable to files with binary content in Google Drive. Only 200 revisions for the file can be kept forever. If the limit is reached, try deleting pinned revisions.
     * @default false
     */
    keepRevisionForever?: boolean | Expression<boolean>;
    /** A language hint for OCR processing during image import (ISO 639-1 code)
     */
    ocrLanguage?: string | Expression<string> | PlaceholderValue;
    /** Whether to use the uploaded content as indexable text
     * @default false
     */
    useContentAsIndexableText?: boolean | Expression<boolean>;
    /** Whether to return a simplified version of the response instead of all fields
     * @default true
     */
    simplifyOutput?: boolean | Expression<boolean>;
  };
};

export type GoogleDriveV3FileUploadOutput = {
  capabilities?: {
    canAcceptOwnership?: boolean;
    canAddChildren?: boolean;
    canAddMyDriveParent?: boolean;
    canChangeCopyRequiresWriterPermission?: boolean;
    canChangeItemDownloadRestriction?: boolean;
    canChangeSecurityUpdateEnabled?: boolean;
    canChangeViewersCanCopyContent?: boolean;
    canComment?: boolean;
    canCopy?: boolean;
    canDelete?: boolean;
    canDisableInheritedPermissions?: boolean;
    canDownload?: boolean;
    canEdit?: boolean;
    canEnableInheritedPermissions?: boolean;
    canListChildren?: boolean;
    canModifyContent?: boolean;
    canModifyContentRestriction?: boolean;
    canModifyEditorContentRestriction?: boolean;
    canModifyLabels?: boolean;
    canModifyOwnerContentRestriction?: boolean;
    canMoveChildrenWithinDrive?: boolean;
    canMoveItemIntoTeamDrive?: boolean;
    canMoveItemOutOfDrive?: boolean;
    canMoveItemWithinDrive?: boolean;
    canReadLabels?: boolean;
    canReadRevisions?: boolean;
    canRemoveChildren?: boolean;
    canRemoveContentRestriction?: boolean;
    canRemoveMyDriveParent?: boolean;
    canRename?: boolean;
    canShare?: boolean;
    canTrash?: boolean;
    canUntrash?: boolean;
  };
  copyRequiresWriterPermission?: boolean;
  createdTime?: string;
  downloadRestrictions?: {
    effectiveDownloadRestrictionWithContext?: {
      restrictedForReaders?: boolean;
      restrictedForWriters?: boolean;
    };
    itemDownloadRestriction?: {
      restrictedForReaders?: boolean;
      restrictedForWriters?: boolean;
    };
  };
  explicitlyTrashed?: boolean;
  fileExtension?: string;
  fullFileExtension?: string;
  hasThumbnail?: boolean;
  headRevisionId?: string;
  iconLink?: string;
  id?: string;
  imageMediaMetadata?: {
    height?: number;
    rotation?: number;
    width?: number;
  };
  inheritedPermissionsDisabled?: boolean;
  isAppAuthorized?: boolean;
  kind?: string;
  lastModifyingUser?: {
    displayName?: string;
    emailAddress?: string;
    kind?: string;
    me?: boolean;
    permissionId?: string;
    photoLink?: string;
  };
  linkShareMetadata?: {
    securityUpdateEligible?: boolean;
    securityUpdateEnabled?: boolean;
  };
  md5Checksum?: string;
  mimeType?: string;
  modifiedByMe?: boolean;
  modifiedByMeTime?: string;
  modifiedTime?: string;
  name?: string;
  originalFilename?: string;
  ownedByMe?: boolean;
  owners?: Array<{
    displayName?: string;
    emailAddress?: string;
    kind?: string;
    me?: boolean;
    permissionId?: string;
    photoLink?: string;
  }>;
  parents?: Array<string>;
  permissionIds?: Array<string>;
  permissions?: Array<{
    deleted?: boolean;
    displayName?: string;
    emailAddress?: string;
    id?: string;
    kind?: string;
    pendingOwner?: boolean;
    role?: string;
    type?: string;
  }>;
  quotaBytesUsed?: string;
  sha1Checksum?: string;
  sha256Checksum?: string;
  shared?: boolean;
  size?: string;
  spaces?: Array<string>;
  starred?: boolean;
  thumbnailLink?: string;
  thumbnailVersion?: string;
  trashed?: boolean;
  version?: string;
  viewedByMe?: boolean;
  viewersCanCopyContent?: boolean;
  webContentLink?: string;
  webViewLink?: string;
  writersCanShare?: boolean;
};

export type GoogleDriveV3FileUploadNode = {
  type: 'n8n-nodes-base.googleDrive';
  version: 3;
  credentials?: Credentials;
  config: NodeConfig<GoogleDriveV3FileUploadParams>;
  output?: Items<GoogleDriveV3FileUploadOutput>;
};