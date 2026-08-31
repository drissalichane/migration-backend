/**
 * Harvest Node - Version 1
 * Discriminator: resource=timeEntry, operation=createByStartEnd
 */


interface Credentials {
  harvestApi: CredentialReference;
  harvestOAuth2Api: CredentialReference;
}

/** Create a time entry via start and end time */
export type HarvestV1TimeEntryCreateByStartEndParams = {
  resource: 'timeEntry';
  operation: 'createByStartEnd';
  authentication?: 'accessToken' | 'oAuth2' | Expression<string>;
/**
 * Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
 */
    accountId?: string | Expression<string>;
/**
 * The ID of the project to associate with the time entry
 */
    projectId?: string | Expression<string> | PlaceholderValue;
/**
 * The ID of the task to associate with the time entry
 */
    taskId?: string | Expression<string> | PlaceholderValue;
/**
 * The ISO 8601 formatted date the time entry was spent
 */
    spentDate?: string | Expression<string>;
/**
 * Additional Fields
 * @default {}
 */
    additionalFields?: {
    /** The time the entry ended
     */
    ended_time?: string | Expression<string> | PlaceholderValue;
    /** These are notes about the time entry
     */
    notes?: string | Expression<string> | PlaceholderValue;
    /** The time the entry started. Defaults to the current time. Example: “8:00am”.
     */
    started_time?: string | Expression<string> | PlaceholderValue;
    /** The ID of the user to associate with the time entry. Defaults to the currently authenticated user’s ID.
     */
    user_id?: string | Expression<string> | PlaceholderValue;
  };
};

export type HarvestV1TimeEntryCreateByStartEndNode = {
  type: 'n8n-nodes-base.harvest';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<HarvestV1TimeEntryCreateByStartEndParams>;
};