/**
 * GitLab Node - Version 1
 * Discriminator: resource=issue, operation=createComment
 */


interface Credentials {
  gitlabApi: CredentialReference;
  gitlabOAuth2Api: CredentialReference;
}

/** Create a new comment on an issue */
export type GitlabV1IssueCreateCommentParams = {
  resource: 'issue';
  operation: 'createComment';
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
 * The number of the issue on which to create the comment on
 * @default 0
 */
    issueNumber?: number | Expression<number>;
/**
 * The body of the comment
 */
    body?: string | Expression<string> | PlaceholderValue;
};

export type GitlabV1IssueCreateCommentNode = {
  type: 'n8n-nodes-base.gitlab';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<GitlabV1IssueCreateCommentParams>;
};