/**
 * Todoist Node - Version 2.2
 * Discriminator: resource=section, operation=update
 */


interface Credentials {
  todoistApi: CredentialReference;
  todoistOAuth2Api: CredentialReference;
}

/** Section resource */
export type TodoistV22SectionUpdateParams = {
  resource: 'section';
  operation: 'update';
  authentication?: 'apiKey' | 'oAuth2' | Expression<string>;
/**
 * Section ID
 */
    sectionId?: string | Expression<string> | PlaceholderValue;
/**
 * Update Fields
 * @default {}
 */
    sectionUpdateFields?: {
    /** Name of the section
     */
    name?: string | Expression<string> | PlaceholderValue;
  };
};

export type TodoistV22SectionUpdateNode = {
  type: 'n8n-nodes-base.todoist';
  version: 2.2;
  credentials?: Credentials;
  config: NodeConfig<TodoistV22SectionUpdateParams>;
};