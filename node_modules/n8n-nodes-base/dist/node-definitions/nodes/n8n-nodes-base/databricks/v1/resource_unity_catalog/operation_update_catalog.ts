/**
 * Databricks Node - Version 1
 * Discriminator: resource=unityCatalog, operation=updateCatalog
 */


interface Credentials {
  databricksApi: CredentialReference;
  databricksOAuth2Api: CredentialReference;
}

/** Unified governance for data and AI. <a href="https://docs.databricks.com/data-governance/unity-catalog/index.html" target="_blank">Learn more</a>. */
export type DatabricksV1UnityCatalogUpdateCatalogParams = {
  resource: 'unityCatalog';
  operation: 'updateCatalog';
  authentication?: 'accessToken' | 'oAuth2' | Expression<string>;
/**
 * The catalog to use
 * @default {"mode":"list","value":""}
 */
    catalogName?: { __rl: true; mode: 'list' | 'string'; value: string; cachedResultName?: string };
/**
 * Optional comment or description
 */
    comment?: string | Expression<string> | PlaceholderValue;
};

export type DatabricksV1UnityCatalogUpdateCatalogNode = {
  type: 'n8n-nodes-base.databricks';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<DatabricksV1UnityCatalogUpdateCatalogParams>;
};