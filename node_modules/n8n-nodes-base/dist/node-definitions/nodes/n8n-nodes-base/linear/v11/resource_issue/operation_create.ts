/**
 * Linear Node - Version 1.1
 * Discriminator: resource=issue, operation=create
 */


interface Credentials {
  linearApi: CredentialReference;
  linearOAuth2Api: CredentialReference;
}

/** Create an issue */
export type LinearV11IssueCreateParams = {
  resource: 'issue';
  operation: 'create';
  authentication?: 'apiToken' | 'oAuth2' | Expression<string>;
/**
 * Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
 */
    teamId?: string | Expression<string>;
/**
 * Title
 */
    title?: string | Expression<string> | PlaceholderValue;
/**
 * Additional Fields
 * @default {}
 */
    additionalFields?: {
    /** Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
     */
    assigneeId?: string | Expression<string>;
    /** Description
     */
    description?: string | Expression<string> | PlaceholderValue;
    /** Priority
     * @default 0
     */
    priorityId?: 1 | 2 | 3 | 4 | 0 | Expression<number>;
    /** Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
     */
    stateId?: string | Expression<string>;
  };
};

export type LinearV11IssueCreateOutput = {
  archivedAt?: null;
  createdAt?: string;
  creator?: {
    displayName?: string;
    id?: string;
  };
  dueDate?: null;
  id?: string;
  identifier?: string;
  priority?: number;
  state?: {
    id?: string;
    name?: string;
  };
  title?: string;
};

export type LinearV11IssueCreateNode = {
  type: 'n8n-nodes-base.linear';
  version: 1.1;
  credentials?: Credentials;
  config: NodeConfig<LinearV11IssueCreateParams>;
  output?: Items<LinearV11IssueCreateOutput>;
};