/**
 * GitHub Node - Version 1.1
 * Discriminator: resource=file, operation=edit
 */


interface Credentials {
  githubApi: CredentialReference;
  githubOAuth2Api: CredentialReference;
}

/** Edit an issue */
export type GithubV11FileEditParams = {
  resource: 'file';
  operation: 'edit';
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
 * Whether the data to upload should be taken from binary field
 * @default false
 */
    binaryData?: boolean | Expression<boolean>;
/**
 * The text content of the file
 * @displayOptions.show { binaryData: [false] }
 */
    fileContent?: string | Expression<string> | PlaceholderValue;
/**
 * Input Binary Field
 * @hint The name of the input binary field containing the file to be written
 * @displayOptions.show { binaryData: [true] }
 * @default data
 */
    binaryPropertyName?: string | Expression<string> | PlaceholderValue;
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

export type GithubV11FileEditOutput = {
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
  content?: {
    _links?: {
      git?: string;
      html?: string;
      self?: string;
    };
    download_url?: string;
    git_url?: string;
    html_url?: string;
    name?: string;
    path?: string;
    sha?: string;
    size?: number;
    type?: string;
    url?: string;
  };
};

export type GithubV11FileEditNode = {
  type: 'n8n-nodes-base.github';
  version: 1.1;
  credentials?: Credentials;
  config: NodeConfig<GithubV11FileEditParams>;
  output?: Items<GithubV11FileEditOutput>;
};