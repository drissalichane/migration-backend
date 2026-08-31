/**
 * Jira Software Node - Version 1
 * Discriminator: resource=issueAttachment, operation=getAll
 */


interface Credentials {
  jiraSoftwareCloudApi: CredentialReference;
  jiraSoftwareServerApi: CredentialReference;
  jiraSoftwareServerPatApi: CredentialReference;
}

/** Add, remove, and get an attachment from an issue */
export type JiraV1IssueAttachmentGetAllParams = {
  resource: 'issueAttachment';
  operation: 'getAll';
  jiraVersion?: 'cloud' | 'server' | 'serverPat' | Expression<string>;
/**
 * Issue Key
 */
    issueKey?: string | Expression<string> | PlaceholderValue;
/**
 * Whether to return all results or only up to a given limit
 * @default false
 */
    returnAll?: boolean | Expression<boolean>;
/**
 * Max number of results to return
 * @displayOptions.show { returnAll: [false] }
 * @default 50
 */
    limit?: number | Expression<number>;
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

export type JiraV1IssueAttachmentGetAllOutput = {
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
  thumbnail?: string;
};

export type JiraV1IssueAttachmentGetAllNode = {
  type: 'n8n-nodes-base.jira';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<JiraV1IssueAttachmentGetAllParams>;
  output?: Items<JiraV1IssueAttachmentGetAllOutput>;
};