/**
 * Todoist Node - Version 2.1
 * Discriminator: resource=project, operation=get
 */


interface Credentials {
  todoistApi: CredentialReference;
  todoistOAuth2Api: CredentialReference;
}

/** Project resource */
export type TodoistV21ProjectGetParams = {
  resource: 'project';
  operation: 'get';
  authentication?: 'apiKey' | 'oAuth2' | Expression<string>;
/**
 * The project ID - can be either a string or number
 */
    projectId?: string | Expression<string> | PlaceholderValue;
};

export type TodoistV21ProjectGetNode = {
  type: 'n8n-nodes-base.todoist';
  version: 2.1;
  credentials?: Credentials;
  config: NodeConfig<TodoistV21ProjectGetParams>;
};