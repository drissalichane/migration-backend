/**
 * Microsoft To Do Node - Version 1
 * Discriminator: resource=task, operation=create
 */


interface Credentials {
  microsoftToDoOAuth2Api: CredentialReference;
}

export type MicrosoftToDoV1TaskCreateParams = {
  resource: 'task';
  operation: 'create';
/**
 * The identifier of the list, unique in the user's mailbox. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
 */
    taskListId?: string | Expression<string>;
/**
 * A brief description of the task
 */
    title?: string | Expression<string> | PlaceholderValue;
/**
 * Additional Fields
 * @default {}
 */
    additionalFields?: {
    /** The content of the task
     */
    content?: string | Expression<string> | PlaceholderValue;
    /** The date in the specified time zone that the task is to be finished
     */
    dueDateTime?: string | Expression<string>;
    /** The date in the specified time zone that the task is to be reminded
     */
    reminderDateTime?: string | Expression<string>;
    /** The importance of the task
     * @default normal
     */
    importance?: 'low' | 'normal' | 'high' | Expression<string>;
    /** Indicates the state or progress of the task
     * @default notStarted
     */
    status?: 'notStarted' | 'inProgress' | 'completed' | 'waitingOnOthers' | 'deferred' | Expression<string>;
  };
};

export type MicrosoftToDoV1TaskCreateOutput = {
  '@odata.context'?: string;
  '@odata.etag'?: string;
  body?: {
    content?: string;
    contentType?: string;
  };
  createdDateTime?: string;
  hasAttachments?: boolean;
  id?: string;
  importance?: string;
  isReminderOn?: boolean;
  lastModifiedDateTime?: string;
  status?: string;
  title?: string;
};

export type MicrosoftToDoV1TaskCreateNode = {
  type: 'n8n-nodes-base.microsoftToDo';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<MicrosoftToDoV1TaskCreateParams>;
  output?: Items<MicrosoftToDoV1TaskCreateOutput>;
};