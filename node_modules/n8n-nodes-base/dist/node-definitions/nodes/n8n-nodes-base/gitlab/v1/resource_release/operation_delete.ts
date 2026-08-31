/**
 * GitLab Node - Version 1
 * Discriminator: resource=release, operation=delete
 */


interface Credentials {
  gitlabApi: CredentialReference;
  gitlabOAuth2Api: CredentialReference;
}

/** Delete a release */
export type GitlabV1ReleaseDeleteParams = {
  resource: 'release';
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
 * The ID or URL-encoded path of the project
 */
    projectId?: string | Expression<string> | PlaceholderValue;
/**
 * The Git tag the release is associated with
 */
    tag_name?: string | Expression<string> | PlaceholderValue;
};

export type GitlabV1ReleaseDeleteNode = {
  type: 'n8n-nodes-base.gitlab';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<GitlabV1ReleaseDeleteParams>;
};