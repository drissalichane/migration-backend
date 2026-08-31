/**
 * Todoist Node - Version 2
 * Discriminator: resource=task, operation=move
 */


interface Credentials {
  todoistApi: CredentialReference;
  todoistOAuth2Api: CredentialReference;
}

/** Task resource */
export type TodoistV2TaskMoveParams = {
  resource: 'task';
  operation: 'move';
  authentication?: 'apiKey' | 'oAuth2' | Expression<string>;
/**
 * Task ID
 */
    taskId?: string | Expression<string> | PlaceholderValue;
/**
 * The destination project. Choose from the list, or specify an ID.
 * @default {"mode":"list","value":""}
 */
    project?: { __rl: true; mode: 'list' | 'id'; value: string; cachedResultName?: string };
/**
 * Section to which you want move the task. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
 */
    section?: string | Expression<string>;
};

export type TodoistV2TaskMoveOutput = {
  success?: boolean;
};

export type TodoistV2TaskMoveNode = {
  type: 'n8n-nodes-base.todoist';
  version: 2;
  credentials?: Credentials;
  config: NodeConfig<TodoistV2TaskMoveParams>;
  output?: Items<TodoistV2TaskMoveOutput>;
};