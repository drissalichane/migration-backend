/**
 * Microsoft OneDrive Node - Version 1.1
 * Discriminator: resource=folder, operation=share
 */


interface Credentials {
  microsoftOneDriveOAuth2Api: CredentialReference;
}

/** Share a file */
export type MicrosoftOneDriveV11FolderShareParams = {
  resource: 'folder';
  operation: 'share';
/**
 * File ID
 */
    folderId?: string | Expression<string> | PlaceholderValue;
/**
 * The type of sharing link to create
 */
    type?: 'view' | 'edit' | 'embed' | Expression<string>;
/**
 * The type of sharing link to create
 */
    scope?: 'anonymous' | 'organization' | Expression<string>;
};

export type MicrosoftOneDriveV11FolderShareOutput = {
  '@odata.context'?: string;
  hasPassword?: boolean;
  id?: string;
  link?: {
    preventsDownload?: boolean;
    scope?: string;
    type?: string;
    webUrl?: string;
  };
  roles?: Array<string>;
  shareId?: string;
};

export type MicrosoftOneDriveV11FolderShareNode = {
  type: 'n8n-nodes-base.microsoftOneDrive';
  version: 1.1;
  credentials?: Credentials;
  config: NodeConfig<MicrosoftOneDriveV11FolderShareParams>;
  output?: Items<MicrosoftOneDriveV11FolderShareOutput>;
};