/**
 * Todoist Node - Version 2
 * Discriminator: resource=section, operation=get
 */


interface Credentials {
  todoistApi: CredentialReference;
  todoistOAuth2Api: CredentialReference;
}

/** Section resource */
export type TodoistV2SectionGetParams = {
  resource: 'section';
  operation: 'get';
  authentication?: 'apiKey' | 'oAuth2' | Expression<string>;
/**
 * Section ID
 */
    sectionId?: string | Expression<string> | PlaceholderValue;
};

export type TodoistV2SectionGetNode = {
  type: 'n8n-nodes-base.todoist';
  version: 2;
  credentials?: Credentials;
  config: NodeConfig<TodoistV2SectionGetParams>;
};