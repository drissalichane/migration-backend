/**
 * TheHive 5 Node - Version 1
 * Discriminator: resource=alert, operation=deleteAlert
 */


interface Credentials {
  theHiveProjectApi: CredentialReference;
}

export type TheHiveProjectV1AlertDeleteAlertParams = {
  resource: 'alert';
  operation: 'deleteAlert';
/**
 * Alert
 * @default {"mode":"list","value":""}
 */
    alertId?: { __rl: true; mode: 'list' | 'url' | 'id'; value: string; cachedResultName?: string };
};

export type TheHiveProjectV1AlertDeleteAlertNode = {
  type: 'n8n-nodes-base.theHiveProject';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<TheHiveProjectV1AlertDeleteAlertParams>;
};