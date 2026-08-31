/**
 * Jira Software Node - Version 1
 * Discriminator: resource=issueAttachment, operation=add
 */


interface Credentials {
  jiraSoftwareCloudApi: CredentialReference;
  jiraSoftwareServerApi: CredentialReference;
  jiraSoftwareServerPatApi: CredentialReference;
}

/** Add, remove, and get an attachment from an issue */
export type JiraV1IssueAttachmentAddParams = {
  resource: 'issueAttachment';
  operation: 'add';
  jiraVersion?: 'cloud' | 'server' | 'serverPat' | Expression<string>;
/**
 * Issue Key
 */
    issueKey?: string | Expression<string> | PlaceholderValue;
/**
 * Input Binary Field
 * @hint The name of the input binary field containing the file to be written
 * @default data
 */
    binaryPropertyName?: string | Expression<string> | PlaceholderValue;
};

export type JiraV1IssueAttachmentAddOutput = {
  author?: {
    accountId?: string;
    accountType?: string;
    active?: boolean;
    avatarUrls?: {
      '16x16'?: string;
      '24x24'?: string;
      '32x32'?: string;
      '48x48'?: string;
    };
    displayName?: string;
    emailAddress?: string;
    self?: string;
    timeZone?: string;
  };
  content?: string;
  created?: string;
  filename?: string;
  id?: string;
  mimeType?: string;
  self?: string;
  size?: number;
};

export type JiraV1IssueAttachmentAddNode = {
  type: 'n8n-nodes-base.jira';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<JiraV1IssueAttachmentAddParams>;
  output?: Items<JiraV1IssueAttachmentAddOutput>;
};