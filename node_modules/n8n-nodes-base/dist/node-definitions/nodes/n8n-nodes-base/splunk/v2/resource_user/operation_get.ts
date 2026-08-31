/**
 * Splunk Node - Version 2
 * Discriminator: resource=user, operation=get
 */


interface Credentials {
  splunkApi: CredentialReference;
}

/** Retrieve a search report */
export type SplunkV2UserGetParams = {
  resource: 'user';
  operation: 'get';
/**
 * User
 * @default {"mode":"list","value":""}
 */
    userId?: { __rl: true; mode: 'list' | 'id'; value: string; cachedResultName?: string };
};

export type SplunkV2UserGetNode = {
  type: 'n8n-nodes-base.splunk';
  version: 2;
  credentials?: Credentials;
  config: NodeConfig<SplunkV2UserGetParams>;
};