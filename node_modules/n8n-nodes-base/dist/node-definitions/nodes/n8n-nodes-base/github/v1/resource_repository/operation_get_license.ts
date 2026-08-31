/**
 * GitHub Node - Version 1
 * Discriminator: resource=repository, operation=getLicense
 */


interface Credentials {
  githubApi: CredentialReference;
  githubOAuth2Api: CredentialReference;
}

/** Returns the contents of the repository's license file, if one is detected */
export type GithubV1RepositoryGetLicenseParams = {
  resource: 'repository';
  operation: 'getLicense';
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
};

export type GithubV1RepositoryGetLicenseOutput = {
  _links?: {
    git?: string;
    html?: string;
    self?: string;
  };
  content?: string;
  download_url?: string;
  encoding?: string;
  git_url?: string;
  html_url?: string;
  license?: {
    key?: string;
    name?: string;
    node_id?: string;
    spdx_id?: string;
  };
  name?: string;
  path?: string;
  sha?: string;
  size?: number;
  type?: string;
  url?: string;
};

export type GithubV1RepositoryGetLicenseNode = {
  type: 'n8n-nodes-base.github';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<GithubV1RepositoryGetLicenseParams>;
  output?: Items<GithubV1RepositoryGetLicenseOutput>;
};