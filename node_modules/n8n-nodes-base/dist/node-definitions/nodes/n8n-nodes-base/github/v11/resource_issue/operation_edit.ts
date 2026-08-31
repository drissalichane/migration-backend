/**
 * GitHub Node - Version 1.1
 * Discriminator: resource=issue, operation=edit
 */


interface Credentials {
  githubApi: CredentialReference;
  githubOAuth2Api: CredentialReference;
}

/** Edit an issue */
export type GithubV11IssueEditParams = {
  resource: 'issue';
  operation: 'edit';
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
 * The number of the issue edit
 * @default 0
 */
    issueNumber?: number | Expression<number>;
/**
 * Edit Fields
 * @default {}
 */
    editFields?: {
    /** Assignees
     * @default {"assignee":""}
     */
    assignees?: {
    /** User to assign issue to
     */
    assignee?: string | Expression<string> | PlaceholderValue;
  };
    /** The body of the issue
     */
    body?: string | Expression<string> | PlaceholderValue;
    /** Labels
     * @default {"label":""}
     */
    labels?: {
    /** Label to add to issue
     */
    label?: string | Expression<string> | PlaceholderValue;
  };
    /** The state to set
     * @default open
     */
    state?: 'closed' | 'open' | Expression<string>;
    /** The reason for the state change
     * @default completed
     */
    state_reason?: 'completed' | 'not_planned' | 'reopened' | Expression<string>;
    /** The title of the issue
     */
    title?: string | Expression<string> | PlaceholderValue;
  };
};

export type GithubV11IssueEditNode = {
  type: 'n8n-nodes-base.github';
  version: 1.1;
  credentials?: Credentials;
  config: NodeConfig<GithubV11IssueEditParams>;
};