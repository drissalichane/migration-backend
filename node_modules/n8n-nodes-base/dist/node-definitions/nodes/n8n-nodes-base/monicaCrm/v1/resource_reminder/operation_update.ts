/**
 * Monica CRM Node - Version 1
 * Discriminator: resource=reminder, operation=update
 */


interface Credentials {
  monicaCrmApi: CredentialReference;
}

/** Update an activity */
export type MonicaCrmV1ReminderUpdateParams = {
  resource: 'reminder';
  operation: 'update';
/**
 * ID of the reminder to update
 */
    reminderId?: string | Expression<string> | PlaceholderValue;
/**
 * Update Fields
 * @default {}
 */
    updateFields?: {
    /** ID of the contact to associate the reminder with
     */
    contact_id?: string | Expression<string> | PlaceholderValue;
    /** Description about the reminder - Max 100,000 characters
     */
    description?: string | Expression<string> | PlaceholderValue;
    /** Frequency of the reminder
     * @default one_time
     */
    frequency_type?: 'one_time' | 'week' | 'month' | 'year' | Expression<string>;
    /** Date of the reminder
     */
    initial_data?: string | Expression<string>;
    /** Interval for the reminder
     * @displayOptions.show { frequency_type: ["week", "month", "year"] }
     * @default 0
     */
    frequency_number?: number | Expression<number>;
    /** Title of the reminder - max 100,000 characters
     */
    title?: string | Expression<string> | PlaceholderValue;
  };
};

export type MonicaCrmV1ReminderUpdateNode = {
  type: 'n8n-nodes-base.monicaCrm';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<MonicaCrmV1ReminderUpdateParams>;
};