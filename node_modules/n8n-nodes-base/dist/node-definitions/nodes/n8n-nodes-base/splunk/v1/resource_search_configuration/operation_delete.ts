/**
 * Splunk Node - Version 1
 * Discriminator: resource=searchConfiguration, operation=delete
 */


interface Credentials {
  splunkApi: CredentialReference;
}

/** Delete a search configuration */
export type SplunkV1SearchConfigurationDeleteParams = {
  resource: 'searchConfiguration';
  operation: 'delete';
/**
 * ID of the search configuration to delete
 */
    searchConfigurationId?: string | Expression<string> | PlaceholderValue;
};

export type SplunkV1SearchConfigurationDeleteNode = {
  type: 'n8n-nodes-base.splunk';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<SplunkV1SearchConfigurationDeleteParams>;
};