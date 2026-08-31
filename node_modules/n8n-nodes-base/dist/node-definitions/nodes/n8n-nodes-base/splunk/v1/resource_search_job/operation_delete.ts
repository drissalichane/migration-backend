/**
 * Splunk Node - Version 1
 * Discriminator: resource=searchJob, operation=delete
 */


interface Credentials {
  splunkApi: CredentialReference;
}

/** Delete a search configuration */
export type SplunkV1SearchJobDeleteParams = {
  resource: 'searchJob';
  operation: 'delete';
/**
 * ID of the search job to delete
 */
    searchJobId?: string | Expression<string> | PlaceholderValue;
};

export type SplunkV1SearchJobDeleteNode = {
  type: 'n8n-nodes-base.splunk';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<SplunkV1SearchJobDeleteParams>;
};