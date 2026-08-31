/**
 * Keap Node - Version 1
 * Discriminator: resource=contact, operation=upsert
 */


interface Credentials {
  keapOAuth2Api: CredentialReference;
}

/** Create a new contact, or update the current one if it already exists (upsert) */
export type KeapV1ContactUpsertParams = {
  resource: 'contact';
  operation: 'upsert';
/**
 * Performs duplicate checking by one of the following options: Email, EmailAndName. If a match is found using the option provided, the existing contact will be updated.
 * @default email
 */
    duplicateOption?: 'email' | 'emailAndName' | Expression<string>;
/**
 * Additional Fields
 * @default {}
 */
    additionalFields?: {
    /** Anniversary
     */
    anniversary?: string | Expression<string>;
    /** Company ID
     * @default 0
     */
    companyId?: number | Expression<number>;
    /** Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
     */
    contactType?: string | Expression<string>;
    /** Family Name
     */
    familyName?: string | Expression<string> | PlaceholderValue;
    /** Given Name
     */
    givenName?: string | Expression<string> | PlaceholderValue;
    /** IP Address
     */
    ipAddress?: string | Expression<string> | PlaceholderValue;
    /** Job Title
     */
    jobTitle?: string | Expression<string> | PlaceholderValue;
    /** Lead Source ID
     * @default 0
     */
    leadSourceId?: number | Expression<number>;
    /** Middle Name
     */
    middleName?: string | Expression<string> | PlaceholderValue;
    /** Opt In Reason
     */
    optInReason?: string | Expression<string> | PlaceholderValue;
    /** Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
     */
    ownerId?: string | Expression<string>;
    /** Preferred Locale
     */
    preferredLocale?: string | Expression<string> | PlaceholderValue;
    /** Preferred Name
     */
    preferredName?: string | Expression<string> | PlaceholderValue;
    /** Source Type
     */
    sourceType?: 'API' | 'IMPORT' | 'LANDINGPAGE' | 'MANUAL' | 'OTHER' | 'UNKNOWN' | Expression<string>;
    /** Spouse Name
     */
    spouseName?: string | Expression<string> | PlaceholderValue;
    /** Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
     */
    timezone?: string | Expression<string>;
    /** Website
     */
    website?: string | Expression<string> | PlaceholderValue;
  };
/**
 * Addresses
 * @default {}
 */
    addressesUi?: {
        /** Address
     */
    addressesValues?: Array<{
      /** Field
       */
      field?: 'BILLING' | 'SHIPPING' | 'OTHER' | Expression<string>;
      /** Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
       */
      countryCode?: string | Expression<string>;
      /** Line 1
       */
      line1?: string | Expression<string> | PlaceholderValue;
      /** Line 2
       */
      line2?: string | Expression<string> | PlaceholderValue;
      /** Locality
       */
      locality?: string | Expression<string> | PlaceholderValue;
      /** Postal Code
       */
      postalCode?: string | Expression<string> | PlaceholderValue;
      /** Region
       */
      region?: string | Expression<string> | PlaceholderValue;
      /** Zip Code
       */
      zipCode?: string | Expression<string> | PlaceholderValue;
      /** Zip Four
       */
      zipFour?: string | Expression<string> | PlaceholderValue;
    }>;
  };
/**
 * Emails
 * @default {}
 */
    emailsUi?: {
        /** Email
     */
    emailsValues?: Array<{
      /** Field
       */
      field?: 'EMAIL1' | 'EMAIL2' | 'EMAIL3' | Expression<string>;
      /** Email
       */
      email?: string | Expression<string> | PlaceholderValue;
    }>;
  };
/**
 * Faxes
 * @default {}
 */
    faxesUi?: {
        /** Fax
     */
    faxesValues?: Array<{
      /** Field
       */
      field?: 'FAX1' | 'FAX2' | Expression<string>;
      /** Number
       */
      number?: string | Expression<string> | PlaceholderValue;
    }>;
  };
/**
 * Phones
 * @default {}
 */
    phonesUi?: {
        /** Phones
     */
    phonesValues?: Array<{
      /** Field
       */
      field?: 'PHONE1' | 'PHONE2' | 'PHONE3' | 'PHONE4' | 'PHONE5' | Expression<string>;
      /** Number
       */
      number?: string | Expression<string> | PlaceholderValue;
    }>;
  };
/**
 * Social Accounts
 * @default {}
 */
    socialAccountsUi?: {
        /** Social Account
     */
    socialAccountsValues?: Array<{
      /** Type
       */
      type?: 'Facebook' | 'Twitter' | 'LinkedIn' | Expression<string>;
      /** Name
       */
      name?: string | Expression<string> | PlaceholderValue;
    }>;
  };
};

export type KeapV1ContactUpsertOutput = {
  addresses?: Array<{
    field?: string;
    locality?: string;
    postal_code?: string;
  }>;
  date_created?: string;
  email_addresses?: Array<{
    email?: string;
    field?: string;
  }>;
  email_opted_in?: boolean;
  email_status?: string;
  family_name?: string;
  given_name?: string;
  id?: number;
  last_updated?: string;
  last_updated_utc_millis?: number;
  phone_numbers?: Array<{
    field?: string;
    number?: string;
    number_e164?: null;
  }>;
  ScoreValue?: null;
  tag_ids?: Array<number>;
};

export type KeapV1ContactUpsertNode = {
  type: 'n8n-nodes-base.keap';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<KeapV1ContactUpsertParams>;
  output?: Items<KeapV1ContactUpsertOutput>;
};