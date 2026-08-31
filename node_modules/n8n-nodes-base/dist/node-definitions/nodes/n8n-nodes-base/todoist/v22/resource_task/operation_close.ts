/**
 * Todoist Node - Version 2.2
 * Discriminator: resource=task, operation=close
 */


interface Credentials {
  todoistApi: CredentialReference;
  todoistOAuth2Api: CredentialReference;
}

/** Task resource */
export type TodoistV22TaskCloseParams = {
  resource: 'task';
  operation: 'close';
  authentication?: 'apiKey' | 'oAuth2' | Expression<string>;
/**
 * Task ID
 */
    taskId?: string | Expression<string> | PlaceholderValue;
};

export type TodoistV22TaskCloseOutput = {
  success?: boolean;
};

export type TodoistV22TaskCloseNode = {
  type: 'n8n-nodes-base.todoist';
  version: 2.2;
  credentials?: Credentials;
  config: NodeConfig<TodoistV22TaskCloseParams>;
  output?: Items<TodoistV22TaskCloseOutput>;
};