/**
 * Microsoft Teams Node - Version 2
 * Discriminator: resource=task, operation=get
 */


interface Credentials {
  microsoftTeamsOAuth2Api: CredentialReference;
}

/** Get a channel */
export type MicrosoftTeamsV2TaskGetParams = {
  resource: 'task';
  operation: 'get';
/**
 * The ID of the task to retrieve
 */
    taskId?: string | Expression<string> | PlaceholderValue;
};

export type MicrosoftTeamsV2TaskGetNode = {
  type: 'n8n-nodes-base.microsoftTeams';
  version: 2;
  credentials?: Credentials;
  config: NodeConfig<MicrosoftTeamsV2TaskGetParams>;
};