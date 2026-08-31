/**
 * GitHub Node - Version 1.1
 * Discriminator: resource=workflow, operation=dispatch
 */


interface Credentials {
  githubApi: CredentialReference;
  githubOAuth2Api: CredentialReference;
}

/** Dispatch a workflow event */
export type GithubV11WorkflowDispatchParams = {
  resource: 'workflow';
  operation: 'dispatch';
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
/**
 * The git reference for the workflow dispatch (branch, tag, or commit SHA)
 * @default {"mode":"list","value":""}
 */
    ref?: { __rl: true; mode: 'list' | 'name'; value: string; cachedResultName?: string };
/**
 * JSON object with input parameters for the workflow
 * @default {}
 */
    inputs?: IDataObject | string | Expression<string>;
};

export type GithubV11WorkflowDispatchNode = {
  type: 'n8n-nodes-base.github';
  version: 1.1;
  credentials?: Credentials;
  config: NodeConfig<GithubV11WorkflowDispatchParams>;
};