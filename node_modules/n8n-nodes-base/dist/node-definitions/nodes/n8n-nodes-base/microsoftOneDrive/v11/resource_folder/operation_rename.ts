/**
 * Microsoft OneDrive Node - Version 1.1
 * Discriminator: resource=folder, operation=rename
 */


interface Credentials {
  microsoftOneDriveOAuth2Api: CredentialReference;
}

/** Rename a file */
export type MicrosoftOneDriveV11FolderRenameParams = {
  resource: 'folder';
  operation: 'rename';
/**
 * ID of the folder
 */
    itemId?: string | Expression<string> | PlaceholderValue;
/**
 * New name for folder
 */
    newName?: string | Expression<string> | PlaceholderValue;
};

export type MicrosoftOneDriveV11FolderRenameNode = {
  type: 'n8n-nodes-base.microsoftOneDrive';
  version: 1.1;
  credentials?: Credentials;
  config: NodeConfig<MicrosoftOneDriveV11FolderRenameParams>;
};