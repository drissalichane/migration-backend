/**
 * Todoist Node - Version 2
 * Discriminator: resource=project, operation=unarchive
 */


interface Credentials {
  todoistApi: CredentialReference;
  todoistOAuth2Api: CredentialReference;
}

/** Project resource */
export type TodoistV2ProjectUnarchiveParams = {
  resource: 'project';
  operation: 'unarchive';
  authentication?: 'apiKey' | 'oAuth2' | Expression<string>;
/**
 * The project ID - can be either a string or number
 */
    projectId?: string | Expression<string> | PlaceholderValue;
};

export type TodoistV2ProjectUnarchiveNode = {
  type: 'n8n-nodes-base.todoist';
  version: 2;
  credentials?: Credentials;
  config: NodeConfig<TodoistV2ProjectUnarchiveParams>;
};