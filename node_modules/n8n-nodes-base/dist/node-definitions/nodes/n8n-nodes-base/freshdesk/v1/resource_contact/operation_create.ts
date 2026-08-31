/**
 * Freshdesk Node - Version 1
 * Discriminator: resource=contact, operation=create
 */


interface Credentials {
  freshdeskApi: CredentialReference;
}

/** Create a new ticket */
export type FreshdeskV1ContactCreateParams = {
  resource: 'contact';
  operation: 'create';
/**
 * Name of the contact
 */
    name?: string | Expression<string> | PlaceholderValue;
/**
 * Primary email address of the contact. If you want to associate additional email(s) with this contact, use the other_emails attribute.
 */
    email?: string | Expression<string> | PlaceholderValue;
/**
 * Additional Fields
 * @default {}
 */
    additionalFields?: {
    /** Address of the contact
     */
    address?: string | Expression<string> | PlaceholderValue;
    /** ID of the primary company to which this contact belongs
     */
    company_id?: number | Expression<number>;
    /** Key value pairs containing the name and value of the custom field. Only dates in the format YYYY-MM-DD are accepted as input for custom date fields.
     * @default []
     */
    customFields?: {
        /** Custom Field
     */
    customField?: Array<{
      /** Custom Field's name
       */
      name?: string | Expression<string> | PlaceholderValue;
      /** Custom Field's values
       */
      value?: string | Expression<string> | PlaceholderValue;
    }>;
  };
    /** A small description of the contact
     */
    description?: string | Expression<string> | PlaceholderValue;
    /** Primary email address of the contact. If you want to associate additional email(s) with this contact, use the other_emails attribute.
     * @displayOptions.show { /operation: ["update"] }
     */
    email?: string | Expression<string> | PlaceholderValue;
    /** Job title of the contact
     */
    job_title?: string | Expression<string> | PlaceholderValue;
    /** Language of the contact. Default language is "en". This attribute can only be set if the Multiple Language feature is enabled (Garden plan and above).
     */
    language?: string | Expression<string> | PlaceholderValue;
    /** Mobile number of the contact
     */
    mobile?: string | Expression<string> | PlaceholderValue;
    /** Name of the contact
     * @displayOptions.show { /operation: ["update"] }
     */
    name?: string | Expression<string> | PlaceholderValue;
    /** Additional companies associated with the contact. This attribute can only be set if the Multiple Companies feature is enabled (Estate plan and above).
     * @default []
     */
    other_companies?: string | Expression<string> | PlaceholderValue;
    /** Additional emails associated with the contact
     * @default []
     */
    other_emails?: string | Expression<string> | PlaceholderValue;
    /** Telephone number of the contact
     */
    phone?: string | Expression<string> | PlaceholderValue;
    /** Tags associated with this contact
     * @default []
     */
    tags?: string | Expression<string> | PlaceholderValue;
    /** Time zone of the contact. Default value is the time zone of the domain. This attribute can only be set if the Multiple Time Zone feature is enabled (Garden plan and above).
     */
    time_zone?: string | Expression<string> | PlaceholderValue;
    /** Twitter handle of the contact
     */
    twitter_id?: string | Expression<string> | PlaceholderValue;
    /** External ID of the contact
     */
    unique_external_id?: string | Expression<string> | PlaceholderValue;
    /** Whether the contact can see all the tickets that are associated with the company to which they belong
     * @default false
     */
    view_all_tickets?: boolean | Expression<boolean>;
  };
};

export type FreshdeskV1ContactCreateNode = {
  type: 'n8n-nodes-base.freshdesk';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<FreshdeskV1ContactCreateParams>;
};