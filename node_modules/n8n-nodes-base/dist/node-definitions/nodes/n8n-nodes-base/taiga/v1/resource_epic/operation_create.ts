/**
 * Taiga Node - Version 1
 * Discriminator: resource=epic, operation=create
 */


interface Credentials {
  taigaApi: CredentialReference;
}

/** Create an epic */
export type TaigaV1EpicCreateParams = {
  resource: 'epic';
  operation: 'create';
/**
 * ID of the project to which the epic belongs. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
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
    /** ID of the user to assign the epic to. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
     */
    assigned_to?: string | Expression<string>;
    /** Reason why the epic is blocked. Requires "Is Blocked" toggle to be enabled.
     */
    blocked_note?: string | Expression<string> | PlaceholderValue;
    /** Color code in hexadecimal notation
     * @default 0000FF
     */
    color?: string | Expression<string>;
    /** Description
     */
    description?: string | Expression<string> | PlaceholderValue;
    /** Whether the issue is blocked
     * @default false
     */
    is_blocked?: boolean | Expression<boolean>;
    /** Choose from the list, or specify IDs using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
     * @default []
     */
    tags?: string[];
  };
};

export type TaigaV1EpicCreateNode = {
  type: 'n8n-nodes-base.taiga';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<TaigaV1EpicCreateParams>;
};