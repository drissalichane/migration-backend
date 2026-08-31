/**
 * Microsoft To Do Node - Version 1
 * Discriminator: resource=task, operation=get
 */


interface Credentials {
  microsoftToDoOAuth2Api: CredentialReference;
}

export type MicrosoftToDoV1TaskGetParams = {
  resource: 'task';
  operation: 'get';
/**
 * The identifier of the list, unique in the user's mailbox. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
 */
    taskListId?: string | Expression<string>;
/**
 * Task ID
 */
    taskId?: string | Expression<string> | PlaceholderValue;
};

export type MicrosoftToDoV1TaskGetNode = {
  type: 'n8n-nodes-base.microsoftToDo';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<MicrosoftToDoV1TaskGetParams>;
};