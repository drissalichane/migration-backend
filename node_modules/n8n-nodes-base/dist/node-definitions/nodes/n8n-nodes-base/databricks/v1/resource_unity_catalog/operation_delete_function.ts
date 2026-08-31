/**
 * Databricks Node - Version 1
 * Discriminator: resource=unityCatalog, operation=deleteFunction
 */


interface Credentials {
  databricksApi: CredentialReference;
  databricksOAuth2Api: CredentialReference;
}

/** Unified governance for data and AI. <a href="https://docs.databricks.com/data-governance/unity-catalog/index.html" target="_blank">Learn more</a>. */
export type DatabricksV1UnityCatalogDeleteFunctionParams = {
  resource: 'unityCatalog';
  operation: 'deleteFunction';
  authentication?: 'accessToken' | 'oAuth2' | Expression<string>;
/**
 * The catalog to use
 * @default {"mode":"list","value":""}
 */
    catalogName?: { __rl: true; mode: 'list' | 'string'; value: string; cachedResultName?: string };
/**
 * The schema to use
 * @default {"mode":"list","value":""}
 */
    schemaName?: { __rl: true; mode: 'list' | 'string'; value: string; cachedResultName?: string };
/**
 * The function to access
 * @default {"mode":"list","value":""}
 */
    fullName?: { __rl: true; mode: 'list' | 'string'; value: string; cachedResultName?: string };
};

export type DatabricksV1UnityCatalogDeleteFunctionNode = {
  type: 'n8n-nodes-base.databricks';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<DatabricksV1UnityCatalogDeleteFunctionParams>;
};