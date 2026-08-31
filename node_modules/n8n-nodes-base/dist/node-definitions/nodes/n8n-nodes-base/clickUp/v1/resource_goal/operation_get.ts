/**
 * ClickUp Node - Version 1
 * Discriminator: resource=goal, operation=get
 */


interface Credentials {
  clickUpApi: CredentialReference;
  clickUpOAuth2Api: CredentialReference;
}

/** Get a folder */
export type ClickUpV1GoalGetParams = {
  resource: 'goal';
  operation: 'get';
  authentication?: 'accessToken' | 'oAuth2' | Expression<string>;
/**
 * Goal ID
 */
    goal?: string | Expression<string> | PlaceholderValue;
};

export type ClickUpV1GoalGetNode = {
  type: 'n8n-nodes-base.clickUp';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<ClickUpV1GoalGetParams>;
};