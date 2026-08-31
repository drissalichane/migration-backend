/**
 * Microsoft Outlook Node - Version 2
 * Discriminator: resource=folder, operation=update
 */


interface Credentials {
  microsoftOutlookOAuth2Api: CredentialReference;
}

/** Update a calendar */
export type MicrosoftOutlookV2FolderUpdateParams = {
  resource: 'folder';
  operation: 'update';
/**
 * Folder
 * @default {"mode":"list","value":""}
 */
    folderId?: { __rl: true; mode: 'list' | 'url' | 'id'; value: string; cachedResultName?: string };
/**
 * Name of the folder
 */
    displayName?: string | Expression<string> | PlaceholderValue;
};

export type MicrosoftOutlookV2FolderUpdateNode = {
  type: 'n8n-nodes-base.microsoftOutlook';
  version: 2;
  credentials?: Credentials;
  config: NodeConfig<MicrosoftOutlookV2FolderUpdateParams>;
};