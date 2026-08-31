/**
 * GitHub Node - Version 1.1
 * Discriminator: resource=review, operation=update
 */


interface Credentials {
  githubApi: CredentialReference;
  githubOAuth2Api: CredentialReference;
}

/** Update a release */
export type GithubV11ReviewUpdateParams = {
  resource: 'review';
  operation: 'update';
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
/**
 * The body of the review
 */
    body?: string | Expression<string> | PlaceholderValue;
};

export type GithubV11ReviewUpdateNode = {
  type: 'n8n-nodes-base.github';
  version: 1.1;
  credentials?: Credentials;
  config: NodeConfig<GithubV11ReviewUpdateParams>;
};