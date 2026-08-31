/**
 * Todoist Node - Version 2
 * Discriminator: resource=task, operation=reopen
 */


interface Credentials {
  todoistApi: CredentialReference;
  todoistOAuth2Api: CredentialReference;
}

/** Task resource */
export type TodoistV2TaskReopenParams = {
  resource: 'task';
  operation: 'reopen';
  authentication?: 'apiKey' | 'oAuth2' | Expression<string>;
/**
 * Task ID
 */
    taskId?: string | Expression<string> | PlaceholderValue;
};

export type TodoistV2TaskReopenNode = {
  type: 'n8n-nodes-base.todoist';
  version: 2;
  credentials?: Credentials;
  config: NodeConfig<TodoistV2TaskReopenParams>;
};