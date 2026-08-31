/**
 * GitHub Node - Version 1.1
 * Discriminator: resource=release, operation=create
 */


interface Credentials {
  githubApi: CredentialReference;
  githubOAuth2Api: CredentialReference;
}

/** Create a new issue */
export type GithubV11ReleaseCreateParams = {
  resource: 'release';
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
 * The tag of the release
 */
    releaseTag?: string | Expression<string> | PlaceholderValue;
/**
 * Additional Fields
 * @default {}
 */
    additionalFields?: {
    /** The name of the issue
     */
    name?: string | Expression<string> | PlaceholderValue;
    /** The body of the release
     */
    body?: string | Expression<string> | PlaceholderValue;
    /** Whether to create a draft (unpublished) release, "false" to create a published one
     * @default false
     */
    draft?: boolean | Expression<boolean>;
    /** Whether to point out that the release is non-production ready
     * @default false
     */
    prerelease?: boolean | Expression<boolean>;
    /** Specifies the commitish value that determines where the Git tag is created from. Can be any branch or commit SHA. Unused if the Git tag already exists. Default: the repository's default branch(usually master).
     */
    target_commitish?: string | Expression<string> | PlaceholderValue;
  };
};

export type GithubV11ReleaseCreateNode = {
  type: 'n8n-nodes-base.github';
  version: 1.1;
  credentials?: Credentials;
  config: NodeConfig<GithubV11ReleaseCreateParams>;
};