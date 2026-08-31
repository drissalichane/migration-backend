/**
 * Databricks Node - Version 1
 * Discriminator: resource=unityCatalog, operation=getFunction
 */


interface Credentials {
  databricksApi: CredentialReference;
  databricksOAuth2Api: CredentialReference;
}

/** Unified governance for data and AI. <a href="https://docs.databricks.com/data-governance/unity-catalog/index.html" target="_blank">Learn more</a>. */
export type DatabricksV1UnityCatalogGetFunctionParams = {
  resource: 'unityCatalog';
  operation: 'getFunction';
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

export type DatabricksV1UnityCatalogGetFunctionNode = {
  type: 'n8n-nodes-base.databricks';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<DatabricksV1UnityCatalogGetFunctionParams>;
};