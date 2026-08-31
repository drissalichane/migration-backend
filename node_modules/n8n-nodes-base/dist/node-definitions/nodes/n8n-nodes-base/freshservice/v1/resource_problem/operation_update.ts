/**
 * Freshservice Node - Version 1
 * Discriminator: resource=problem, operation=update
 */


interface Credentials {
  freshserviceApi: CredentialReference;
}

/** Update an agent */
export type FreshserviceV1ProblemUpdateParams = {
  resource: 'problem';
  operation: 'update';
/**
 * ID of the problem to update
 */
    problemId?: string | Expression<string> | PlaceholderValue;
/**
 * Update Fields
 * @default {}
 */
    updateFields?: {
    /** ID of the agent to whom the problem is assigned. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
     */
    agent_id?: string | Expression<string>;
    /** ID of the department initiating the problem. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
     */
    department_id?: string | Expression<string>;
    /** HTML supported
     */
    description?: string | Expression<string> | PlaceholderValue;
    /** Date when the problem is due to be solved
     */
    due_by?: string | Expression<string>;
    /** ID of the agent group to which the problem is assigned. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
     */
    group_id?: string | Expression<string>;
    /** Impact
     * @default 1
     */
    impact?: 1 | 2 | 3 | Expression<number>;
    /** Priority
     * @default 1
     */
    priority?: 1 | 2 | 3 | 4 | Expression<number>;
    /** ID of the initiator of the problem. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
     */
    requester_id?: string | Expression<string>;
    /** Status
     * @default 1
     */
    status?: 1 | 2 | 3 | Expression<number>;
    /** Subject
     */
    subject?: string | Expression<string> | PlaceholderValue;
  };
};

export type FreshserviceV1ProblemUpdateNode = {
  type: 'n8n-nodes-base.freshservice';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<FreshserviceV1ProblemUpdateParams>;
};