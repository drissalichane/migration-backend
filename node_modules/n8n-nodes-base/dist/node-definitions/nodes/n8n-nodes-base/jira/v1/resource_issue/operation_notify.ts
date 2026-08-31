/**
 * Jira Software Node - Version 1
 * Discriminator: resource=issue, operation=notify
 */


interface Credentials {
  jiraSoftwareCloudApi: CredentialReference;
  jiraSoftwareServerApi: CredentialReference;
  jiraSoftwareServerPatApi: CredentialReference;
}

/** Creates an issue or, where the option to create subtasks is enabled in Jira, a subtask */
export type JiraV1IssueNotifyParams = {
  resource: 'issue';
  operation: 'notify';
  jiraVersion?: 'cloud' | 'server' | 'serverPat' | Expression<string>;
/**
 * Issue Key
 */
    issueKey?: string | Expression<string> | PlaceholderValue;
/**
 * JSON Parameters
 * @default false
 */
    jsonParameters?: boolean | Expression<boolean>;
/**
 * Additional Fields
 * @default {}
 */
    additionalFields?: {
    /** The HTML body of the email notification for the issue
     */
    htmlBody?: string | Expression<string> | PlaceholderValue;
    /** The subject of the email notification for the issue. If this is not specified, then the subject is set to the issue key and summary.
     */
    subject?: string | Expression<string> | PlaceholderValue;
    /** The subject of the email notification for the issue. If this is not specified, then the subject is set to the issue key and summary.
     */
    textBody?: string | Expression<string> | PlaceholderValue;
  };
/**
 * The recipients of the email notification for the issue
 * @displayOptions.show { jsonParameters: [false] }
 * @default {}
 */
    notificationRecipientsUi?: {
        /** Recipients
     */
    notificationRecipientsValues?: {
      /** Whether the notification should be sent to the issue's reporter
       * @default false
       */
      reporter?: boolean | Expression<boolean>;
      /** Whether the notification should be sent to the issue's assignees
       * @default false
       */
      assignee?: boolean | Expression<boolean>;
      /** Whether the notification should be sent to the issue's assignees
       * @default false
       */
      watchers?: boolean | Expression<boolean>;
      /** Whether the notification should be sent to the issue's voters
       * @default false
       */
      voters?: boolean | Expression<boolean>;
      /** List of users to receive the notification. Choose from the list, or specify IDs using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
       * @default []
       */
      users?: string[];
      /** List of groups to receive the notification. Choose from the list, or specify IDs using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
       * @default []
       */
      groups?: string[];
    };
  };
/**
 * The recipients of the email notification for the issue
 * @displayOptions.show { jsonParameters: [true] }
 */
    notificationRecipientsJson?: IDataObject | string | Expression<string>;
/**
 * Restricts the notifications to users with the specified permissions
 * @displayOptions.show { jsonParameters: [false] }
 * @default {}
 */
    notificationRecipientsRestrictionsUi?: {
        /** Recipients Restrictions
     */
    notificationRecipientsRestrictionsValues?: {
      /** List of users to receive the notification. Choose from the list, or specify IDs using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
       * @default []
       */
      users?: string[];
      /** List of groups to receive the notification. Choose from the list, or specify IDs using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
       * @default []
       */
      groups?: string[];
    };
  };
/**
 * Restricts the notifications to users with the specified permissions
 * @displayOptions.show { jsonParameters: [true] }
 */
    notificationRecipientsRestrictionsJson?: IDataObject | string | Expression<string>;
};

export type JiraV1IssueNotifyNode = {
  type: 'n8n-nodes-base.jira';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<JiraV1IssueNotifyParams>;
};