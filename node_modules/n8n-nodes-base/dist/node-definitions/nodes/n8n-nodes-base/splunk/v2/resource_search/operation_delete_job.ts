/**
 * Splunk Node - Version 2
 * Discriminator: resource=search, operation=deleteJob
 */


interface Credentials {
  splunkApi: CredentialReference;
}

/** Delete a search job */
export type SplunkV2SearchDeleteJobParams = {
  resource: 'search';
  operation: 'deleteJob';
/**
 * Search Job
 * @default {"mode":"list","value":""}
 */
    searchJobId?: { __rl: true; mode: 'list' | 'id'; value: string; cachedResultName?: string };
};

export type SplunkV2SearchDeleteJobNode = {
  type: 'n8n-nodes-base.splunk';
  version: 2;
  credentials?: Credentials;
  config: NodeConfig<SplunkV2SearchDeleteJobParams>;
};