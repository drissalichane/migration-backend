/**
 * Databricks Node - Version 1
 * Discriminator: resource=files, operation=deleteDirectory
 */


interface Credentials {
  databricksApi: CredentialReference;
  databricksOAuth2Api: CredentialReference;
}

/** Manage files in Unity Catalog volumes. <a href="https://docs.databricks.com/api/workspace/files" target="_blank">Learn more</a>. */
export type DatabricksV1FilesDeleteDirectoryParams = {
  resource: 'files';
  operation: 'deleteDirectory';
  authentication?: 'accessToken' | 'oAuth2' | Expression<string>;
/**
 * Full path to the volume in format: catalog.schema.volume
 */
    volumePath?: string | Expression<string> | PlaceholderValue;
/**
 * Path to directory within the volume (e.g. "folder1" or "folder1/subfolder"). Do not include leading slash.
 */
    directoryPath?: string | Expression<string> | PlaceholderValue;
};

export type DatabricksV1FilesDeleteDirectoryNode = {
  type: 'n8n-nodes-base.databricks';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<DatabricksV1FilesDeleteDirectoryParams>;
};