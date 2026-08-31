/**
 * GitHub Node - Version 1.1
 * Discriminator: resource=review, operation=create
 */


interface Credentials {
  githubApi: CredentialReference;
  githubOAuth2Api: CredentialReference;
}

/** Create a new issue */
export type GithubV11ReviewCreateParams = {
  resource: 'review';
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
 * The number of the pull request to review
 * @default 0
 */
    pullRequestNumber?: number | Expression<number>;
/**
 * The review action you want to perform
 * @default approve
 */
    event?: 'approve' | 'requestChanges' | 'comment' | 'pending' | Expression<string>;
/**
 * The body of the review (required for events Request Changes or Comment)
 * @displayOptions.show { event: ["requestChanges", "comment"] }
 */
    body?: string | Expression<string> | PlaceholderValue;
/**
 * Additional Fields
 * @default {}
 */
    additionalFields?: {
    /** The SHA of the commit that needs a review, if different from the latest
     */
    commitId?: string | Expression<string> | PlaceholderValue;
  };
};

export type GithubV11ReviewCreateNode = {
  type: 'n8n-nodes-base.github';
  version: 1.1;
  credentials?: Credentials;
  config: NodeConfig<GithubV11ReviewCreateParams>;
};