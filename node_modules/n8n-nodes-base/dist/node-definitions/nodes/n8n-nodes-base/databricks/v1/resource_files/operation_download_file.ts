/**
 * Databricks Node - Version 1
 * Discriminator: resource=files, operation=downloadFile
 */


interface Credentials {
  databricksApi: CredentialReference;
  databricksOAuth2Api: CredentialReference;
}

/** Manage files in Unity Catalog volumes. <a href="https://docs.databricks.com/api/workspace/files" target="_blank">Learn more</a>. */
export type DatabricksV1FilesDownloadFileParams = {
  resource: 'files';
  operation: 'downloadFile';
  authentication?: 'accessToken' | 'oAuth2' | Expression<string>;
/**
 * Full path to the volume in format: catalog.schema.volume
 */
    volumePath?: string | Expression<string> | PlaceholderValue;
/**
 * Path to the file within the volume (e.g. "folder/file.txt" or "file.txt"). Do not include leading slash.
 */
    filePath?: string | Expression<string> | PlaceholderValue;
};

export type DatabricksV1FilesDownloadFileNode = {
  type: 'n8n-nodes-base.databricks';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<DatabricksV1FilesDownloadFileParams>;
};