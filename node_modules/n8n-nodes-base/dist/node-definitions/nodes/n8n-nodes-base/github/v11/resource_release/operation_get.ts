/**
 * GitHub Node - Version 1.1
 * Discriminator: resource=release, operation=get
 */


interface Credentials {
  githubApi: CredentialReference;
  githubOAuth2Api: CredentialReference;
}

/** Get the data of a single issue */
export type GithubV11ReleaseGetParams = {
  resource: 'release';
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
 * Release ID
 */
    release_id?: string | Expression<string> | PlaceholderValue;
};

export type GithubV11ReleaseGetNode = {
  type: 'n8n-nodes-base.github';
  version: 1.1;
  credentials?: Credentials;
  config: NodeConfig<GithubV11ReleaseGetParams>;
};