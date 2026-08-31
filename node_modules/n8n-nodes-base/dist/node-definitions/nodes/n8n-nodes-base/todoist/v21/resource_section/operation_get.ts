/**
 * Todoist Node - Version 2.1
 * Discriminator: resource=section, operation=get
 */


interface Credentials {
  todoistApi: CredentialReference;
  todoistOAuth2Api: CredentialReference;
}

/** Section resource */
export type TodoistV21SectionGetParams = {
  resource: 'section';
  operation: 'get';
  authentication?: 'apiKey' | 'oAuth2' | Expression<string>;
/**
 * Section ID
 */
    sectionId?: string | Expression<string> | PlaceholderValue;
};

export type TodoistV21SectionGetNode = {
  type: 'n8n-nodes-base.todoist';
  version: 2.1;
  credentials?: Credentials;
  config: NodeConfig<TodoistV21SectionGetParams>;
};