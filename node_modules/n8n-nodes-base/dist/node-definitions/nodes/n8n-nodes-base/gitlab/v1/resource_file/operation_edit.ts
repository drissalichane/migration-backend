/**
 * GitLab Node - Version 1
 * Discriminator: resource=file, operation=edit
 */


interface Credentials {
  gitlabApi: CredentialReference;
  gitlabOAuth2Api: CredentialReference;
}

/** Edit an issue */
export type GitlabV1FileEditParams = {
  resource: 'file';
  operation: 'edit';
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

export type GitlabV1FileEditNode = {
  type: 'n8n-nodes-base.gitlab';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<GitlabV1FileEditParams>;
};