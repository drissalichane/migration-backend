/**
 * LoneScale Node - Version 1
 * Discriminator: resource=item, operation=add
 */


interface Credentials {
  loneScaleApi: CredentialReference;
}

/** Manipulate item */
export type LoneScaleV1ItemAddParams = {
  resource: 'item';
  operation: 'add';
/**
 * Type of your list
 * @default PEOPLE
 */
    type?: 'COMPANY' | 'PEOPLE';
/**
 * Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
 */
    list?: string | Expression<string>;
/**
 * Contact first name
 * @displayOptions.show { type: ["PEOPLE"] }
 */
    first_name?: string | Expression<string> | PlaceholderValue;
/**
 * Contact last name
 * @displayOptions.show { type: ["PEOPLE"] }
 */
    last_name?: string | Expression<string> | PlaceholderValue;
/**
 * Contact company name
 * @displayOptions.show { type: ["COMPANY"] }
 */
    company_name?: string | Expression<string> | PlaceholderValue;
/**
 * Additional Fields
 * @displayOptions.show { type: ["PEOPLE"] }
 * @default {}
 */
    peopleAdditionalFields?: {
    /** Contact full name
     */
    full_name?: string | Expression<string> | PlaceholderValue;
    /** Contact Email
     */
    email?: string | Expression<string> | PlaceholderValue;
    /** Contact company name
     */
    company_name?: string | Expression<string> | PlaceholderValue;
    /** Contact current position
     */
    current_position?: string | Expression<string> | PlaceholderValue;
    /** Contact company domain
     */
    domain?: string | Expression<string> | PlaceholderValue;
    /** Contact Linkedin URL
     */
    linkedin_url?: string | Expression<string> | PlaceholderValue;
    /** Contact Location
     */
    location?: string | Expression<string> | PlaceholderValue;
    /** Contact ID from your source
     */
    contact_id?: string | Expression<string> | PlaceholderValue;
  };
/**
 * Additional Fields
 * @displayOptions.show { type: ["COMPANY"] }
 * @default {}
 */
    companyAdditionalFields?: {
    /** Company Linkedin URL
     */
    linkedin_url?: string | Expression<string> | PlaceholderValue;
    /** Company company domain
     */
    domain?: string | Expression<string> | PlaceholderValue;
    /** Contact Location
     */
    location?: string | Expression<string> | PlaceholderValue;
    /** Contact ID from your source
     */
    contact_id?: string | Expression<string> | PlaceholderValue;
  };
};

export type LoneScaleV1ItemAddNode = {
  type: 'n8n-nodes-base.loneScale';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<LoneScaleV1ItemAddParams>;
};