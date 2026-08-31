/**
 * Todoist Node - Version 2.2
 * Discriminator: resource=section, operation=delete
 */


interface Credentials {
  todoistApi: CredentialReference;
  todoistOAuth2Api: CredentialReference;
}

/** Section resource */
export type TodoistV22SectionDeleteParams = {
  resource: 'section';
  operation: 'delete';
  authentication?: 'apiKey' | 'oAuth2' | Expression<string>;
/**
 * Section ID
 */
    sectionId?: string | Expression<string> | PlaceholderValue;
};

export type TodoistV22SectionDeleteNode = {
  type: 'n8n-nodes-base.todoist';
  version: 2.2;
  credentials?: Credentials;
  config: NodeConfig<TodoistV22SectionDeleteParams>;
};