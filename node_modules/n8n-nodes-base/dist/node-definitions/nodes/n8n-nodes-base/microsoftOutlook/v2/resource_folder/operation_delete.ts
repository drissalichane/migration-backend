/**
 * Microsoft Outlook Node - Version 2
 * Discriminator: resource=folder, operation=delete
 */


interface Credentials {
  microsoftOutlookOAuth2Api: CredentialReference;
}

/** Delete a calendar */
export type MicrosoftOutlookV2FolderDeleteParams = {
  resource: 'folder';
  operation: 'delete';
/**
 * Folder
 * @default {"mode":"list","value":""}
 */
    folderId?: { __rl: true; mode: 'list' | 'url' | 'id'; value: string; cachedResultName?: string };
};

export type MicrosoftOutlookV2FolderDeleteNode = {
  type: 'n8n-nodes-base.microsoftOutlook';
  version: 2;
  credentials?: Credentials;
  config: NodeConfig<MicrosoftOutlookV2FolderDeleteParams>;
};