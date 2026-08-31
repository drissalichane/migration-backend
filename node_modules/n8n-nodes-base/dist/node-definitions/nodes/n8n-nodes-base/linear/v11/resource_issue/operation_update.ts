/**
 * Linear Node - Version 1.1
 * Discriminator: resource=issue, operation=update
 */


interface Credentials {
  linearApi: CredentialReference;
  linearOAuth2Api: CredentialReference;
}

/** Update an issue */
export type LinearV11IssueUpdateParams = {
  resource: 'issue';
  operation: 'update';
  authentication?: 'apiToken' | 'oAuth2' | Expression<string>;
/**
 * Issue ID
 */
    issueId?: string | Expression<string> | PlaceholderValue;
/**
 * Update Fields
 * @default {}
 */
    updateFields?: {
    /** Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
     */
    assigneeId?: string | Expression<string>;
    /** Description
     */
    description?: string | Expression<string> | PlaceholderValue;
    /** Priority Name/ID
     * @default 0
     */
    priorityId?: 1 | 2 | 3 | 4 | 0 | Expression<number>;
    /** Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
     */
    stateId?: string | Expression<string>;
    /** Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
     */
    teamId?: string | Expression<string>;
    /** Title
     */
    title?: string | Expression<string> | PlaceholderValue;
  };
};

export type LinearV11IssueUpdateOutput = {
  createdAt?: string;
  creator?: {
    displayName?: string;
    id?: string;
  };
  id?: string;
  identifier?: string;
  priority?: number;
  state?: {
    id?: string;
    name?: string;
  };
  title?: string;
};

export type LinearV11IssueUpdateNode = {
  type: 'n8n-nodes-base.linear';
  version: 1.1;
  credentials?: Credentials;
  config: NodeConfig<LinearV11IssueUpdateParams>;
  output?: Items<LinearV11IssueUpdateOutput>;
};