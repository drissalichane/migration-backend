/**
 * Microsoft OneDrive Node - Version 1
 * Discriminator: resource=folder, operation=getChildren
 */


interface Credentials {
  microsoftOneDriveOAuth2Api: CredentialReference;
}

/** Get items inside a folder */
export type MicrosoftOneDriveV1FolderGetChildrenParams = {
  resource: 'folder';
  operation: 'getChildren';
/**
 * Folder ID
 */
    folderId?: string | Expression<string> | PlaceholderValue;
};

export type MicrosoftOneDriveV1FolderGetChildrenOutput = {
  '@microsoft.graph.downloadUrl'?: string;
  createdBy?: {
    user?: {
      displayName?: string;
      email?: string;
      id?: string;
    };
  };
  createdDateTime?: string;
  cTag?: string;
  eTag?: string;
  file?: {
    hashes?: {
      quickXorHash?: string;
    };
    mimeType?: string;
  };
  fileSystemInfo?: {
    createdDateTime?: string;
    lastModifiedDateTime?: string;
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
    name?: string;
    path?: string;
    siteId?: string;
  };
  shared?: {
    scope?: string;
  };
  size?: number;
  webUrl?: string;
};

export type MicrosoftOneDriveV1FolderGetChildrenNode = {
  type: 'n8n-nodes-base.microsoftOneDrive';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<MicrosoftOneDriveV1FolderGetChildrenParams>;
  output?: Items<MicrosoftOneDriveV1FolderGetChildrenOutput>;
};