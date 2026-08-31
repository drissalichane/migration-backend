/**
 * Salesforce Node - Version 1
 * Discriminator: resource=contact, operation=upsert
 */


interface Credentials {
  salesforceOAuth2Api: CredentialReference;
  salesforceJwtApi: CredentialReference;
}

/** Represents a contact, which is an individual associated with an account */
export type SalesforceV1ContactUpsertParams = {
  resource: 'contact';
  operation: 'upsert';
/**
 * OAuth Authorization Flow
 * @default oAuth2
 */
    authentication?: 'oAuth2' | 'jwt' | Expression<string>;
/**
 * The field to check to see if the contact already exists. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
 */
    externalId?: string | Expression<string>;
/**
 * If this value exists in the 'match against' field, update the contact. Otherwise create a new one.
 */
    externalIdValue?: string | Expression<string> | PlaceholderValue;
/**
 * Required. Last name of the contact. Limited to 80 characters.
 */
    lastname?: string | Expression<string> | PlaceholderValue;
/**
 * Additional Fields
 * @default {}
 */
    additionalFields?: {
    /** ID of the account that is the parent of this contact. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
     */
    acconuntId?: string | Expression<string>;
    /** The name of the assistant
     */
    assistantName?: string | Expression<string> | PlaceholderValue;
    /** The telephone number of the assistant
     */
    'Assistant Phone'?: string | Expression<string> | PlaceholderValue;
    /** The birth date of the contact
     */
    birthdate?: string | Expression<string>;
    /** Filter by custom fields
     * @default {}
     */
    customFieldsUi?: {
        /** Custom Field
     */
    customFieldsValues?: Array<{
      /** The ID of the field to add custom field to. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
       */
      fieldId?: string | Expression<string>;
      /** The value to set on custom field
       */
      value?: string | Expression<string> | PlaceholderValue;
    }>;
  };
    /** The department of the contact
     */
    department?: string | Expression<string> | PlaceholderValue;
    /** A description of the contact. Label is Contact Description. Limit: 32 KB.
     */
    description?: string | Expression<string> | PlaceholderValue;
    /** Email address for the contact
     */
    email?: string | Expression<string> | PlaceholderValue;
    /** If bounce management is activated and an email sent to the contact bounces, the date and time the bounce occurred
     */
    otherPostalCode?: string | Expression<string>;
    /** If bounce management is activated and an email sent to the contact bounces, the reason the bounce occurred
     */
    emailBouncedReason?: string | Expression<string> | PlaceholderValue;
    /** Fax number for the contact. Label is Business Fax.
     */
    fax?: string | Expression<string> | PlaceholderValue;
    /** First name of the contact. Maximum size is 40 characters.
     */
    firstName?: string | Expression<string> | PlaceholderValue;
    /** Home telephone number for the contact
     */
    homePhone?: string | Expression<string> | PlaceholderValue;
    /** References the ID of a contact in Data.com. If a contact has a value in this field, it means that a contact was imported as a contact from Data.com.
     */
    jigsaw?: string | Expression<string> | PlaceholderValue;
    /** Source from which the lead was obtained. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
     */
    leadSource?: string | Expression<string>;
    /** Mailing City
     */
    mailingCity?: string | Expression<string> | PlaceholderValue;
    /** Mailing Country
     */
    mailingCountry?: string | Expression<string> | PlaceholderValue;
    /** Contact’s mobile phone number
     */
    mobilePhone?: string | Expression<string> | PlaceholderValue;
    /** Mailing Postal Code
     */
    mailingPostalCode?: string | Expression<string> | PlaceholderValue;
    /** Mailing State
     */
    mailingState?: string | Expression<string> | PlaceholderValue;
    /** Street address for mailing address
     */
    mailingStreet?: string | Expression<string> | PlaceholderValue;
    /** Other City
     */
    otherCity?: string | Expression<string> | PlaceholderValue;
    /** Other Country
     */
    otherCountry?: string | Expression<string> | PlaceholderValue;
    /** Telephone for alternate address
     */
    otherPhone?: string | Expression<string> | PlaceholderValue;
    /** Other Postal Code
     */
    otherPostalCode?: string | Expression<string> | PlaceholderValue;
    /** Other State
     */
    otherState?: string | Expression<string> | PlaceholderValue;
    /** Street for alternate address
     */
    otherStreet?: string | Expression<string> | PlaceholderValue;
    /** The owner of the contact. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
     */
    owner?: string | Expression<string>;
    /** Phone number for the contact
     */
    phone?: string | Expression<string> | PlaceholderValue;
    /** Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
     */
    recordTypeId?: string | Expression<string>;
    /** Honorific abbreviation, word, or phrase to be used in front of name in greetings, such as Dr. or Mrs.
     */
    salutation?: string | Expression<string> | PlaceholderValue;
    /** Title of the contact such as CEO or Vice President
     */
    title?: string | Expression<string> | PlaceholderValue;
  };
};

export type SalesforceV1ContactUpsertOutput = {
  created?: boolean;
  id?: string;
  success?: boolean;
};

export type SalesforceV1ContactUpsertNode = {
  type: 'n8n-nodes-base.salesforce';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<SalesforceV1ContactUpsertParams>;
  output?: Items<SalesforceV1ContactUpsertOutput>;
};