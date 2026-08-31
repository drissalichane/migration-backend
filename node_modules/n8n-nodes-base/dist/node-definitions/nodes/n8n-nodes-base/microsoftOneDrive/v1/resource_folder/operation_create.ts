/**
 * Microsoft OneDrive Node - Version 1
 * Discriminator: resource=folder, operation=create
 */


interface Credentials {
  microsoftOneDriveOAuth2Api: CredentialReference;
}

/** Create a folder */
export type MicrosoftOneDriveV1FolderCreateParams = {
  resource: 'folder';
  operation: 'create';
/**
 * The name or path of the folder
 */
    name?: string | Expression<string> | PlaceholderValue;
/**
 * Options
 * @default {}
 */
    options?: {
    /** ID of the folder you want to crate the new folder in
     */
    parentFolderId?: string | Expression<string> | PlaceholderValue;
  };
};

export type MicrosoftOneDriveV1FolderCreateOutput = {
  '@odata.context'?: string;
  '@odata.etag'?: string;
  commentSettings?: {
    commentingDisabled?: {
      isDisabled?: boolean;
    };
  };
  createdBy?: {
    application?: {
      displayName?: string;
      id?: string;
    };
    user?: {
      displayName?: string;
      email?: string;
      id?: string;
    };
  };
  createdDateTime?: string;
  cTag?: string;
  eTag?: string;
  fileSystemInfo?: {
    createdDateTime?: string;
    lastModifiedDateTime?: string;
  };
  folder?: {
    childCount?: number;
    view?: {
      sortBy?: string;
      sortOrder?: string;
      viewType?: string;
    };
  };
  id?: string;
  lastModifiedBy?: {
    application?: {
      displayName?: string;
      id?: string;
    };
    user?: {
      displayName?: string;
      email?: string;
      id?: string;
    };
  };
  lastModifiedDateTime?: string;
  name?: string;
  parentReference?: {
    driveId?: string;
    driveType?: string;
    id?: string;
    path?: string;
    sharepointIds?: {
      listId?: string;
      listItemUniqueId?: string;
      siteId?: string;
      siteUrl?: string;
      tenantId?: string;
      webId?: string;
    };
  };
  size?: number;
  webUrl?: string;
};

export type MicrosoftOneDriveV1FolderCreateNode = {
  type: 'n8n-nodes-base.microsoftOneDrive';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<MicrosoftOneDriveV1FolderCreateParams>;
  output?: Items<MicrosoftOneDriveV1FolderCreateOutput>;
};