/**
 * Microsoft Teams Node - Version 2
 * Discriminator: resource=task, operation=deleteTask
 */


interface Credentials {
  microsoftTeamsOAuth2Api: CredentialReference;
}

/** Delete a task */
export type MicrosoftTeamsV2TaskDeleteTaskParams = {
  resource: 'task';
  operation: 'deleteTask';
/**
 * The ID of the task to delete
 */
    taskId?: string | Expression<string> | PlaceholderValue;
};

export type MicrosoftTeamsV2TaskDeleteTaskNode = {
  type: 'n8n-nodes-base.microsoftTeams';
  version: 2;
  credentials?: Credentials;
  config: NodeConfig<MicrosoftTeamsV2TaskDeleteTaskParams>;
};