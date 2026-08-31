/**
 * Jira Software Node - Version 1
 * Discriminator: resource=issueAttachment, operation=remove
 */


interface Credentials {
  jiraSoftwareCloudApi: CredentialReference;
  jiraSoftwareServerApi: CredentialReference;
  jiraSoftwareServerPatApi: CredentialReference;
}

/** Add, remove, and get an attachment from an issue */
export type JiraV1IssueAttachmentRemoveParams = {
  resource: 'issueAttachment';
  operation: 'remove';
  jiraVersion?: 'cloud' | 'server' | 'serverPat' | Expression<string>;
/**
 * The ID of the attachment
 */
    attachmentId?: string | Expression<string> | PlaceholderValue;
};

export type JiraV1IssueAttachmentRemoveNode = {
  type: 'n8n-nodes-base.jira';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<JiraV1IssueAttachmentRemoveParams>;
};