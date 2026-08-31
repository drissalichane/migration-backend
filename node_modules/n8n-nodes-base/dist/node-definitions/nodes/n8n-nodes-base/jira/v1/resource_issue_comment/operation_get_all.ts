/**
 * Jira Software Node - Version 1
 * Discriminator: resource=issueComment, operation=getAll
 */


interface Credentials {
  jiraSoftwareCloudApi: CredentialReference;
  jiraSoftwareServerApi: CredentialReference;
  jiraSoftwareServerPatApi: CredentialReference;
}

/** Get, create, update, and delete a comment from an issue */
export type JiraV1IssueCommentGetAllParams = {
  resource: 'issueComment';
  operation: 'getAll';
  jiraVersion?: 'cloud' | 'server' | 'serverPat' | Expression<string>;
/**
 * The ID or key of the issue
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
 * Options
 * @default {}
 */
    options?: {
    /** Use expand to include additional information about comments in the response. This parameter accepts Rendered Body, which returns the comment body rendered in HTML.
     * @default renderedBody
     */
    expand?: 'renderedBody' | Expression<string>;
    /** Order comments by the created date
     * @default +created
     */
    orderBy?: '+created' | '-created' | Expression<string>;
  };
};

export type JiraV1IssueCommentGetAllOutput = {
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
  body?: {
    content?: Array<{
      content?: Array<{
        attrs?: {
          accessLevel?: string;
          id?: string;
          localId?: string;
          text?: string;
        };
        text?: string;
        type?: string;
      }>;
      type?: string;
    }>;
    type?: string;
    version?: number;
  };
  created?: string;
  id?: string;
  jsdPublic?: boolean;
  self?: string;
  updateAuthor?: {
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
  updated?: string;
};

export type JiraV1IssueCommentGetAllNode = {
  type: 'n8n-nodes-base.jira';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<JiraV1IssueCommentGetAllParams>;
  output?: Items<JiraV1IssueCommentGetAllOutput>;
};