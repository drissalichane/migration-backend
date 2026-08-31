/**
 * Todoist Node - Version 1
 * Discriminator: resource=task, operation=close
 */


interface Credentials {
  todoistApi: CredentialReference;
  todoistOAuth2Api: CredentialReference;
}

/** Task resource */
export type TodoistV1TaskCloseParams = {
  resource: 'task';
  operation: 'close';
  authentication?: 'apiKey' | 'oAuth2' | Expression<string>;
/**
 * Task ID
 */
    taskId?: string | Expression<string> | PlaceholderValue;
};

export type TodoistV1TaskCloseNode = {
  type: 'n8n-nodes-base.todoist';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<TodoistV1TaskCloseParams>;
};