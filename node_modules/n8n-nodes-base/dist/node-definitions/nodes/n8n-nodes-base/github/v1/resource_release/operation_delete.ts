/**
 * GitHub Node - Version 1
 * Discriminator: resource=release, operation=delete
 */


interface Credentials {
  githubApi: CredentialReference;
  githubOAuth2Api: CredentialReference;
}

/** Delete a file in repository */
export type GithubV1ReleaseDeleteParams = {
  resource: 'release';
  operation: 'delete';
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
};

export type GithubV1ReleaseDeleteNode = {
  type: 'n8n-nodes-base.github';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<GithubV1ReleaseDeleteParams>;
};