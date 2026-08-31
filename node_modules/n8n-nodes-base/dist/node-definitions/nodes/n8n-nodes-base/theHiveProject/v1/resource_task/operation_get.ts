/**
 * TheHive 5 Node - Version 1
 * Discriminator: resource=task, operation=get
 */


interface Credentials {
  theHiveProjectApi: CredentialReference;
}

export type TheHiveProjectV1TaskGetParams = {
  resource: 'task';
  operation: 'get';
/**
 * Task
 * @default {"mode":"list","value":""}
 */
    taskId?: { __rl: true; mode: 'list' | 'id'; value: string; cachedResultName?: string };
};

export type TheHiveProjectV1TaskGetNode = {
  type: 'n8n-nodes-base.theHiveProject';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<TheHiveProjectV1TaskGetParams>;
};