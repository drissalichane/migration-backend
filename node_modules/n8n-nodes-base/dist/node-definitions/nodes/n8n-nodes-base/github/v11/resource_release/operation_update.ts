/**
 * GitHub Node - Version 1.1
 * Discriminator: resource=release, operation=update
 */


interface Credentials {
  githubApi: CredentialReference;
  githubOAuth2Api: CredentialReference;
}

/** Update a release */
export type GithubV11ReleaseUpdateParams = {
  resource: 'release';
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
 * Release ID
 */
    release_id?: string | Expression<string> | PlaceholderValue;
/**
 * Additional Fields
 * @default {}
 */
    additionalFields?: {
    /** The body of the release
     */
    body?: string | Expression<string> | PlaceholderValue;
    /** Whether to create a draft (unpublished) release, "false" to create a published one
     * @default false
     */
    draft?: boolean | Expression<boolean>;
    /** The name of the release
     */
    name?: string | Expression<string> | PlaceholderValue;
    /** Whether to point out that the release is non-production ready
     * @default false
     */
    prerelease?: boolean | Expression<boolean>;
    /** The name of the tag
     */
    tag_name?: string | Expression<string> | PlaceholderValue;
    /** Specifies the commitish value that determines where the Git tag is created from. Can be any branch or commit SHA. Unused if the Git tag already exists. Default: the repository's default branch(usually master).
     */
    target_commitish?: string | Expression<string> | PlaceholderValue;
  };
};

export type GithubV11ReleaseUpdateNode = {
  type: 'n8n-nodes-base.github';
  version: 1.1;
  credentials?: Credentials;
  config: NodeConfig<GithubV11ReleaseUpdateParams>;
};