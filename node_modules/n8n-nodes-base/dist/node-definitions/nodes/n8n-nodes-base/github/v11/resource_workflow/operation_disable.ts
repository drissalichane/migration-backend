/**
 * GitHub Node - Version 1.1
 * Discriminator: resource=workflow, operation=disable
 */


interface Credentials {
  githubApi: CredentialReference;
  githubOAuth2Api: CredentialReference;
}

/** Disable a workflow */
export type GithubV11WorkflowDisableParams = {
  resource: 'workflow';
  operation: 'disable';
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

export type GithubV11WorkflowDisableNode = {
  type: 'n8n-nodes-base.github';
  version: 1.1;
  credentials?: Credentials;
  config: NodeConfig<GithubV11WorkflowDisableParams>;
};