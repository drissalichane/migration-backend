/**
 * Microsoft Outlook Node - Version 2
 * Discriminator: resource=folder, operation=create
 */


interface Credentials {
  microsoftOutlookOAuth2Api: CredentialReference;
}

/** Create a new calendar */
export type MicrosoftOutlookV2FolderCreateParams = {
  resource: 'folder';
  operation: 'create';
/**
 * Name of the folder
 */
    displayName?: string | Expression<string> | PlaceholderValue;
/**
 * Options
 * @default {}
 */
    options?: {
    /** Parent Folder
     * @default {"mode":"list","value":""}
     */
    folderId?: { __rl: true; mode: 'list' | 'url' | 'id'; value: string; cachedResultName?: string };
  };
};

export type MicrosoftOutlookV2FolderCreateOutput = {
  '@odata.context'?: string;
  childFolderCount?: number;
  displayName?: string;
  id?: string;
  isHidden?: boolean;
  parentFolderId?: string;
  sizeInBytes?: number;
  totalItemCount?: number;
  unreadItemCount?: number;
};

export type MicrosoftOutlookV2FolderCreateNode = {
  type: 'n8n-nodes-base.microsoftOutlook';
  version: 2;
  credentials?: Credentials;
  config: NodeConfig<MicrosoftOutlookV2FolderCreateParams>;
  output?: Items<MicrosoftOutlookV2FolderCreateOutput>;
};