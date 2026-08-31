/**
 * Jira Software Node - Version 1
 * Discriminator: resource=issue, operation=delete
 */


interface Credentials {
  jiraSoftwareCloudApi: CredentialReference;
  jiraSoftwareServerApi: CredentialReference;
  jiraSoftwareServerPatApi: CredentialReference;
}

/** Creates an issue or, where the option to create subtasks is enabled in Jira, a subtask */
export type JiraV1IssueDeleteParams = {
  resource: 'issue';
  operation: 'delete';
  jiraVersion?: 'cloud' | 'server' | 'serverPat' | Expression<string>;
/**
 * Issue Key
 */
    issueKey?: string | Expression<string> | PlaceholderValue;
/**
 * Delete Subtasks
 * @default false
 */
    deleteSubtasks?: boolean | Expression<boolean>;
};

export type JiraV1IssueDeleteOutput = {
  success?: boolean;
};

export type JiraV1IssueDeleteNode = {
  type: 'n8n-nodes-base.jira';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<JiraV1IssueDeleteParams>;
  output?: Items<JiraV1IssueDeleteOutput>;
};