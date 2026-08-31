/**
 * Jira Software Node - Version 1
 * Discriminator: resource=issue, operation=create
 */


interface Credentials {
  jiraSoftwareCloudApi: CredentialReference;
  jiraSoftwareServerApi: CredentialReference;
  jiraSoftwareServerPatApi: CredentialReference;
}

/** Creates an issue or, where the option to create subtasks is enabled in Jira, a subtask */
export type JiraV1IssueCreateParams = {
  resource: 'issue';
  operation: 'create';
  jiraVersion?: 'cloud' | 'server' | 'serverPat' | Expression<string>;
/**
 * Project
 * @default {"mode":"list","value":""}
 */
    project?: { __rl: true; mode: 'list' | 'id'; value: string; cachedResultName?: string };
/**
 * Issue Type
 * @default {"mode":"list","value":""}
 */
    issueType?: { __rl: true; mode: 'list' | 'id'; value: string; cachedResultName?: string };
/**
 * Summary
 */
    summary?: string | Expression<string> | PlaceholderValue;
/**
 * Additional Fields
 * @default {}
 */
    additionalFields?: {
    /** Assignee
     * @default {"mode":"list","value":""}
     */
    assignee?: { __rl: true; mode: 'list' | 'id'; value: string; cachedResultName?: string };
    /** Description
     */
    description?: string | Expression<string> | PlaceholderValue;
    /** Choose from the list, or specify IDs using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
     * @default []
     */
    componentIds?: string[];
    /** Custom Fields
     * @default {}
     */
    customFieldsUi?: {
        /** Custom Field
     */
    customFieldsValues?: Array<{
      /** Field
       * @default {"mode":"list","value":""}
       */
      fieldId?: { __rl: true; mode: 'list' | 'id'; value: string; cachedResultName?: string };
      /** Value of the field to set
       */
      fieldValue?: string | Expression<string> | PlaceholderValue;
    }>;
  };
    /** Choose from the list, or specify IDs using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
     * @displayOptions.show { /jiraVersion: ["cloud"] }
     * @default []
     */
    labels?: string[];
    /** Labels
     * @displayOptions.show { /jiraVersion: ["server"] }
     * @default []
     */
    serverLabels?: string | Expression<string> | PlaceholderValue;
    /** Parent Issue Key
     */
    parentIssueKey?: string | Expression<string> | PlaceholderValue;
    /** Priority
     * @default {"mode":"list","value":""}
     */
    priority?: { __rl: true; mode: 'list' | 'id'; value: string; cachedResultName?: string };
    /** Reporter
     * @default {"mode":"list","value":""}
     */
    reporter?: { __rl: true; mode: 'list' | 'id'; value: string; cachedResultName?: string };
    /** Whether the project in which the issue is created is added to the user's Recently viewed project list, as shown under Projects in Jira
     * @default false
     */
    updateHistory?: boolean | Expression<boolean>;
  };
};

export type JiraV1IssueCreateOutput = {
  id?: string;
  key?: string;
  self?: string;
};

export type JiraV1IssueCreateNode = {
  type: 'n8n-nodes-base.jira';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<JiraV1IssueCreateParams>;
  output?: Items<JiraV1IssueCreateOutput>;
};