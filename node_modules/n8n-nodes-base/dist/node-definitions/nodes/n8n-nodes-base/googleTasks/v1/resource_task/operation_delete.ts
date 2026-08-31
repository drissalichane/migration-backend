/**
 * Google Tasks Node - Version 1
 * Discriminator: resource=task, operation=delete
 */


interface Credentials {
  googleTasksOAuth2Api: CredentialReference;
}

/** Delete a task */
export type GoogleTasksV1TaskDeleteParams = {
  resource: 'task';
  operation: 'delete';
/**
 * Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
 */
    task?: string | Expression<string>;
/**
 * Task ID
 */
    taskId?: string | Expression<string> | PlaceholderValue;
};

export type GoogleTasksV1TaskDeleteOutput = {
  success?: boolean;
};

export type GoogleTasksV1TaskDeleteNode = {
  type: 'n8n-nodes-base.googleTasks';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<GoogleTasksV1TaskDeleteParams>;
  output?: Items<GoogleTasksV1TaskDeleteOutput>;
};