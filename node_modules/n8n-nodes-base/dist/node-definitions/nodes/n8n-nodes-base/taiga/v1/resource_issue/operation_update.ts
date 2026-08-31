/**
 * Taiga Node - Version 1
 * Discriminator: resource=issue, operation=update
 */


interface Credentials {
  taigaApi: CredentialReference;
}

/** Update an epic */
export type TaigaV1IssueUpdateParams = {
  resource: 'issue';
  operation: 'update';
/**
 * ID of the project to set the issue to. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
 */
    projectId?: string | Expression<string>;
/**
 * ID of the issue to update
 */
    issueId?: string | Expression<string> | PlaceholderValue;
/**
 * Update Fields
 * @default {}
 */
    updateFields?: {
    /** ID of the user whom the issue is assigned to. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
     */
    assigned_to?: string | Expression<string>;
    /** Reason why the issue is blocked. Requires "Is Blocked" toggle to be enabled.
     */
    blocked_note?: string | Expression<string> | PlaceholderValue;
    /** Description
     */
    description?: string | Expression<string> | PlaceholderValue;
    /** Whether the issue is blocked
     * @default false
     */
    is_blocked?: boolean | Expression<boolean>;
    /** ID of the milestone of the issue. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
     */
    milestone?: string | Expression<string>;
    /** Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
     */
    priority?: string | Expression<string>;
    /** Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
     */
    severity?: string | Expression<string>;
    /** ID of the status of the issue. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
     */
    status?: string | Expression<string>;
    /** Subject
     */
    subject?: string | Expression<string> | PlaceholderValue;
    /** Choose from the list, or specify IDs using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
     * @default []
     */
    tags?: string[];
    /** Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
     */
    type?: string | Expression<string>;
  };
};

export type TaigaV1IssueUpdateNode = {
  type: 'n8n-nodes-base.taiga';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<TaigaV1IssueUpdateParams>;
};