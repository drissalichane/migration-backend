/**
 * Google Drive Node - Version 2
 * Discriminator: resource=file, operation=list
 */


interface Credentials {
  googleApi: CredentialReference;
  googleDriveOAuth2Api: CredentialReference;
}

/** List files and folders */
export type GoogleDriveV2FileListParams = {
  resource: 'file';
  operation: 'list';
/**
 * Authentication
 * @default oAuth2
 */
    authentication?: 'oAuth2' | 'serviceAccount' | Expression<string>;
/**
 * Whether a query string should be used to filter results
 * @default false
 */
    useQueryString?: boolean | Expression<boolean>;
/**
 * Query to use to return only specific files
 * @displayOptions.show { useQueryString: [true] }
 */
    queryString?: string | Expression<string> | PlaceholderValue;
/**
 * Max number of results to return
 * @default 50
 */
    limit?: number | Expression<number>;
/**
 * Filters to use to return only specific files
 * @displayOptions.show { useQueryString: [false] }
 * @default {}
 */
    queryFilters?: {
        /** Name
     */
    name?: Array<{
      /** Operation
       * @default contains
       */
      operation?: 'contains' | 'is' | 'isNot';
      /** The value for operation
       */
      value?: string | Expression<string> | PlaceholderValue;
    }>;
        /** Mime Type
     */
    mimeType?: Array<{
      /** The Mime-Type of the files to return
       * @default application/vnd.google-apps.file
       */
      mimeType?: 'application/vnd.google-apps.drive-sdk' | 'application/vnd.google-apps.audio' | 'custom' | 'application/vnd.google-apps.script' | 'application/vnd.google-apps.document' | 'application/vnd.google-apps.drawing' | 'application/vnd.google-apps.file' | 'application/vnd.google-apps.folder' | 'application/vnd.google-apps.form' | 'application/vnd.google-apps.fusiontable' | 'application/vnd.google-apps.map' | 'application/vnd.google-apps.spreadsheet' | 'application/vnd.google-apps.site' | 'application/vnd.google-apps.presentation' | 'application/vnd.google-apps.photo' | 'application/vnd.google-apps.unknown' | 'application/vnd.google-apps.video' | Expression<string>;
      /** Custom Mime Type
       * @displayOptions.show { mimeType: ["custom"] }
       */
      customMimeType?: string | Expression<string> | PlaceholderValue;
    }>;
  };
};

export type GoogleDriveV2FileListOutput = {
  id?: string;
  name?: string;
};

export type GoogleDriveV2FileListNode = {
  type: 'n8n-nodes-base.googleDrive';
  version: 2;
  credentials?: Credentials;
  config: NodeConfig<GoogleDriveV2FileListParams>;
  output?: Items<GoogleDriveV2FileListOutput>;
};