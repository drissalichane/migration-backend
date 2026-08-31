/**
 * Autopilot Node - Version 1
 * Discriminator: resource=contact, operation=upsert
 */


interface Credentials {
  autopilotApi: CredentialReference;
}

/** Create a new contact, or update the current one if it already exists (upsert) */
export type AutopilotV1ContactUpsertParams = {
  resource: 'contact';
  operation: 'upsert';
/**
 * Email address of the contact
 */
    email?: string | Expression<string> | PlaceholderValue;
/**
 * Additional Fields
 * @default {}
 */
    additionalFields?: {
    /** Company
     */
    Company?: string | Expression<string> | PlaceholderValue;
    /** Custom Fields
     * @default {}
     */
    customFieldsUi?: string | Expression<string>;
    /** Fax
     */
    Fax?: string | Expression<string> | PlaceholderValue;
    /** First Name
     */
    FirstName?: string | Expression<string> | PlaceholderValue;
    /** Industry
     */
    Industry?: string | Expression<string> | PlaceholderValue;
    /** Last Name
     */
    LastName?: string | Expression<string> | PlaceholderValue;
    /** Lead Source
     */
    LeadSource?: string | Expression<string> | PlaceholderValue;
    /** LinkedIn URL
     */
    LinkedIn?: string | Expression<string> | PlaceholderValue;
    /** List to which this contact will be added on creation. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
     */
    autopilotList?: string | Expression<string>;
    /** Mailing Country
     */
    MailingCountry?: string | Expression<string> | PlaceholderValue;
    /** Mailing Postal Code
     */
    MailingPostalCode?: string | Expression<string> | PlaceholderValue;
    /** Mailing State
     */
    MailingState?: string | Expression<string> | PlaceholderValue;
    /** Mailing Street
     */
    MailingStreet?: string | Expression<string> | PlaceholderValue;
    /** Mailing City
     */
    MailingCity?: string | Expression<string> | PlaceholderValue;
    /** Mobile Phone
     */
    MobilePhone?: string | Expression<string> | PlaceholderValue;
    /** If provided, will change the email address of the contact identified by the Email field
     */
    newEmail?: string | Expression<string> | PlaceholderValue;
    /** By default Autopilot notifies registered REST hook endpoints for contact_added/contact_updated events when a new contact is added or an existing contact is updated via API. Disable to skip notifications.
     * @default true
     */
    notify?: boolean | Expression<boolean>;
    /** Number of Employees
     * @default 0
     */
    NumberOfEmployees?: number | Expression<number>;
    /** Owner Name
     */
    owner_name?: string | Expression<string> | PlaceholderValue;
    /** Phone
     */
    Phone?: string | Expression<string> | PlaceholderValue;
    /** Salutation
     */
    Salutation?: string | Expression<string> | PlaceholderValue;
    /** Used to associate a contact with a session
     */
    autopilotSessionId?: string | Expression<string> | PlaceholderValue;
    /** Status
     */
    Status?: string | Expression<string> | PlaceholderValue;
    /** Title
     */
    Title?: string | Expression<string> | PlaceholderValue;
    /** Whether to subscribe or un-subscribe a contact
     * @default false
     */
    unsubscribed?: boolean | Expression<boolean>;
    /** Website URL
     */
    Website?: string | Expression<string> | PlaceholderValue;
  };
};

export type AutopilotV1ContactUpsertNode = {
  type: 'n8n-nodes-base.autopilot';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<AutopilotV1ContactUpsertParams>;
};