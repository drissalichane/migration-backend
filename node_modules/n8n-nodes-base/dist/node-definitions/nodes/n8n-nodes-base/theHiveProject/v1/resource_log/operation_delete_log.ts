/**
 * TheHive 5 Node - Version 1
 * Discriminator: resource=log, operation=deleteLog
 */


interface Credentials {
  theHiveProjectApi: CredentialReference;
}

export type TheHiveProjectV1LogDeleteLogParams = {
  resource: 'log';
  operation: 'deleteLog';
/**
 * Task Log
 * @default {"mode":"list","value":""}
 */
    logId?: { __rl: true; mode: 'list' | 'id'; value: string; cachedResultName?: string };
};

export type TheHiveProjectV1LogDeleteLogNode = {
  type: 'n8n-nodes-base.theHiveProject';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<TheHiveProjectV1LogDeleteLogParams>;
};