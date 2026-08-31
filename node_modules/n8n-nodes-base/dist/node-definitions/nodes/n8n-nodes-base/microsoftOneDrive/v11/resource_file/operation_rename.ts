/**
 * Microsoft OneDrive Node - Version 1.1
 * Discriminator: resource=file, operation=rename
 */


interface Credentials {
  microsoftOneDriveOAuth2Api: CredentialReference;
}

/** Rename a file */
export type MicrosoftOneDriveV11FileRenameParams = {
  resource: 'file';
  operation: 'rename';
/**
 * ID of the file
 */
    itemId?: string | Expression<string> | PlaceholderValue;
/**
 * New name for file
 */
    newName?: string | Expression<string> | PlaceholderValue;
};

export type MicrosoftOneDriveV11FileRenameOutput = {
  '@microsoft.graph.downloadUrl'?: string;
  '@odata.context'?: string;
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
  size?: number;
  webUrl?: string;
};

export type MicrosoftOneDriveV11FileRenameNode = {
  type: 'n8n-nodes-base.microsoftOneDrive';
  version: 1.1;
  credentials?: Credentials;
  config: NodeConfig<MicrosoftOneDriveV11FileRenameParams>;
  output?: Items<MicrosoftOneDriveV11FileRenameOutput>;
};