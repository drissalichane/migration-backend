/**
 * GitHub Node - Version 1
 * Discriminator: resource=workflow, operation=dispatch
 */


interface Credentials {
  githubApi: CredentialReference;
  githubOAuth2Api: CredentialReference;
}

/** Dispatch a workflow event */
export type GithubV1WorkflowDispatchParams = {
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
 * The git reference for the workflow dispatch (branch or tag name)
 * @default main
 */
    ref?: string | Expression<string> | PlaceholderValue;
/**
 * JSON object with input parameters for the workflow
 * @default {}
 */
    inputs?: IDataObject | string | Expression<string>;
};

export type GithubV1WorkflowDispatchNode = {
  type: 'n8n-nodes-base.github';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<GithubV1WorkflowDispatchParams>;
};