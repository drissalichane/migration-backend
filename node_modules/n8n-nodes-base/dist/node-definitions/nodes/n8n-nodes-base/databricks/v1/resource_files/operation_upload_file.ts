/**
 * Databricks Node - Version 1
 * Discriminator: resource=files, operation=uploadFile
 */


interface Credentials {
  databricksApi: CredentialReference;
  databricksOAuth2Api: CredentialReference;
}

/** Manage files in Unity Catalog volumes. <a href="https://docs.databricks.com/api/workspace/files" target="_blank">Learn more</a>. */
export type DatabricksV1FilesUploadFileParams = {
  resource: 'files';
  operation: 'uploadFile';
  authentication?: 'accessToken' | 'oAuth2' | Expression<string>;
/**
 * Full path to the volume in format: catalog.schema.volume
 */
    volumePath?: string | Expression<string> | PlaceholderValue;
/**
 * Path to the file within the volume (e.g. "folder/file.txt" or "file.txt"). Do not include leading slash.
 */
    filePath?: string | Expression<string> | PlaceholderValue;
/**
 * Name of the field from input that contains the binary data to be uploaded
 * @default data
 */
    dataFieldName?: string | Expression<string> | PlaceholderValue;
/**
 * Additional Fields
 * @default {}
 */
    additionalFields?: {
    /** Number of files to return per page
     * @displayOptions.show { /operation: ["listDirectory"] }
     * @default 1000
     */
    pageSize?: number | Expression<number>;
    /** Token for the next page of results
     * @displayOptions.show { /operation: ["listDirectory"] }
     */
    pageToken?: string | Expression<string> | PlaceholderValue;
    /** Whether to overwrite an existing file
     * @default false
     */
    overwrite?: boolean | Expression<boolean>;
  };
};

export type DatabricksV1FilesUploadFileNode = {
  type: 'n8n-nodes-base.databricks';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<DatabricksV1FilesUploadFileParams>;
};