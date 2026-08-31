/**
 * Microsoft OneDrive Node - Version 1.1
 * Discriminator: resource=file, operation=copy
 */


interface Credentials {
  microsoftOneDriveOAuth2Api: CredentialReference;
}

/** Copy a file */
export type MicrosoftOneDriveV11FileCopyParams = {
  resource: 'file';
  operation: 'copy';
/**
 * File ID
 */
    fileId?: string | Expression<string> | PlaceholderValue;
/**
 * Additional Fields
 * @default {}
 */
    additionalFields?: {
    /** The new name for the copy. If this isn't provided, the same name will be used as the original.
     */
    name?: string | Expression<string> | PlaceholderValue;
  };
/**
 * Reference to the parent item the copy will be created in &lt;a href="https://docs.microsoft.com/en-us/onedrive/developer/rest-api/resources/itemreference?view=odsp-graph-online"&gt; Details &lt;/a&gt;
 * @default {}
 */
    parentReference?: {
    /** Identifier of the drive instance that contains the item
     */
    driveId?: string | Expression<string> | PlaceholderValue;
    /** Identifies the type of drive
     */
    driveType?: string | Expression<string> | PlaceholderValue;
    /** Identifier of the item in the drive
     */
    id?: string | Expression<string> | PlaceholderValue;
    /** Identifier of the list
     */
    listId?: string | Expression<string> | PlaceholderValue;
    /** The name of the item being referenced
     */
    name?: string | Expression<string> | PlaceholderValue;
    /** Path that can be used to navigate to the item
     */
    path?: string | Expression<string> | PlaceholderValue;
    /** Identifier for a shared resource that can be accessed via the Shares API
     */
    shareId?: string | Expression<string> | PlaceholderValue;
    /** Identifier of the site
     */
    siteId?: string | Expression<string> | PlaceholderValue;
  };
};

export type MicrosoftOneDriveV11FileCopyOutput = {
  location?: string;
};

export type MicrosoftOneDriveV11FileCopyNode = {
  type: 'n8n-nodes-base.microsoftOneDrive';
  version: 1.1;
  credentials?: Credentials;
  config: NodeConfig<MicrosoftOneDriveV11FileCopyParams>;
  output?: Items<MicrosoftOneDriveV11FileCopyOutput>;
};