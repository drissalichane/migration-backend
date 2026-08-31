/**
 * GitHub Node - Version 1
 * Discriminator: resource=file, operation=get
 */


interface Credentials {
  githubApi: CredentialReference;
  githubOAuth2Api: CredentialReference;
}

/** Get the data of a single issue */
export type GithubV1FileGetParams = {
  resource: 'file';
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
 * The file path of the file. Has to contain the full path.
 * @displayOptions.hide { operation: ["list"] }
 */
    filePath?: string | Expression<string> | PlaceholderValue;
/**
 * Whether to set the data of the file as binary property instead of returning the raw API response
 * @default true
 */
    asBinaryProperty?: boolean | Expression<boolean>;
/**
 * Put Output File in Field
 * @hint The name of the output binary field to put the file in
 * @displayOptions.show { asBinaryProperty: [true] }
 * @default data
 */
    binaryPropertyName?: string | Expression<string> | PlaceholderValue;
/**
 * Additional fields to add
 * @default {}
 */
    additionalParameters?: {
    /** The name of the commit/branch/tag. Default: the repository’s default branch (usually master).
     */
    reference?: string | Expression<string> | PlaceholderValue;
  };
};

export type GithubV1FileGetOutput = {
  type?: string;
};

export type GithubV1FileGetNode = {
  type: 'n8n-nodes-base.github';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<GithubV1FileGetParams>;
  output?: Items<GithubV1FileGetOutput>;
};