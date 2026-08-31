/**
 * TheHive 5 Node - Version 1
 * Discriminator: resource=alert, operation=merge
 */


interface Credentials {
  theHiveProjectApi: CredentialReference;
}

export type TheHiveProjectV1AlertMergeParams = {
  resource: 'alert';
  operation: 'merge';
/**
 * Alert
 * @default {"mode":"list","value":""}
 */
    alertId?: { __rl: true; mode: 'list' | 'url' | 'id'; value: string; cachedResultName?: string };
/**
 * Case
 * @default {"mode":"list","value":""}
 */
    caseId?: { __rl: true; mode: 'list' | 'url' | 'id'; value: string; cachedResultName?: string };
};

export type TheHiveProjectV1AlertMergeNode = {
  type: 'n8n-nodes-base.theHiveProject';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<TheHiveProjectV1AlertMergeParams>;
};