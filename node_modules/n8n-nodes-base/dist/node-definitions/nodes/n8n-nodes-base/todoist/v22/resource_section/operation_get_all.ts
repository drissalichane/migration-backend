/**
 * Todoist Node - Version 2.2
 * Discriminator: resource=section, operation=getAll
 */


interface Credentials {
  todoistApi: CredentialReference;
  todoistOAuth2Api: CredentialReference;
}

/** Section resource */
export type TodoistV22SectionGetAllParams = {
  resource: 'section';
  operation: 'getAll';
  authentication?: 'apiKey' | 'oAuth2' | Expression<string>;
/**
 * Filters
 * @default {}
 */
    sectionFilters?: {
    /** Filter sections by project. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
     */
    project_id?: string | Expression<string>;
  };
};

export type TodoistV22SectionGetAllNode = {
  type: 'n8n-nodes-base.todoist';
  version: 2.2;
  credentials?: Credentials;
  config: NodeConfig<TodoistV22SectionGetAllParams>;
};