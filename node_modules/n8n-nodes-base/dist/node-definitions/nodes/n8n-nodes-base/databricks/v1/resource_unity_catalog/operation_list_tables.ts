/**
 * Databricks Node - Version 1
 * Discriminator: resource=unityCatalog, operation=listTables
 */


interface Credentials {
  databricksApi: CredentialReference;
  databricksOAuth2Api: CredentialReference;
}

/** Unified governance for data and AI. <a href="https://docs.databricks.com/data-governance/unity-catalog/index.html" target="_blank">Learn more</a>. */
export type DatabricksV1UnityCatalogListTablesParams = {
  resource: 'unityCatalog';
  operation: 'listTables';
  authentication?: 'accessToken' | 'oAuth2' | Expression<string>;
/**
 * Filter by catalog (optional)
 * @default {"mode":"list","value":""}
 */
    catalogName?: { __rl: true; mode: 'list' | 'string'; value: string; cachedResultName?: string };
/**
 * Filter by schema (optional, requires catalog)
 * @default {"mode":"list","value":""}
 */
    schemaName?: { __rl: true; mode: 'list' | 'string'; value: string; cachedResultName?: string };
};

export type DatabricksV1UnityCatalogListTablesNode = {
  type: 'n8n-nodes-base.databricks';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<DatabricksV1UnityCatalogListTablesParams>;
};