/**
 * ClickUp Node - Version 1
 * Discriminator: resource=taskDependency, operation=create
 */


interface Credentials {
  clickUpApi: CredentialReference;
  clickUpOAuth2Api: CredentialReference;
}

/** Create a checklist */
export type ClickUpV1TaskDependencyCreateParams = {
  resource: 'taskDependency';
  operation: 'create';
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

export type ClickUpV1TaskDependencyCreateNode = {
  type: 'n8n-nodes-base.clickUp';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<ClickUpV1TaskDependencyCreateParams>;
};