/**
 * Todoist Node - Version 2.2
 * Discriminator: resource=project, operation=archive
 */


interface Credentials {
  todoistApi: CredentialReference;
  todoistOAuth2Api: CredentialReference;
}

/** Project resource */
export type TodoistV22ProjectArchiveParams = {
  resource: 'project';
  operation: 'archive';
  authentication?: 'apiKey' | 'oAuth2' | Expression<string>;
/**
 * The project ID - can be either a string or number
 */
    projectId?: string | Expression<string> | PlaceholderValue;
};

export type TodoistV22ProjectArchiveNode = {
  type: 'n8n-nodes-base.todoist';
  version: 2.2;
  credentials?: Credentials;
  config: NodeConfig<TodoistV22ProjectArchiveParams>;
};