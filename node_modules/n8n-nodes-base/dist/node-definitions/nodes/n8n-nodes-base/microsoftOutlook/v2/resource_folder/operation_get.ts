/**
 * Microsoft Outlook Node - Version 2
 * Discriminator: resource=folder, operation=get
 */


interface Credentials {
  microsoftOutlookOAuth2Api: CredentialReference;
}

/** Retrieve a calendar */
export type MicrosoftOutlookV2FolderGetParams = {
  resource: 'folder';
  operation: 'get';
/**
 * Folder
 * @default {"mode":"list","value":""}
 */
    folderId?: { __rl: true; mode: 'list' | 'url' | 'id'; value: string; cachedResultName?: string };
/**
 * Options
 * @default {}
 */
    options?: {
    /** The fields to add to the output
     * @default []
     */
    fields?: Array<'childFolderCount' | 'displayName' | 'isHidden' | 'parentFolderId' | 'totalItemCount' | 'unreadItemCount'>;
  };
};

export type MicrosoftOutlookV2FolderGetOutput = {
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

export type MicrosoftOutlookV2FolderGetNode = {
  type: 'n8n-nodes-base.microsoftOutlook';
  version: 2;
  credentials?: Credentials;
  config: NodeConfig<MicrosoftOutlookV2FolderGetParams>;
  output?: Items<MicrosoftOutlookV2FolderGetOutput>;
};