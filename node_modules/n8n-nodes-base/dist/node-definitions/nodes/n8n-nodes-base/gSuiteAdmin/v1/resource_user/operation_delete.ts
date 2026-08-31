/**
 * Google Workspace Admin Node - Version 1
 * Discriminator: resource=user, operation=delete
 */


interface Credentials {
  gSuiteAdminOAuth2Api: CredentialReference;
}

/** Delete a group */
export type GSuiteAdminV1UserDeleteParams = {
  resource: 'user';
  operation: 'delete';
/**
 * Select the user to perform the operation on
 * @default {"mode":"list","value":""}
 */
    userId?: { __rl: true; mode: 'list' | 'userEmail' | 'userId'; value: string; cachedResultName?: string };
};

export type GSuiteAdminV1UserDeleteOutput = {
  deleted?: boolean;
};

export type GSuiteAdminV1UserDeleteNode = {
  type: 'n8n-nodes-base.gSuiteAdmin';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<GSuiteAdminV1UserDeleteParams>;
  output?: Items<GSuiteAdminV1UserDeleteOutput>;
};