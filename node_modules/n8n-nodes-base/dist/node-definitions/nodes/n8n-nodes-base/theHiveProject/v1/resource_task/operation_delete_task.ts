/**
 * TheHive 5 Node - Version 1
 * Discriminator: resource=task, operation=deleteTask
 */


interface Credentials {
  theHiveProjectApi: CredentialReference;
}

export type TheHiveProjectV1TaskDeleteTaskParams = {
  resource: 'task';
  operation: 'deleteTask';
/**
 * Task
 * @default {"mode":"list","value":""}
 */
    taskId?: { __rl: true; mode: 'list' | 'id'; value: string; cachedResultName?: string };
};

export type TheHiveProjectV1TaskDeleteTaskNode = {
  type: 'n8n-nodes-base.theHiveProject';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<TheHiveProjectV1TaskDeleteTaskParams>;
};