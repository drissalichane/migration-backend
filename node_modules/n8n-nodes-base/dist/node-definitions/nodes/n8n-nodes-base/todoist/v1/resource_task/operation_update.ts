/**
 * Todoist Node - Version 1
 * Discriminator: resource=task, operation=update
 */


interface Credentials {
  todoistApi: CredentialReference;
  todoistOAuth2Api: CredentialReference;
}

/** Task resource */
export type TodoistV1TaskUpdateParams = {
  resource: 'task';
  operation: 'update';
  authentication?: 'apiKey' | 'oAuth2' | Expression<string>;
/**
 * Task ID
 */
    taskId?: string | Expression<string> | PlaceholderValue;
/**
 * Update Fields
 * @default {}
 */
    updateFields?: {
    /** Task content
     */
    content?: string | Expression<string> | PlaceholderValue;
    /** A description for the task
     */
    description?: string | Expression<string> | PlaceholderValue;
    /** Specific date and time in RFC3339 format in UTC
     */
    dueDateTime?: string | Expression<string>;
    /** 2-letter code specifying language in case due_string is not written in English
     */
    dueLang?: string | Expression<string> | PlaceholderValue;
    /** Human defined task due date (ex.: “next Monday”, “Tomorrow”). Value is set using local (not UTC) time.
     */
    dueString?: string | Expression<string> | PlaceholderValue;
    /** 2-letter code specifying language in case due_string is not written in English
     */
    dueLang?: string | Expression<string> | PlaceholderValue;
    /** Choose from the list, or specify IDs using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
     * @default []
     */
    labels?: string[];
    /** Task priority from 1 (normal) to 4 (urgent)
     * @default 1
     */
    priority?: number | Expression<number>;
  };
};

export type TodoistV1TaskUpdateNode = {
  type: 'n8n-nodes-base.todoist';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<TodoistV1TaskUpdateParams>;
};