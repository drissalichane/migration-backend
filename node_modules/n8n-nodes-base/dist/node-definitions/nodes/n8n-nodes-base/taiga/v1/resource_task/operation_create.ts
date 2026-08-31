/**
 * Taiga Node - Version 1
 * Discriminator: resource=task, operation=create
 */


interface Credentials {
  taigaApi: CredentialReference;
}

/** Create an epic */
export type TaigaV1TaskCreateParams = {
  resource: 'task';
  operation: 'create';
/**
 * ID of the project to which the task belongs. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
 */
    projectId?: string | Expression<string>;
/**
 * Subject
 */
    subject?: string | Expression<string> | PlaceholderValue;
/**
 * Additional Fields
 * @default {}
 */
    additionalFields?: {
    /** ID of the user to whom the task is assigned. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
     */
    assigned_to?: string | Expression<string>;
    /** Reason why the task is blocked. Requires "Is Blocked" toggle to be enabled.
     */
    blocked_note?: string | Expression<string> | PlaceholderValue;
    /** Description
     */
    description?: string | Expression<string> | PlaceholderValue;
    /** Whether the task is blocked
     * @default false
     */
    is_blocked?: boolean | Expression<boolean>;
    /** ID of the milestone of the task. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
     */
    milestone?: string | Expression<string>;
    /** ID of the status of the task. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
     */
    status?: string | Expression<string>;
    /** Choose from the list, or specify IDs using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
     * @default []
     */
    tags?: string[];
    /** Order of the task in the taskboard
     * @default 1
     */
    taskboard_order?: number | Expression<number>;
    /** ID of the user story of the task. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
     */
    user_story?: string | Expression<string>;
    /** Order of the task in the user story
     * @default 1
     */
    us_order?: number | Expression<number>;
  };
};

export type TaigaV1TaskCreateNode = {
  type: 'n8n-nodes-base.taiga';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<TaigaV1TaskCreateParams>;
};