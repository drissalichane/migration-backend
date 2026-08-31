/**
 * GitHub Node - Version 1
 * Discriminator: resource=issue, operation=createComment
 */


interface Credentials {
  githubApi: CredentialReference;
  githubOAuth2Api: CredentialReference;
}

/** Create a new comment on an issue */
export type GithubV1IssueCreateCommentParams = {
  resource: 'issue';
  operation: 'createComment';
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
 * The number of the issue on which to create the comment on
 * @default 0
 */
    issueNumber?: number | Expression<number>;
/**
 * The body of the comment
 */
    body?: string | Expression<string> | PlaceholderValue;
};

export type GithubV1IssueCreateCommentOutput = {
  author_association?: string;
  body?: string;
  created_at?: string;
  html_url?: string;
  id?: number;
  issue_url?: string;
  node_id?: string;
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

export type GithubV1IssueCreateCommentNode = {
  type: 'n8n-nodes-base.github';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<GithubV1IssueCreateCommentParams>;
  output?: Items<GithubV1IssueCreateCommentOutput>;
};