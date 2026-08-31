/**
 * TheHive 5 Node - Version 1
 * Discriminator: resource=observable, operation=get
 */


interface Credentials {
  theHiveProjectApi: CredentialReference;
}

export type TheHiveProjectV1ObservableGetParams = {
  resource: 'observable';
  operation: 'get';
/**
 * Observable
 * @default {"mode":"list","value":""}
 */
    observableId?: { __rl: true; mode: 'list' | 'id'; value: string; cachedResultName?: string };
};

export type TheHiveProjectV1ObservableGetNode = {
  type: 'n8n-nodes-base.theHiveProject';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<TheHiveProjectV1ObservableGetParams>;
};