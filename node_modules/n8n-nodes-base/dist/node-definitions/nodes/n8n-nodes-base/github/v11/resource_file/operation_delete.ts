/**
 * GitHub Node - Version 1.1
 * Discriminator: resource=file, operation=delete
 */


interface Credentials {
  githubApi: CredentialReference;
  githubOAuth2Api: CredentialReference;
}

/** Delete a file in repository */
export type GithubV11FileDeleteParams = {
  resource: 'file';
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
 * Commit Message
 */
    commitMessage?: string | Expression<string> | PlaceholderValue;
/**
 * Additional fields to add
 * @default {}
 */
    additionalParameters?: {
        /** Author
     */
    author?: {
      /** The name of the author of the commit
       */
      name?: string | Expression<string> | PlaceholderValue;
      /** The email of the author of the commit
       */
      email?: string | Expression<string> | PlaceholderValue;
    };
        /** Branch
     */
    branch?: {
      /** The branch to commit to. If not set the repository’s default branch (usually master) is used.
       */
      branch?: string | Expression<string> | PlaceholderValue;
    };
        /** Committer
     */
    committer?: {
      /** The name of the committer of the commit
       */
      name?: string | Expression<string> | PlaceholderValue;
      /** The email of the committer of the commit
       */
      email?: string | Expression<string> | PlaceholderValue;
    };
  };
};

export type GithubV11FileDeleteOutput = {
  commit?: {
    author?: {
      date?: string;
      email?: string;
      name?: string;
    };
    committer?: {
      date?: string;
      email?: string;
      name?: string;
    };
    html_url?: string;
    message?: string;
    node_id?: string;
    parents?: Array<{
      html_url?: string;
      sha?: string;
      url?: string;
    }>;
    sha?: string;
    tree?: {
      sha?: string;
      url?: string;
    };
    url?: string;
    verification?: {
      payload?: null;
      reason?: string;
      signature?: null;
      verified?: boolean;
      verified_at?: null;
    };
  };
  content?: null;
};

export type GithubV11FileDeleteNode = {
  type: 'n8n-nodes-base.github';
  version: 1.1;
  credentials?: Credentials;
  config: NodeConfig<GithubV11FileDeleteParams>;
  output?: Items<GithubV11FileDeleteOutput>;
};