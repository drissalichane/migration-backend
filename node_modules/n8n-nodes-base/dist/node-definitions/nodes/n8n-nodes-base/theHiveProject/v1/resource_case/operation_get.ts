/**
 * TheHive 5 Node - Version 1
 * Discriminator: resource=case, operation=get
 */


interface Credentials {
  theHiveProjectApi: CredentialReference;
}

export type TheHiveProjectV1CaseGetParams = {
  resource: 'case';
  operation: 'get';
/**
 * Case
 * @default {"mode":"list","value":""}
 */
    caseId?: { __rl: true; mode: 'list' | 'url' | 'id'; value: string; cachedResultName?: string };
};

export type TheHiveProjectV1CaseGetNode = {
  type: 'n8n-nodes-base.theHiveProject';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<TheHiveProjectV1CaseGetParams>;
};