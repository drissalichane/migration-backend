/**
 * GitHub Node - Version 1.1
 * Discriminator: resource=file, operation=list
 */


interface Credentials {
  githubApi: CredentialReference;
  githubOAuth2Api: CredentialReference;
}

/** List contents of a folder */
export type GithubV11FileListParams = {
  resource: 'file';
  operation: 'list';
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
 * The file path of the file. Has to contain the full path.
 */
    filePath?: string | Expression<string> | PlaceholderValue;
};

export type GithubV11FileListOutput = {
  _links?: {
    git?: string;
    html?: string;
    self?: string;
  };
  git_url?: string;
  html_url?: string;
  name?: string;
  path?: string;
  sha?: string;
  size?: number;
  type?: string;
  url?: string;
};

export type GithubV11FileListNode = {
  type: 'n8n-nodes-base.github';
  version: 1.1;
  credentials?: Credentials;
  config: NodeConfig<GithubV11FileListParams>;
  output?: Items<GithubV11FileListOutput>;
};