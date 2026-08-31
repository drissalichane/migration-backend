/**
 * Zoho CRM Node - Version 1
 * Discriminator: resource=lead, operation=upsert
 */


interface Credentials {
  zohoOAuth2Api: CredentialReference;
}

/** Create a new record, or update the current one if it already exists (upsert) */
export type ZohoCrmV1LeadUpsertParams = {
  resource: 'lead';
  operation: 'upsert';
/**
 * Company at which the lead works
 */
    Company?: string | Expression<string> | PlaceholderValue;
/**
 * Last Name
 */
    lastName?: string | Expression<string> | PlaceholderValue;
/**
 * Additional Fields
 * @default {}
 */
    additionalFields?: {
    /** Address
     * @default {}
     */
    Address?: {
        /** Address Fields
     */
    address_fields?: {
      /** Street
       */
      Street?: string | Expression<string> | PlaceholderValue;
      /** City
       */
      City?: string | Expression<string> | PlaceholderValue;
      /** State
       */
      State?: string | Expression<string> | PlaceholderValue;
      /** Country
       */
      Country?: string | Expression<string> | PlaceholderValue;
      /** Zip Code
       */
      Zip_Code?: string | Expression<string> | PlaceholderValue;
    };
  };
    /** Annual revenue of the lead’s company
     */
    Annual_Revenue?: number | Expression<number>;
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
    /** Description
     */
    Description?: string | Expression<string> | PlaceholderValue;
    /** Position of the lead at their company
     */
    Designation?: string | Expression<string> | PlaceholderValue;
    /** Email of the lead. If a record with this email exists it will be updated, otherwise a new one will be created.
     */
    Email?: string | Expression<string> | PlaceholderValue;
    /** Email Opt Out
     * @default false
     */
    Email_Opt_Out?: boolean | Expression<boolean>;
    /** Fax
     */
    Fax?: string | Expression<string> | PlaceholderValue;
    /** First Name
     */
    First_Name?: string | Expression<string> | PlaceholderValue;
    /** Full Name
     */
    Full_Name?: string | Expression<string> | PlaceholderValue;
    /** Industry to which the lead belongs
     */
    Industry?: string | Expression<string> | PlaceholderValue;
    /** Type of industry to which the lead belongs
     */
    Industry_Type?: string | Expression<string> | PlaceholderValue;
    /** Source from which the lead was created
     */
    Lead_Source?: string | Expression<string> | PlaceholderValue;
    /** Lead Status
     */
    Lead_Status?: string | Expression<string> | PlaceholderValue;
    /** Mobile
     */
    Mobile?: string | Expression<string> | PlaceholderValue;
    /** Number of employees in the lead’s company
     */
    No_of_Employees?: number | Expression<number>;
    /** Phone
     */
    Phone?: string | Expression<string> | PlaceholderValue;
    /** Salutation
     */
    Salutation?: string | Expression<string> | PlaceholderValue;
    /** Secondary Email
     */
    Secondary_Email?: string | Expression<string> | PlaceholderValue;
    /** Skype ID
     */
    Skype_ID?: string | Expression<string> | PlaceholderValue;
    /** Twitter
     */
    Twitter?: string | Expression<string> | PlaceholderValue;
    /** Website
     */
    Website?: string | Expression<string> | PlaceholderValue;
  };
};

export type ZohoCrmV1LeadUpsertNode = {
  type: 'n8n-nodes-base.zohoCrm';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<ZohoCrmV1LeadUpsertParams>;
};