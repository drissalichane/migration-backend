/**
 * Todoist Node - Version 2
 * Discriminator: resource=project, operation=getAll
 */


interface Credentials {
  todoistApi: CredentialReference;
  todoistOAuth2Api: CredentialReference;
}

/** Project resource */
export type TodoistV2ProjectGetAllParams = {
  resource: 'project';
  operation: 'getAll';
  authentication?: 'apiKey' | 'oAuth2' | Expression<string>;
};

export type TodoistV2ProjectGetAllNode = {
  type: 'n8n-nodes-base.todoist';
  version: 2;
  credentials?: Credentials;
  config: NodeConfig<TodoistV2ProjectGetAllParams>;
};