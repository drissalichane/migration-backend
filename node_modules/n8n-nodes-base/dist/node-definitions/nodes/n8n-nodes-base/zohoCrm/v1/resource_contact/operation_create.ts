/**
 * Zoho CRM Node - Version 1
 * Discriminator: resource=contact, operation=create
 */


interface Credentials {
  zohoOAuth2Api: CredentialReference;
}

/** Create an account */
export type ZohoCrmV1ContactCreateParams = {
  resource: 'contact';
  operation: 'create';
/**
 * Last Name
 */
    lastName?: string | Expression<string> | PlaceholderValue;
/**
 * Additional Fields
 * @default {}
 */
    additionalFields?: {
    /** Name of the contact’s assistant
     */
    Assistant?: string | Expression<string> | PlaceholderValue;
    /** Filter by custom fields
     * @default {}
     */
    customFields?: {
        /** Custom Field
     */
    customFields?: Array<{
      /** Custom field to set a value to
       */
      fieldId?: string | Expression<string>;
      /** Value to set on custom field
       */
      value?: string | Expression<string> | PlaceholderValue;
    }>;
  };
    /** Date of Birth
     */
    Date_of_Birth?: string | Expression<string>;
    /** Company department to which the contact belongs
     */
    Department?: string | Expression<string> | PlaceholderValue;
    /** Description
     */
    Description?: string | Expression<string> | PlaceholderValue;
    /** Email (Primary)
     */
    Email?: string | Expression<string> | PlaceholderValue;
    /** Email (Secondary)
     */
    Secondary_Email?: string | Expression<string> | PlaceholderValue;
    /** Fax
     */
    Fax?: string | Expression<string> | PlaceholderValue;
    /** First Name
     */
    First_Name?: string | Expression<string> | PlaceholderValue;
    /** Full Name
     */
    Full_Name?: string | Expression<string> | PlaceholderValue;
    /** Mailing Address
     * @default {}
     */
    Mailing_Address?: {
        /** Mailing Address Fields
     */
    address_fields?: {
      /** Street
       */
      Mailing_Street?: string | Expression<string> | PlaceholderValue;
      /** City
       */
      Mailing_City?: string | Expression<string> | PlaceholderValue;
      /** State
       */
      Mailing_State?: string | Expression<string> | PlaceholderValue;
      /** Country
       */
      Mailing_Country?: string | Expression<string> | PlaceholderValue;
      /** Zip Code
       */
      Mailing_Zip?: string | Expression<string> | PlaceholderValue;
    };
  };
    /** Mobile
     */
    Mobile?: string | Expression<string> | PlaceholderValue;
    /** Other Address
     * @default {}
     */
    Other_Address?: {
        /** Other Address Fields
     */
    address_fields?: {
      /** Street
       */
      Other_Street?: string | Expression<string> | PlaceholderValue;
      /** City
       */
      Other_City?: string | Expression<string> | PlaceholderValue;
      /** State
       */
      Other_State?: string | Expression<string> | PlaceholderValue;
      /** Zip Code
       */
      Other_Zip?: string | Expression<string> | PlaceholderValue;
    };
  };
    /** Phone
     */
    Phone?: string | Expression<string> | PlaceholderValue;
    /** Phone number of the contact’s assistant
     */
    Asst_Phone?: string | Expression<string> | PlaceholderValue;
    /** Phone (Home)
     */
    Home_Phone?: string | Expression<string> | PlaceholderValue;
    /** Phone (Other)
     */
    Other_Phone?: string | Expression<string> | PlaceholderValue;
    /** Salutation
     */
    Salutation?: string | Expression<string> | PlaceholderValue;
    /** Skype ID
     */
    Skype_ID?: string | Expression<string> | PlaceholderValue;
    /** Position of the contact at their company
     */
    Title?: string | Expression<string> | PlaceholderValue;
    /** Twitter
     */
    Twitter?: string | Expression<string> | PlaceholderValue;
  };
};

export type ZohoCrmV1ContactCreateNode = {
  type: 'n8n-nodes-base.zohoCrm';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<ZohoCrmV1ContactCreateParams>;
};