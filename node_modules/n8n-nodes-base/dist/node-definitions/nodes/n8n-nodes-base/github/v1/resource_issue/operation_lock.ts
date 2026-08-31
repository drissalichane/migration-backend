/**
 * GitHub Node - Version 1
 * Discriminator: resource=issue, operation=lock
 */


interface Credentials {
  githubApi: CredentialReference;
  githubOAuth2Api: CredentialReference;
}

/** Lock an issue */
export type GithubV1IssueLockParams = {
  resource: 'issue';
  operation: 'lock';
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
 * The issue number to lock
 * @default 0
 */
    issueNumber?: number | Expression<number>;
/**
 * The reason for locking the issue
 * @default resolved
 */
    lockReason?: 'off-topic' | 'too heated' | 'resolved' | 'spam' | Expression<string>;
};

export type GithubV1IssueLockNode = {
  type: 'n8n-nodes-base.github';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<GithubV1IssueLockParams>;
};