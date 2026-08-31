/**
 * ClickUp Node - Version 1
 * Discriminator: resource=taskDependency, operation=delete
 */


interface Credentials {
  clickUpApi: CredentialReference;
  clickUpOAuth2Api: CredentialReference;
}

/** Delete a checklist */
export type ClickUpV1TaskDependencyDeleteParams = {
  resource: 'taskDependency';
  operation: 'delete';
  authentication?: 'accessToken' | 'oAuth2' | Expression<string>;
/**
 * Task ID
 */
    task?: string | Expression<string> | PlaceholderValue;
/**
 * Depends On Task ID
 */
    dependsOnTask?: string | Expression<string> | PlaceholderValue;
};

export type ClickUpV1TaskDependencyDeleteNode = {
  type: 'n8n-nodes-base.clickUp';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<ClickUpV1TaskDependencyDeleteParams>;
};