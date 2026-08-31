/**
 * Mautic Node - Version 1
 * Discriminator: resource=contact, operation=update
 */


interface Credentials {
  mauticApi: CredentialReference;
  mauticOAuth2Api: CredentialReference;
}

/** Create & modify contacts */
export type MauticV1ContactUpdateParams = {
  resource: 'contact';
  operation: 'update';
  authentication?: 'credentials' | 'oAuth2' | Expression<string>;
/**
 * Contact ID
 */
    contactId?: string | Expression<string> | PlaceholderValue;
/**
 * JSON Parameters
 * @default false
 */
    jsonParameters?: boolean | Expression<boolean>;
/**
 * Update Fields
 * @default {}
 */
    updateFields?: {
    /** Contact parameters
     * @displayOptions.show { /jsonParameters: [true] }
     */
    bodyJson?: IDataObject | string | Expression<string>;
    /** Address
     * @displayOptions.show { /jsonParameters: [false] }
     * @default {}
     */
    addressUi?: {
        /** Address
     */
    addressValues?: {
      /** Address Line 1
       */
      address1?: string | Expression<string> | PlaceholderValue;
      /** Address Line 2
       */
      address2?: string | Expression<string> | PlaceholderValue;
      /** City
       */
      city?: string | Expression<string> | PlaceholderValue;
      /** State
       */
      state?: string | Expression<string> | PlaceholderValue;
      /** Country
       */
      country?: string | Expression<string> | PlaceholderValue;
      /** Zip Code
       */
      zipCode?: string | Expression<string> | PlaceholderValue;
    };
  };
    /** B2B or B2C
     * @displayOptions.show { /jsonParameters: [false] }
     */
    b2bOrb2c?: 'B2B' | 'B2C' | Expression<string>;
    /** CRM ID
     * @displayOptions.show { /jsonParameters: [false] }
     */
    crmId?: string | Expression<string> | PlaceholderValue;
    /** Adds a custom fields to set also values which have not been predefined
     * @default {}
     */
    customFieldsUi?: {
        /** Field
     */
    customFieldValues?: Array<{
      /** ID of the field to set. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
       */
      fieldId?: string | Expression<string>;
      /** Value of the field to set
       */
      fieldValue?: string | Expression<string> | PlaceholderValue;
    }>;
  };
    /** Email address of the contact
     * @displayOptions.show { /jsonParameters: [false] }
     */
    email?: string | Expression<string> | PlaceholderValue;
    /** Fax
     * @displayOptions.show { /jsonParameters: [false] }
     */
    fax?: string | Expression<string> | PlaceholderValue;
    /** First Name
     * @displayOptions.show { /jsonParameters: [false] }
     */
    firstName?: string | Expression<string> | PlaceholderValue;
    /** Has Purchased
     * @displayOptions.show { /jsonParameters: [false] }
     * @default false
     */
    hasPurchased?: boolean | Expression<boolean>;
    /** IP address to associate with the contact
     * @displayOptions.show { /jsonParameters: [false] }
     */
    ipAddress?: string | Expression<string> | PlaceholderValue;
    /** Date/time in UTC;
     * @displayOptions.show { /jsonParameters: [false] }
     */
    lastActive?: string | Expression<string>;
    /** LastName
     * @displayOptions.show { /jsonParameters: [false] }
     */
    lastName?: string | Expression<string> | PlaceholderValue;
    /** Mobile
     * @displayOptions.show { /jsonParameters: [false] }
     */
    mobile?: string | Expression<string> | PlaceholderValue;
    /** ID of a Mautic user to assign this contact to
     * @displayOptions.show { /jsonParameters: [false] }
     */
    ownerId?: string | Expression<string> | PlaceholderValue;
    /** Phone
     * @displayOptions.show { /jsonParameters: [false] }
     */
    phone?: string | Expression<string> | PlaceholderValue;
    /** Position
     * @displayOptions.show { /jsonParameters: [false] }
     */
    position?: string | Expression<string> | PlaceholderValue;
    /** Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
     * @displayOptions.show { /jsonParameters: [false] }
     */
    company?: string | Expression<string>;
    /** Prospect or Customer
     * @displayOptions.show { /jsonParameters: [false] }
     */
    prospectOrCustomer?: 'Prospect' | 'Customer' | Expression<string>;
    /** Sandbox
     * @displayOptions.show { /jsonParameters: [false] }
     * @default false
     */
    sandbox?: boolean | Expression<boolean>;
    /** Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
     * @displayOptions.show { /jsonParameters: [false] }
     */
    stage?: string | Expression<string>;
    /** Choose from the list, or specify IDs using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
     * @displayOptions.show { /jsonParameters: [false] }
     * @default []
     */
    tags?: string[];
    /** Title
     * @displayOptions.show { /jsonParameters: [false] }
     */
    title?: string | Expression<string> | PlaceholderValue;
    /** Social Media
     * @displayOptions.show { /jsonParameters: [false] }
     * @default {}
     */
    socialMediaUi?: {
        /** Social Media
     */
    socialMediaValues?: {
      /** Facebook
       */
      facebook?: string | Expression<string> | PlaceholderValue;
      /** Foursquare
       */
      foursquare?: string | Expression<string> | PlaceholderValue;
      /** Instagram
       */
      instagram?: string | Expression<string> | PlaceholderValue;
      /** LinkedIn
       */
      linkedIn?: string | Expression<string> | PlaceholderValue;
      /** Skype
       */
      skype?: string | Expression<string> | PlaceholderValue;
      /** Twitter
       */
      twitter?: string | Expression<string> | PlaceholderValue;
    };
  };
    /** Website
     * @displayOptions.show { /jsonParameters: [false] }
     */
    website?: string | Expression<string> | PlaceholderValue;
    /** IP address to associate with the contact
     * @displayOptions.show { /jsonParameters: [false] }
     */
    ipAddress?: string | Expression<string> | PlaceholderValue;
  };
/**
 * Options
 * @displayOptions.hide { operation: ["sendEmail", "editDoNotContactList", "editContactPoint"] }
 * @default {}
 */
    options?: {
    /** String or search command to filter entities by
     * @displayOptions.show { /operation: ["getAll"] }
     */
    search?: string | Expression<string> | PlaceholderValue;
    /** Column to sort by. Can use any column listed in the response.
     * @displayOptions.show { /operation: ["getAll"] }
     */
    orderBy?: string | Expression<string> | PlaceholderValue;
    /** Sort direction: ASC or DESC
     * @displayOptions.show { /operation: ["getAll"] }
     */
    orderByDir?: 'asc' | 'desc' | Expression<string>;
    /** Whether to return currently published entities
     * @displayOptions.show { /operation: ["getAll"] }
     * @default false
     */
    publishedOnly?: boolean | Expression<boolean>;
    /** Whether to return array of entities without additional lists in it
     * @displayOptions.show { /operation: ["getAll"] }
     * @default false
     */
    minimal?: boolean | Expression<boolean>;
    /** By default only the data of the fields get returned. If this options gets set the RAW response with all data gets returned.
     * @default true
     */
    rawData?: boolean | Expression<boolean>;
  };
};

export type MauticV1ContactUpdateNode = {
  type: 'n8n-nodes-base.mautic';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<MauticV1ContactUpdateParams>;
};