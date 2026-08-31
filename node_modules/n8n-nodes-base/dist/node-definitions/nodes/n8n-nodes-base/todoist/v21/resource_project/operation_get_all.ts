/**
 * Todoist Node - Version 2.1
 * Discriminator: resource=project, operation=getAll
 */


interface Credentials {
  todoistApi: CredentialReference;
  todoistOAuth2Api: CredentialReference;
}

/** Project resource */
export type TodoistV21ProjectGetAllParams = {
  resource: 'project';
  operation: 'getAll';
  authentication?: 'apiKey' | 'oAuth2' | Expression<string>;
};

export type TodoistV21ProjectGetAllNode = {
  type: 'n8n-nodes-base.todoist';
  version: 2.1;
  credentials?: Credentials;
  config: NodeConfig<TodoistV21ProjectGetAllParams>;
};