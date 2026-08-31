/**
 * Jira Trigger Node - Version 1.1
 * Starts the workflow when Jira events occur
 */


export interface JiraTriggerV11Params {
  jiraVersion?: 'cloud' | 'server' | 'serverPat' | Expression<string>;
/**
 * Whether authentication should be activated for the incoming webhooks (makes it more secure)
 * @default false
 */
    authenticateWebhook?: boolean | Expression<boolean>;
/**
 * The events to listen to
 * @default []
 */
    events?: Array<'*' | 'board_configuration_changed' | 'board_created' | 'board_deleted' | 'board_updated' | 'comment_created' | 'comment_deleted' | 'comment_updated' | 'jira:issue_created' | 'jira:issue_deleted' | 'issuelink_created' | 'issuelink_deleted' | 'jira:issue_updated' | 'option_attachments_changed' | 'option_issuelinks_changed' | 'option_subtasks_changed' | 'option_timetracking_changed' | 'option_unassigned_issues_changed' | 'option_voting_changed' | 'option_watching_changed' | 'project_created' | 'project_deleted' | 'project_updated' | 'sprint_closed' | 'sprint_created' | 'sprint_deleted' | 'sprint_started' | 'sprint_updated' | 'user_created' | 'user_deleted' | 'user_updated' | 'jira:version_created' | 'jira:version_deleted' | 'jira:version_moved' | 'jira:version_released' | 'jira:version_unreleased' | 'jira:version_updated' | 'worklog_created' | 'worklog_deleted' | 'worklog_updated'>;
  additionalFields?: {
    /** Whether a request with empty body will be sent to the URL. Leave unchecked if you want to receive JSON.
     * @default false
     */
    excludeBody?: boolean | Expression<boolean>;
    /** You can specify a JQL query to send only events triggered by matching issues. The JQL filter only applies to events under the Issue and Comment columns.
     */
    filter?: string | Expression<string> | PlaceholderValue;
    /** Include Fields
     * @default []
     */
    includeFields?: Array<'attachment.id' | 'board.id' | 'comment.id' | 'issue.id' | 'mergeVersion.id' | 'modifiedUser.accountId' | 'modifiedUser.key' | 'modifiedUser.name' | 'project.id' | 'project.key' | 'property.key' | 'sprint.id' | 'version.id' | 'worklog.id'>;
  };
}

export interface JiraTriggerV11Credentials {
  jiraSoftwareCloudApi: CredentialReference;
  jiraSoftwareServerApi: CredentialReference;
  jiraSoftwareServerPatApi: CredentialReference;
  httpQueryAuth?: CredentialReference;
}

interface JiraTriggerV11NodeBase {
  type: 'n8n-nodes-base.jiraTrigger';
  version: 1.1;
  credentials?: JiraTriggerV11Credentials;
  isTrigger: true;
}

export type JiraTriggerV11ParamsNode = JiraTriggerV11NodeBase & {
  config: NodeConfig<JiraTriggerV11Params>;
};

export type JiraTriggerV11Node = JiraTriggerV11ParamsNode;