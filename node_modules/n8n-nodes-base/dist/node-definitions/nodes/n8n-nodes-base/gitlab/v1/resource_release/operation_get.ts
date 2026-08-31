/**
 * GitLab Node - Version 1
 * Discriminator: resource=release, operation=get
 */


interface Credentials {
  gitlabApi: CredentialReference;
  gitlabOAuth2Api: CredentialReference;
}

/** Get the data of a single issue */
export type GitlabV1ReleaseGetParams = {
  resource: 'release';
  operation: 'get';
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
 * The ID or URL-encoded path of the project
 */
    projectId?: string | Expression<string> | PlaceholderValue;
/**
 * The Git tag the release is associated with
 */
    tag_name?: string | Expression<string> | PlaceholderValue;
};

export type GitlabV1ReleaseGetNode = {
  type: 'n8n-nodes-base.gitlab';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<GitlabV1ReleaseGetParams>;
};