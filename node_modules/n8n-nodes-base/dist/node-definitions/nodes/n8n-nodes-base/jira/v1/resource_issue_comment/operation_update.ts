/**
 * Jira Software Node - Version 1
 * Discriminator: resource=issueComment, operation=update
 */


interface Credentials {
  jiraSoftwareCloudApi: CredentialReference;
  jiraSoftwareServerApi: CredentialReference;
  jiraSoftwareServerPatApi: CredentialReference;
}

/** Get, create, update, and delete a comment from an issue */
export type JiraV1IssueCommentUpdateParams = {
  resource: 'issueComment';
  operation: 'update';
  jiraVersion?: 'cloud' | 'server' | 'serverPat' | Expression<string>;
/**
 * The Issue Comment key
 */
    issueKey?: string | Expression<string> | PlaceholderValue;
/**
 * The ID of the comment
 */
    commentId?: string | Expression<string> | PlaceholderValue;
/**
 * JSON Parameters
 * @default false
 */
    jsonParameters?: boolean | Expression<boolean>;
/**
 * Comment's text
 * @displayOptions.show { jsonParameters: [false] }
 */
    comment?: string | Expression<string> | PlaceholderValue;
/**
 * The Atlassian Document Format (ADF). Online builder can be found &lt;a href="https://developer.atlassian.com/cloud/jira/platform/apis/document/playground/"&gt;here&lt;/a&gt;.
 * @displayOptions.show { jsonParameters: [true] }
 */
    commentJson?: IDataObject | string | Expression<string>;
/**
 * Options
 * @default {}
 */
    options?: {
    /** Use expand to include additional information about comments in the response. This parameter accepts Rendered Body, which returns the comment body rendered in HTML.
     * @default renderedBody
     */
    expand?: 'renderedBody' | Expression<string>;
    /** Whether to enable parsing of wikiformatting for this comment. Default is false.
     * @displayOptions.show { /jiraVersion: ["cloud"] }
     * @default false
     */
    wikiMarkup?: boolean | Expression<boolean>;
  };
};

export type JiraV1IssueCommentUpdateNode = {
  type: 'n8n-nodes-base.jira';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<JiraV1IssueCommentUpdateParams>;
};