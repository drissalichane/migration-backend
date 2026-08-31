/**
 * Jira Software Node - Version 1
 * Discriminator: resource=issueComment, operation=remove
 */


interface Credentials {
  jiraSoftwareCloudApi: CredentialReference;
  jiraSoftwareServerApi: CredentialReference;
  jiraSoftwareServerPatApi: CredentialReference;
}

/** Get, create, update, and delete a comment from an issue */
export type JiraV1IssueCommentRemoveParams = {
  resource: 'issueComment';
  operation: 'remove';
  jiraVersion?: 'cloud' | 'server' | 'serverPat' | Expression<string>;
/**
 * The ID or key of the issue
 */
    issueKey?: string | Expression<string> | PlaceholderValue;
/**
 * The ID of the comment
 */
    commentId?: string | Expression<string> | PlaceholderValue;
};

export type JiraV1IssueCommentRemoveOutput = {
  success?: boolean;
};

export type JiraV1IssueCommentRemoveNode = {
  type: 'n8n-nodes-base.jira';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<JiraV1IssueCommentRemoveParams>;
  output?: Items<JiraV1IssueCommentRemoveOutput>;
};