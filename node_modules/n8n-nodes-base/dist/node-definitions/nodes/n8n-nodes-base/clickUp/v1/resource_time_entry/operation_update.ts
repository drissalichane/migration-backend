/**
 * ClickUp Node - Version 1
 * Discriminator: resource=timeEntry, operation=update
 */


interface Credentials {
  clickUpApi: CredentialReference;
  clickUpOAuth2Api: CredentialReference;
}

/** Update a checklist */
export type ClickUpV1TimeEntryUpdateParams = {
  resource: 'timeEntry';
  operation: 'update';
  authentication?: 'accessToken' | 'oAuth2' | Expression<string>;
/**
 * Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
 */
    team?: string | Expression<string>;
/**
 * Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
 */
    space?: string | Expression<string>;
/**
 * Folderless List
 * @default false
 */
    folderless?: boolean | Expression<boolean>;
/**
 * Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
 * @displayOptions.show { folderless: [false] }
 */
    folder?: string | Expression<string>;
/**
 * Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
 * @displayOptions.show { folderless: [true] }
 */
    list?: string | Expression<string>;
/**
 * Archived
 * @default false
 */
    archived?: boolean | Expression<boolean>;
/**
 * Time Entry ID
 */
    timeEntry?: string | Expression<string> | PlaceholderValue;
/**
 * Update Fields
 * @default {}
 */
    updateFields?: {
    /** Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
     * @default []
     */
    assignee?: string | Expression<string>;
    /** Billable
     * @default true
     */
    billable?: boolean | Expression<boolean>;
    /** Description of the time entry
     */
    description?: string | Expression<string> | PlaceholderValue;
    /** Duration in minutes
     * @default 0
     */
    duration?: number | Expression<number>;
    /** Start
     */
    start?: string | Expression<string>;
    /** Choose from the list, or specify IDs using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
     * @default []
     */
    tags?: string[];
    /** Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
     */
    task?: string | Expression<string>;
  };
};

export type ClickUpV1TimeEntryUpdateNode = {
  type: 'n8n-nodes-base.clickUp';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<ClickUpV1TimeEntryUpdateParams>;
};