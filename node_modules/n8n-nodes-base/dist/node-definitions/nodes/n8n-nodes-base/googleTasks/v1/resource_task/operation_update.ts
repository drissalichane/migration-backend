/**
 * Google Tasks Node - Version 1
 * Discriminator: resource=task, operation=update
 */


interface Credentials {
  googleTasksOAuth2Api: CredentialReference;
}

/** Update a task */
export type GoogleTasksV1TaskUpdateParams = {
  resource: 'task';
  operation: 'update';
/**
 * Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
 */
    task?: string | Expression<string>;
/**
 * Task ID
 */
    taskId?: string | Expression<string> | PlaceholderValue;
/**
 * Update Fields
 * @default {}
 */
    updateFields?: {
    /** Completion date of the task (as a RFC 3339 timestamp). This field is omitted if the task has not been completed.
     */
    completed?: string | Expression<string>;
    /** Whether the task has been deleted
     * @default false
     */
    deleted?: boolean | Expression<boolean>;
    /** Due date of the task
     */
    dueDate?: string | Expression<string>;
    /** Additional Notes
     */
    notes?: string | Expression<string> | PlaceholderValue;
    /** Previous sibling task identifier. If the task is created at the first position among its siblings, this parameter is omitted.
     */
    previous?: string | Expression<string> | PlaceholderValue;
    /** Current status of the task
     */
    status?: 'needsAction' | 'completed' | Expression<string>;
    /** Title of the task
     */
    title?: string | Expression<string> | PlaceholderValue;
  };
};

export type GoogleTasksV1TaskUpdateOutput = {
  due?: string;
  etag?: string;
  id?: string;
  kind?: string;
  links?: Array<{
    description?: string;
    link?: string;
    type?: string;
  }>;
  notes?: string;
  position?: string;
  selfLink?: string;
  status?: string;
  title?: string;
  updated?: string;
  webViewLink?: string;
};

export type GoogleTasksV1TaskUpdateNode = {
  type: 'n8n-nodes-base.googleTasks';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<GoogleTasksV1TaskUpdateParams>;
  output?: Items<GoogleTasksV1TaskUpdateOutput>;
};