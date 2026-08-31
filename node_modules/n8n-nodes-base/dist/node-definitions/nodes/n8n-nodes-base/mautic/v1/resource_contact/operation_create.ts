/**
 * Mautic Node - Version 1
 * Discriminator: resource=contact, operation=create
 */


interface Credentials {
  mauticApi: CredentialReference;
  mauticOAuth2Api: CredentialReference;
}

/** Create & modify contacts */
export type MauticV1ContactCreateParams = {
  resource: 'contact';
  operation: 'create';
  authentication?: 'credentials' | 'oAuth2' | Expression<string>;
/**
 * JSON Parameters
 * @default false
 */
    jsonParameters?: boolean | Expression<boolean>;
/**
 * Email address of the contact
 * @displayOptions.show { jsonParameters: [false] }
 */
    email?: string | Expression<string> | PlaceholderValue;
/**
 * First Name
 * @displayOptions.show { jsonParameters: [false] }
 */
    firstName?: string | Expression<string> | PlaceholderValue;
/**
 * Last Name
 * @displayOptions.show { jsonParameters: [false] }
 */
    lastName?: string | Expression<string> | PlaceholderValue;
/**
 * Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
 * @displayOptions.show { jsonParameters: [false] }
 */
    company?: string | Expression<string>;
/**
 * Position
 * @displayOptions.show { jsonParameters: [false] }
 */
    position?: string | Expression<string> | PlaceholderValue;
/**
 * Title
 * @displayOptions.show { jsonParameters: [false] }
 */
    title?: string | Expression<string> | PlaceholderValue;
/**
 * Contact parameters
 * @displayOptions.show { jsonParameters: [true] }
 */
    bodyJson?: IDataObject | string | Expression<string>;
/**
 * Additional Fields
 * @default {}
 */
    additionalFields?: {
    /** Address
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
     */
    b2bOrb2c?: 'B2B' | 'B2C' | Expression<string>;
    /** CRM ID
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
    /** Fax
     */
    fax?: string | Expression<string> | PlaceholderValue;
    /** Has Purchased
     * @default false
     */
    hasPurchased?: boolean | Expression<boolean>;
    /** IP address to associate with the contact
     */
    ipAddress?: string | Expression<string> | PlaceholderValue;
    /** Date/time in UTC;
     */
    lastActive?: string | Expression<string>;
    /** Mobile
     */
    mobile?: string | Expression<string> | PlaceholderValue;
    /** ID of a Mautic user to assign this contact to
     */
    ownerId?: string | Expression<string> | PlaceholderValue;
    /** Phone
     */
    phone?: string | Expression<string> | PlaceholderValue;
    /** Prospect or Customer
     */
    prospectOrCustomer?: 'Prospect' | 'Customer' | Expression<string>;
    /** Sandbox
     * @default false
     */
    sandbox?: boolean | Expression<boolean>;
    /** Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
     */
    stage?: string | Expression<string>;
    /** Choose from the list, or specify IDs using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
     * @default []
     */
    tags?: string[];
    /** Social Media
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
     */
    website?: string | Expression<string> | PlaceholderValue;
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

export type MauticV1ContactCreateNode = {
  type: 'n8n-nodes-base.mautic';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<MauticV1ContactCreateParams>;
};