/**
 * GitHub Node - Version 1.1
 * Discriminator: resource=workflow, operation=list
 */


interface Credentials {
  githubApi: CredentialReference;
  githubOAuth2Api: CredentialReference;
}

/** List contents of a folder */
export type GithubV11WorkflowListParams = {
  resource: 'workflow';
  operation: 'list';
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
};

export type GithubV11WorkflowListOutput = {
  total_count?: number;
  workflows?: Array<{
    badge_url?: string;
    created_at?: string;
    html_url?: string;
    id?: number;
    name?: string;
    node_id?: string;
    path?: string;
    state?: string;
    updated_at?: string;
    url?: string;
  }>;
};

export type GithubV11WorkflowListNode = {
  type: 'n8n-nodes-base.github';
  version: 1.1;
  credentials?: Credentials;
  config: NodeConfig<GithubV11WorkflowListParams>;
  output?: Items<GithubV11WorkflowListOutput>;
};