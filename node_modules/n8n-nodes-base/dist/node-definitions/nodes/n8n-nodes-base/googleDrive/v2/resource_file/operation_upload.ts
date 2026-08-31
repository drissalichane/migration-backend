/**
 * Google Drive Node - Version 2
 * Discriminator: resource=file, operation=upload
 */


interface Credentials {
  googleApi: CredentialReference;
  googleDriveOAuth2Api: CredentialReference;
}

/** Upload a file */
export type GoogleDriveV2FileUploadParams = {
  resource: 'file';
  operation: 'upload';
/**
 * Authentication
 * @default oAuth2
 */
    authentication?: 'oAuth2' | 'serviceAccount' | Expression<string>;
/**
 * Whether the data to upload should be taken from binary field
 * @default false
 */
    binaryData?: boolean | Expression<boolean>;
/**
 * The text content of the file to upload
 * @displayOptions.show { binaryData: [false] }
 */
    fileContent?: string | Expression<string> | PlaceholderValue;
/**
 * Input Binary Field
 * @hint The name of the input binary field containing the file to be uploaded
 * @displayOptions.show { binaryData: [true] }
 * @default data
 */
    binaryPropertyName?: string | Expression<string> | PlaceholderValue;
/**
 * The name the file should be saved as
 */
    name?: string | Expression<string> | PlaceholderValue;
/**
 * By default the response only contain the ID of the file. If this option gets activated, it will resolve the data automatically.
 * @default false
 */
    resolveData?: boolean | Expression<boolean>;
/**
 * The IDs of the parent folders which contain the file
 * @default []
 */
    parents?: string | Expression<string> | PlaceholderValue;
/**
 * Options
 * @default {}
 */
    options?: {
    /** A collection of arbitrary key-value pairs which are private to the requesting app
     * @default {}
     */
    appPropertiesUi?: {
        /** APP Property
     */
    appPropertyValues?: Array<{
      /** Name of the key to add
       */
      key?: string | Expression<string> | PlaceholderValue;
      /** Value to set for the key
       */
      value?: string | Expression<string> | PlaceholderValue;
    }>;
  };
    /** A collection of arbitrary key-value pairs which are visible to all apps
     * @default {}
     */
    propertiesUi?: {
        /** Property
     */
    propertyValues?: Array<{
      /** Name of the key to add
       */
      key?: string | Expression<string> | PlaceholderValue;
      /** Value to set for the key
       */
      value?: string | Expression<string> | PlaceholderValue;
    }>;
  };
  };
};

export type GoogleDriveV2FileUploadNode = {
  type: 'n8n-nodes-base.googleDrive';
  version: 2;
  credentials?: Credentials;
  config: NodeConfig<GoogleDriveV2FileUploadParams>;
};