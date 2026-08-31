/**
 * Jira Software Node - Version 1
 * Discriminator: resource=issue, operation=changelog
 */


interface Credentials {
  jiraSoftwareCloudApi: CredentialReference;
  jiraSoftwareServerApi: CredentialReference;
  jiraSoftwareServerPatApi: CredentialReference;
}

/** Creates an issue or, where the option to create subtasks is enabled in Jira, a subtask */
export type JiraV1IssueChangelogParams = {
  resource: 'issue';
  operation: 'changelog';
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
};

export type JiraV1IssueChangelogOutput = {
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
  created?: string;
  id?: string;
  items?: Array<{
    field?: string;
    fieldId?: string;
    fieldtype?: string;
  }>;
};

export type JiraV1IssueChangelogNode = {
  type: 'n8n-nodes-base.jira';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<JiraV1IssueChangelogParams>;
  output?: Items<JiraV1IssueChangelogOutput>;
};