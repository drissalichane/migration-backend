/**
 * Taiga Node - Version 1
 * Discriminator: resource=epic, operation=update
 */


interface Credentials {
  taigaApi: CredentialReference;
}

/** Update an epic */
export type TaigaV1EpicUpdateParams = {
  resource: 'epic';
  operation: 'update';
/**
 * ID of the project to set the epic to. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
 */
    projectId?: string | Expression<string>;
/**
 * ID of the epic to update
 */
    epicId?: string | Expression<string> | PlaceholderValue;
/**
 * Update Fields
 * @default {}
 */
    updateFields?: {
    /** ID of the user to whom the epic is assigned. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
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
    /** Whether the epic is blocked
     * @default false
     */
    is_blocked?: boolean | Expression<boolean>;
    /** Subject
     */
    subject?: string | Expression<string> | PlaceholderValue;
    /** Choose from the list, or specify IDs using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
     * @default []
     */
    tags?: string[];
  };
};

export type TaigaV1EpicUpdateNode = {
  type: 'n8n-nodes-base.taiga';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<TaigaV1EpicUpdateParams>;
};