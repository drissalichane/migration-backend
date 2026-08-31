/**
 * GitHub Node - Version 1
 * Discriminator: resource=issue, operation=create
 */


interface Credentials {
  githubApi: CredentialReference;
  githubOAuth2Api: CredentialReference;
}

/** Create a new issue */
export type GithubV1IssueCreateParams = {
  resource: 'issue';
  operation: 'create';
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
 * The title of the issue
 */
    title?: string | Expression<string> | PlaceholderValue;
/**
 * The body of the issue
 */
    body?: string | Expression<string> | PlaceholderValue;
/**
 * Labels
 * @default {"label":""}
 */
    labels?: {
    /** Label to add to issue
     */
    label?: string | Expression<string> | PlaceholderValue;
  };
/**
 * Assignees
 * @default {"assignee":""}
 */
    assignees?: {
    /** User to assign issue too
     */
    assignee?: string | Expression<string> | PlaceholderValue;
  };
};

export type GithubV1IssueCreateOutput = {
  active_lock_reason?: null;
  assignees?: Array<{
    avatar_url?: string;
    events_url?: string;
    followers_url?: string;
    following_url?: string;
    gists_url?: string;
    gravatar_id?: string;
    html_url?: string;
    id?: number;
    login?: string;
    node_id?: string;
    organizations_url?: string;
    received_events_url?: string;
    repos_url?: string;
    site_admin?: boolean;
    starred_url?: string;
    subscriptions_url?: string;
    type?: string;
    url?: string;
  }>;
  author_association?: string;
  closed_at?: null;
  closed_by?: null;
  comments?: number;
  comments_url?: string;
  created_at?: string;
  events_url?: string;
  html_url?: string;
  id?: number;
  labels?: Array<{
    color?: string;
    'default'?: boolean;
    id?: number;
    name?: string;
    node_id?: string;
    url?: string;
  }>;
  labels_url?: string;
  locked?: boolean;
  milestone?: null;
  node_id?: string;
  number?: number;
  performed_via_github_app?: null;
  reactions?: {
    '-1'?: number;
    '+1'?: number;
    confused?: number;
    eyes?: number;
    heart?: number;
    hooray?: number;
    laugh?: number;
    rocket?: number;
    total_count?: number;
    url?: string;
  };
  repository_url?: string;
  state?: string;
  state_reason?: null;
  timeline_url?: string;
  title?: string;
  updated_at?: string;
  url?: string;
  user?: {
    avatar_url?: string;
    events_url?: string;
    followers_url?: string;
    following_url?: string;
    gists_url?: string;
    gravatar_id?: string;
    html_url?: string;
    id?: number;
    login?: string;
    node_id?: string;
    organizations_url?: string;
    received_events_url?: string;
    repos_url?: string;
    site_admin?: boolean;
    starred_url?: string;
    subscriptions_url?: string;
    type?: string;
    url?: string;
    user_view_type?: string;
  };
};

export type GithubV1IssueCreateNode = {
  type: 'n8n-nodes-base.github';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<GithubV1IssueCreateParams>;
  output?: Items<GithubV1IssueCreateOutput>;
};