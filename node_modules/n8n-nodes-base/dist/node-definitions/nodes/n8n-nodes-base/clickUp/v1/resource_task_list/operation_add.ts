/**
 * ClickUp Node - Version 1
 * Discriminator: resource=taskList, operation=add
 */


interface Credentials {
  clickUpApi: CredentialReference;
  clickUpOAuth2Api: CredentialReference;
}

/** Add a tag to a task */
export type ClickUpV1TaskListAddParams = {
  resource: 'taskList';
  operation: 'add';
  authentication?: 'accessToken' | 'oAuth2' | Expression<string>;
/**
 * Task ID
 */
    taskId?: string | Expression<string> | PlaceholderValue;
/**
 * List ID
 */
    listId?: string | Expression<string> | PlaceholderValue;
};

export type ClickUpV1TaskListAddNode = {
  type: 'n8n-nodes-base.clickUp';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<ClickUpV1TaskListAddParams>;
};