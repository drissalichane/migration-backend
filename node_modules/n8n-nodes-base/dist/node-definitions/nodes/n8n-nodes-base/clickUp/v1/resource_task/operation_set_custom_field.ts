/**
 * ClickUp Node - Version 1
 * Discriminator: resource=task, operation=setCustomField
 */


interface Credentials {
  clickUpApi: CredentialReference;
  clickUpOAuth2Api: CredentialReference;
}

/** Set a custom field */
export type ClickUpV1TaskSetCustomFieldParams = {
  resource: 'task';
  operation: 'setCustomField';
  authentication?: 'accessToken' | 'oAuth2' | Expression<string>;
/**
 * The ID of the task to add custom field to
 */
    task?: string | Expression<string> | PlaceholderValue;
/**
 * The ID of the field to add custom field to
 */
    field?: string | Expression<string> | PlaceholderValue;
/**
 * The value is JSON and will be parsed as such. Is needed if for example needed for labels which expects the value to be an array.
 * @default false
 */
    jsonParse?: boolean | Expression<boolean>;
/**
 * The value to set on custom field
 */
    value?: string | Expression<string> | PlaceholderValue;
};

export type ClickUpV1TaskSetCustomFieldNode = {
  type: 'n8n-nodes-base.clickUp';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<ClickUpV1TaskSetCustomFieldParams>;
};