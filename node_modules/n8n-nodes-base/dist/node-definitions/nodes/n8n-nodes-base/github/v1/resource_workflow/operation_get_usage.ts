/**
 * GitHub Node - Version 1
 * Discriminator: resource=workflow, operation=getUsage
 */


interface Credentials {
  githubApi: CredentialReference;
  githubOAuth2Api: CredentialReference;
}

/** Get the usage of a workflow */
export type GithubV1WorkflowGetUsageParams = {
  resource: 'workflow';
  operation: 'getUsage';
  authentication?: 'accessToken' | 'oAuth2' | Expression<string>;
/**
 * Repository Owner
 * @displayOptions.hide { operation: ["invite", "getUserIssues"] }
 * @default {"mode":"list","value":""}
 */
    owner?: { __rl: true; mode: 'list' | 'url' | 'name'; value: string; cachedResultName?: string };
/**
 * Repository Name
 * @displayOptions.hide { resource: ["user", "organization"], operation: ["getRepositories"] }
 * @default {"mode":"list","value":""}
 */
    repository?: { __rl: true; mode: 'list' | 'url' | 'name'; value: string; cachedResultName?: string };
/**
 * The workflow to dispatch
 * @default {"mode":"list","value":""}
 */
    workflowId?: { __rl: true; mode: 'list' | 'filename' | 'name'; value: string; cachedResultName?: string };
};

export type GithubV1WorkflowGetUsageNode = {
  type: 'n8n-nodes-base.github';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<GithubV1WorkflowGetUsageParams>;
};