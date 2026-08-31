/**
 * Zoho CRM Node - Version 1
 * Discriminator: resource=contact, operation=update
 */


interface Credentials {
  zohoOAuth2Api: CredentialReference;
}

/** Update an account */
export type ZohoCrmV1ContactUpdateParams = {
  resource: 'contact';
  operation: 'update';
/**
 * ID of the contact to update
 */
    contactId?: string | Expression<string> | PlaceholderValue;
/**
 * Update Fields
 * @default {}
 */
    updateFields?: {
    /** Assistant
     */
    Assistant?: string | Expression<string> | PlaceholderValue;
    /** Phone number of the contact’s assistant
     */
    Asst_Phone?: string | Expression<string> | PlaceholderValue;
    /** Symbol of the currency in which revenue is generated
     * @default USD
     */
    Currency?: 'USD' | 'EUR' | 'AED' | 'AFN' | 'ALL' | 'ARS' | 'AUD' | 'AZN' | 'BBD' | 'BDT' | 'BGN' | 'BMD' | 'BND' | 'BOB' | 'BRL' | 'BSD' | 'BWP' | 'BZD' | 'CAD' | 'CHF' | 'CLP' | 'CNY' | 'COP' | 'CRC' | 'CZK' | 'DKK' | 'DOP' | 'DZD' | 'EGP' | 'FJD' | 'GBP' | 'GTQ' | 'HKD' | 'HNL' | 'HRK' | 'HUF' | 'IDR' | 'ILS' | 'INR' | 'JMD' | 'JPY' | 'KES' | 'KRW' | 'KZT' | 'LAK' | 'LBP' | 'LKR' | 'LRD' | 'MAD' | 'MMK' | 'MOP' | 'MRO' | 'MUR' | 'MVR' | 'MXN' | 'MYR' | 'NIO' | 'NOK' | 'NPR' | 'NZD' | 'PEN' | 'PGK' | 'PHP' | 'PKR' | 'PLN' | 'QAR' | 'RON' | 'RUB' | 'SAR' | 'SBD' | 'SCR' | 'SEK' | 'SGD' | 'SYP' | 'THB' | 'TOP' | 'TRY' | 'TTD' | 'TWD' | 'UAH' | 'VND' | 'VUV' | 'WST' | 'XCD' | 'XOF' | 'YER' | 'ZAR' | Expression<string>;
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
    /** Department
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
    /** Home Phone
     */
    Home_Phone?: string | Expression<string> | PlaceholderValue;
    /** Last Name
     */
    Last_Name?: string | Expression<string> | PlaceholderValue;
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
    /** Other Phone
     */
    Other_Phone?: string | Expression<string> | PlaceholderValue;
    /** Phone
     */
    Phone?: string | Expression<string> | PlaceholderValue;
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

export type ZohoCrmV1ContactUpdateNode = {
  type: 'n8n-nodes-base.zohoCrm';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<ZohoCrmV1ContactUpdateParams>;
};