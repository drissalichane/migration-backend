/**
 * Todoist Node - Version 2.2
 * Discriminator: resource=task, operation=delete
 */


interface Credentials {
  todoistApi: CredentialReference;
  todoistOAuth2Api: CredentialReference;
}

/** Task resource */
export type TodoistV22TaskDeleteParams = {
  resource: 'task';
  operation: 'delete';
  authentication?: 'apiKey' | 'oAuth2' | Expression<string>;
/**
 * Task ID
 */
    taskId?: string | Expression<string> | PlaceholderValue;
};

export type TodoistV22TaskDeleteNode = {
  type: 'n8n-nodes-base.todoist';
  version: 2.2;
  credentials?: Credentials;
  config: NodeConfig<TodoistV22TaskDeleteParams>;
};