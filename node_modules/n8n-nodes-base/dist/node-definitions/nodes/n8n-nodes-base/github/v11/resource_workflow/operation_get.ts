/**
 * GitHub Node - Version 1.1
 * Discriminator: resource=workflow, operation=get
 */


interface Credentials {
  githubApi: CredentialReference;
  githubOAuth2Api: CredentialReference;
}

/** Get the data of a single issue */
export type GithubV11WorkflowGetParams = {
  resource: 'workflow';
  operation: 'get';
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

export type GithubV11WorkflowGetNode = {
  type: 'n8n-nodes-base.github';
  version: 1.1;
  credentials?: Credentials;
  config: NodeConfig<GithubV11WorkflowGetParams>;
};