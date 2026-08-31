/**
 * Jira Software Node - Version 1
 * Discriminator: resource=issueAttachment, operation=get
 */


interface Credentials {
  jiraSoftwareCloudApi: CredentialReference;
  jiraSoftwareServerApi: CredentialReference;
  jiraSoftwareServerPatApi: CredentialReference;
}

/** Add, remove, and get an attachment from an issue */
export type JiraV1IssueAttachmentGetParams = {
  resource: 'issueAttachment';
  operation: 'get';
  jiraVersion?: 'cloud' | 'server' | 'serverPat' | Expression<string>;
/**
 * The ID of the attachment
 */
    attachmentId?: string | Expression<string> | PlaceholderValue;
/**
 * Download
 * @default false
 */
    download?: boolean | Expression<boolean>;
/**
 * Put Output File in Field
 * @hint The name of the output binary field to put the file in
 * @displayOptions.show { download: [true] }
 * @default data
 */
    binaryProperty?: string | Expression<string> | PlaceholderValue;
};

export type JiraV1IssueAttachmentGetOutput = {
  author?: {
    accountId?: string;
    active?: boolean;
    avatarUrls?: {
      '16x16'?: string;
      '24x24'?: string;
      '32x32'?: string;
      '48x48'?: string;
    };
    displayName?: string;
    self?: string;
  };
  content?: string;
  created?: string;
  filename?: string;
  id?: number;
  mimeType?: string;
  self?: string;
  size?: number;
};

export type JiraV1IssueAttachmentGetNode = {
  type: 'n8n-nodes-base.jira';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<JiraV1IssueAttachmentGetParams>;
  output?: Items<JiraV1IssueAttachmentGetOutput>;
};