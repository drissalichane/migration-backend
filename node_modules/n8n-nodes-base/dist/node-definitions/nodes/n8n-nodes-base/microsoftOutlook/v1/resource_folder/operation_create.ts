/**
 * Microsoft Outlook Node - Version 1
 * Discriminator: resource=folder, operation=create
 */


interface Credentials {
  microsoftOutlookOAuth2Api: CredentialReference;
}

/** Create a new email draft */
export type MicrosoftOutlookV1FolderCreateParams = {
  resource: 'folder';
  operation: 'create';
/**
 * Folder Type
 * @default folder
 */
    folderType?: 'folder' | 'searchFolder' | Expression<string>;
/**
 * Name of the folder
 */
    displayName?: string | Expression<string> | PlaceholderValue;
/**
 * Whether to include child folders in the search
 * @displayOptions.show { folderType: ["searchFolder"] }
 * @default false
 */
    includeNestedFolders?: boolean | Expression<boolean>;
/**
 * The mailbox folders that should be mined
 * @displayOptions.show { folderType: ["searchFolder"] }
 * @default []
 */
    sourceFolderIds?: string | Expression<string> | PlaceholderValue;
/**
 * The OData query to filter the messages
 * @displayOptions.show { folderType: ["searchFolder"] }
 */
    filterQuery?: string | Expression<string> | PlaceholderValue;
};

export type MicrosoftOutlookV1FolderCreateNode = {
  type: 'n8n-nodes-base.microsoftOutlook';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<MicrosoftOutlookV1FolderCreateParams>;
};