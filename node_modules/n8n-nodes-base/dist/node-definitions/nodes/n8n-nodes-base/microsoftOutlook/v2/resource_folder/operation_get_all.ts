/**
 * Microsoft Outlook Node - Version 2
 * Discriminator: resource=folder, operation=getAll
 */


interface Credentials {
  microsoftOutlookOAuth2Api: CredentialReference;
}

/** List and search calendars */
export type MicrosoftOutlookV2FolderGetAllParams = {
  resource: 'folder';
  operation: 'getAll';
/**
 * Whether to return all results or only up to a given limit
 * @default false
 */
    returnAll?: boolean | Expression<boolean>;
/**
 * Max number of results to return
 * @displayOptions.show { returnAll: [false] }
 * @default 100
 */
    limit?: number | Expression<number>;
/**
 * Filters
 * @default {}
 */
    filters?: {
    /** Filter Query
     * @hint Search query to filter folders. &lt;a href="https://docs.microsoft.com/en-us/graph/query-parameters#filter-parameter"&gt;More info&lt;/a&gt;.
     */
    filter?: string | Expression<string> | PlaceholderValue;
  };
/**
 * Options
 * @default {}
 */
    options?: {
    /** The fields to add to the output
     * @default []
     */
    fields?: Array<'childFolderCount' | 'displayName' | 'isHidden' | 'parentFolderId' | 'totalItemCount' | 'unreadItemCount'>;
    /** Whether to include child folders in the response
     * @default false
     */
    includeChildFolders?: boolean | Expression<boolean>;
    /** The folder you want to search in
     * @default {"mode":"list","value":""}
     */
    folderId?: { __rl: true; mode: 'list' | 'url' | 'id'; value: string; cachedResultName?: string };
  };
};

export type MicrosoftOutlookV2FolderGetAllOutput = {
  childFolderCount?: number;
  displayName?: string;
  id?: string;
  isHidden?: boolean;
  parentFolderId?: string;
  sizeInBytes?: number;
  totalItemCount?: number;
  unreadItemCount?: number;
};

export type MicrosoftOutlookV2FolderGetAllNode = {
  type: 'n8n-nodes-base.microsoftOutlook';
  version: 2;
  credentials?: Credentials;
  config: NodeConfig<MicrosoftOutlookV2FolderGetAllParams>;
  output?: Items<MicrosoftOutlookV2FolderGetAllOutput>;
};