/**
 * GitHub Node - Version 1.1
 * Discriminator: resource=review, operation=get
 */


interface Credentials {
  githubApi: CredentialReference;
  githubOAuth2Api: CredentialReference;
}

/** Get the data of a single issue */
export type GithubV11ReviewGetParams = {
  resource: 'review';
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
 * The number of the pull request
 * @default 0
 */
    pullRequestNumber?: number | Expression<number>;
/**
 * ID of the review
 */
    reviewId?: string | Expression<string> | PlaceholderValue;
};

export type GithubV11ReviewGetNode = {
  type: 'n8n-nodes-base.github';
  version: 1.1;
  credentials?: Credentials;
  config: NodeConfig<GithubV11ReviewGetParams>;
};