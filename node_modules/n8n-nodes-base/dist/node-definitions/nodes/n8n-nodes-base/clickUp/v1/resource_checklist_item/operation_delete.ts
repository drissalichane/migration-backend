/**
 * ClickUp Node - Version 1
 * Discriminator: resource=checklistItem, operation=delete
 */


interface Credentials {
  clickUpApi: CredentialReference;
  clickUpOAuth2Api: CredentialReference;
}

/** Delete a checklist */
export type ClickUpV1ChecklistItemDeleteParams = {
  resource: 'checklistItem';
  operation: 'delete';
  authentication?: 'accessToken' | 'oAuth2' | Expression<string>;
/**
 * Checklist ID
 */
    checklist?: string | Expression<string> | PlaceholderValue;
/**
 * Checklist Item ID
 */
    checklistItem?: string | Expression<string> | PlaceholderValue;
};

export type ClickUpV1ChecklistItemDeleteNode = {
  type: 'n8n-nodes-base.clickUp';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<ClickUpV1ChecklistItemDeleteParams>;
};