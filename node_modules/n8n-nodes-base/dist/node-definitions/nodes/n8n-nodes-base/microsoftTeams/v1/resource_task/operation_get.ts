/**
 * Microsoft Teams Node - Version 1
 * Discriminator: resource=task, operation=get
 */


interface Credentials {
  microsoftTeamsOAuth2Api: CredentialReference;
}

/** Get a channel */
export type MicrosoftTeamsV1TaskGetParams = {
  resource: 'task';
  operation: 'get';
/**
 * Task ID
 */
    taskId?: string | Expression<string> | PlaceholderValue;
};

export type MicrosoftTeamsV1TaskGetNode = {
  type: 'n8n-nodes-base.microsoftTeams';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<MicrosoftTeamsV1TaskGetParams>;
};