/**
 * GitLab Node - Version 1
 * Discriminator: resource=file, operation=delete
 */


interface Credentials {
  gitlabApi: CredentialReference;
  gitlabOAuth2Api: CredentialReference;
}

/** Delete a release */
export type GitlabV1FileDeleteParams = {
  resource: 'file';
  operation: 'delete';
  authentication?: 'accessToken' | 'oAuth2' | Expression<string>;
/**
 * User, group or namespace of the project
 */
    owner?: string | Expression<string> | PlaceholderValue;
/**
 * The name of the project
 * @displayOptions.hide { resource: ["user"], operation: ["getRepositories"] }
 */
    repository?: string | Expression<string> | PlaceholderValue;
/**
 * The file path of the file. Has to contain the full path or leave it empty for root folder.
 * @displayOptions.hide { operation: ["list"] }
 */
    filePath?: string | Expression<string> | PlaceholderValue;
/**
 * Commit Message
 */
    commitMessage?: string | Expression<string> | PlaceholderValue;
/**
 * Name of the new branch to create. The commit is added to this branch.
 */
    branch?: string | Expression<string> | PlaceholderValue;
/**
 * Additional fields to add
 * @default {}
 */
    additionalParameters?: {
        /** Start Branch
     */
    branchStart?: {
      /** Name of the base branch to create the new branch from
       */
      branchStart?: string | Expression<string> | PlaceholderValue;
    };
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
        /** Encoding
     */
    encoding?: {
      /** Change encoding to base64. Default is text.
       * @default text
       */
      encoding?: string | Expression<string> | PlaceholderValue;
    };
  };
};

export type GitlabV1FileDeleteNode = {
  type: 'n8n-nodes-base.gitlab';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<GitlabV1FileDeleteParams>;
};