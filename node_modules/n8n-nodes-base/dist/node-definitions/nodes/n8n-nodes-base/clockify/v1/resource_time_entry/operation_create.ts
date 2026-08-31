/**
 * Clockify Node - Version 1
 * Discriminator: resource=timeEntry, operation=create
 */


interface Credentials {
  clockifyApi: CredentialReference;
}

/** Create a client */
export type ClockifyV1TimeEntryCreateParams = {
  resource: 'timeEntry';
  operation: 'create';
/**
 * Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
 * @displayOptions.hide { resource: ["workspace"] }
 * @default []
 */
    workspaceId?: string | Expression<string>;
/**
 * Start
 */
    start?: string | Expression<string>;
/**
 * Additional Fields
 * @default {}
 */
    additionalFields?: {
    /** Billable
     * @default false
     */
    billable?: boolean | Expression<boolean>;
    /** Filter by custom fields
     * @default {}
     */
    customFieldsUi?: {
        /** Custom Field
     */
    customFieldsValues?: Array<{
      /** The ID of the field to add custom field to. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
       */
      customFieldId?: string | Expression<string>;
      /** The value to set on custom field
       */
      value?: string | Expression<string> | PlaceholderValue;
    }>;
  };
    /** Description
     */
    description?: string | Expression<string> | PlaceholderValue;
    /** End
     */
    end?: string | Expression<string>;
    /** Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
     */
    projectId?: string | Expression<string>;
    /** Choose from the list, or specify IDs using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
     * @default []
     */
    tagIds?: string[];
    /** Task ID
     */
    taskId?: string | Expression<string> | PlaceholderValue;
  };
};

export type ClockifyV1TimeEntryCreateOutput = {
  billable?: boolean;
  customFieldValues?: Array<{
    customFieldId?: string;
    name?: string;
    timeEntryId?: string;
    type?: string;
    value?: null;
  }>;
  id?: string;
  isLocked?: boolean;
  kioskId?: null;
  timeInterval?: {
    start?: string;
  };
  type?: string;
  userId?: string;
  workspaceId?: string;
};

export type ClockifyV1TimeEntryCreateNode = {
  type: 'n8n-nodes-base.clockify';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<ClockifyV1TimeEntryCreateParams>;
  output?: Items<ClockifyV1TimeEntryCreateOutput>;
};