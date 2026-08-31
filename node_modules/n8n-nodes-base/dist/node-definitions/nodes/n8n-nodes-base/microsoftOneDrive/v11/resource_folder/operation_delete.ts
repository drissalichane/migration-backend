/**
 * Microsoft OneDrive Node - Version 1.1
 * Discriminator: resource=folder, operation=delete
 */


interface Credentials {
  microsoftOneDriveOAuth2Api: CredentialReference;
}

/** Delete a file */
export type MicrosoftOneDriveV11FolderDeleteParams = {
  resource: 'folder';
  operation: 'delete';
/**
 * Folder ID
 */
    folderId?: string | Expression<string> | PlaceholderValue;
};

export type MicrosoftOneDriveV11FolderDeleteNode = {
  type: 'n8n-nodes-base.microsoftOneDrive';
  version: 1.1;
  credentials?: Credentials;
  config: NodeConfig<MicrosoftOneDriveV11FolderDeleteParams>;
};