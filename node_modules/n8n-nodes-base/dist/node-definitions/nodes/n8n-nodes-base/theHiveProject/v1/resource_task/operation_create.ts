/**
 * TheHive 5 Node - Version 1
 * Discriminator: resource=task, operation=create
 */


interface Credentials {
  theHiveProjectApi: CredentialReference;
}

export type TheHiveProjectV1TaskCreateParams = {
  resource: 'task';
  operation: 'create';
/**
 * Case
 * @default {"mode":"list","value":""}
 */
    caseId?: { __rl: true; mode: 'list' | 'url' | 'id'; value: string; cachedResultName?: string };
/**
 * Fields
 * @default {"mappingMode":"defineBelow","value":null}
 */
    taskFields?: unknown;
};

export type TheHiveProjectV1TaskCreateNode = {
  type: 'n8n-nodes-base.theHiveProject';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<TheHiveProjectV1TaskCreateParams>;
};