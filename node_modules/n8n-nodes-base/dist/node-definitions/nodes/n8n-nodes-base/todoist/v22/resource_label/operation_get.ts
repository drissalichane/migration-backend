/**
 * Todoist Node - Version 2.2
 * Discriminator: resource=label, operation=get
 */


interface Credentials {
  todoistApi: CredentialReference;
  todoistOAuth2Api: CredentialReference;
}

/** Label resource */
export type TodoistV22LabelGetParams = {
  resource: 'label';
  operation: 'get';
  authentication?: 'apiKey' | 'oAuth2' | Expression<string>;
/**
 * Label ID
 */
    labelId?: string | Expression<string> | PlaceholderValue;
};

export type TodoistV22LabelGetNode = {
  type: 'n8n-nodes-base.todoist';
  version: 2.2;
  credentials?: Credentials;
  config: NodeConfig<TodoistV22LabelGetParams>;
};