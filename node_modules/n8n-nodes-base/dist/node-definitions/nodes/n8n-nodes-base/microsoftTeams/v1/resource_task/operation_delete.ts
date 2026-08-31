/**
 * Microsoft Teams Node - Version 1
 * Discriminator: resource=task, operation=delete
 */


interface Credentials {
  microsoftTeamsOAuth2Api: CredentialReference;
}

/** Delete a channel */
export type MicrosoftTeamsV1TaskDeleteParams = {
  resource: 'task';
  operation: 'delete';
/**
 * Task ID
 */
    taskId?: string | Expression<string> | PlaceholderValue;
};

export type MicrosoftTeamsV1TaskDeleteNode = {
  type: 'n8n-nodes-base.microsoftTeams';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<MicrosoftTeamsV1TaskDeleteParams>;
};