/**
 * Microsoft OneDrive Node - Version 1
 * Discriminator: resource=folder, operation=search
 */


interface Credentials {
  microsoftOneDriveOAuth2Api: CredentialReference;
}

/** Search a file */
export type MicrosoftOneDriveV1FolderSearchParams = {
  resource: 'folder';
  operation: 'search';
/**
 * The query text used to search for items. Values may be matched across several fields including filename, metadata, and file content.
 */
    query?: string | Expression<string> | PlaceholderValue;
};

export type MicrosoftOneDriveV1FolderSearchOutput = {
  createdBy?: {
    user?: {
      displayName?: string;
      email?: string;
    };
  };
  createdDateTime?: string;
  fileSystemInfo?: {
    createdDateTime?: string;
    lastModifiedDateTime?: string;
  };
  folder?: {
    childCount?: number;
  };
  id?: string;
  lastModifiedBy?: {
    user?: {
      displayName?: string;
      email?: string;
    };
  };
  lastModifiedDateTime?: string;
  name?: string;
  parentReference?: {
    driveId?: string;
    driveType?: string;
    id?: string;
    siteId?: string;
  };
  size?: number;
  webUrl?: string;
};

export type MicrosoftOneDriveV1FolderSearchNode = {
  type: 'n8n-nodes-base.microsoftOneDrive';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<MicrosoftOneDriveV1FolderSearchParams>;
  output?: Items<MicrosoftOneDriveV1FolderSearchOutput>;
};