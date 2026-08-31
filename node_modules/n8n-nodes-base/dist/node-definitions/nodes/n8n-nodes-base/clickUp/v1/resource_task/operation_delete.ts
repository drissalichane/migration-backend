/**
 * ClickUp Node - Version 1
 * Discriminator: resource=task, operation=delete
 */


interface Credentials {
  clickUpApi: CredentialReference;
  clickUpOAuth2Api: CredentialReference;
}

/** Delete a checklist */
export type ClickUpV1TaskDeleteParams = {
  resource: 'task';
  operation: 'delete';
  authentication?: 'accessToken' | 'oAuth2' | Expression<string>;
/**
 * Task ID
 */
    id?: string | Expression<string> | PlaceholderValue;
};

export type ClickUpV1TaskDeleteOutput = {
  success?: boolean;
};

export type ClickUpV1TaskDeleteNode = {
  type: 'n8n-nodes-base.clickUp';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<ClickUpV1TaskDeleteParams>;
  output?: Items<ClickUpV1TaskDeleteOutput>;
};