/**
 * Keap Node - Version 1
 * Discriminator: resource=company, operation=create
 */


interface Credentials {
  keapOAuth2Api: CredentialReference;
}

/** Create a company */
export type KeapV1CompanyCreateParams = {
  resource: 'company';
  operation: 'create';
/**
 * Company Name
 */
    companyName?: string | Expression<string> | PlaceholderValue;
/**
 * Additional Fields
 * @default {}
 */
    additionalFields?: {
    /** Email
     */
    emailAddress?: string | Expression<string> | PlaceholderValue;
    /** Notes
     */
    notes?: string | Expression<string> | PlaceholderValue;
    /** Opt In Reason
     */
    optInReason?: string | Expression<string> | PlaceholderValue;
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
    addressesValues?: {
      /** ISO Alpha-3 Code
       */
      countryCode?: string | Expression<string> | PlaceholderValue;
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
    };
  };
/**
 * Faxes
 * @default {}
 */
    faxesUi?: {
        /** Fax
     */
    faxesValues?: {
      /** Type
       */
      type?: string | Expression<string> | PlaceholderValue;
      /** Number
       */
      number?: string | Expression<string> | PlaceholderValue;
    };
  };
/**
 * Phones
 * @default {}
 */
    phonesUi?: {
        /** Phones
     */
    phonesValues?: Array<{
      /** Type
       */
      type?: string | Expression<string> | PlaceholderValue;
      /** Number
       */
      number?: string | Expression<string> | PlaceholderValue;
    }>;
  };
};

export type KeapV1CompanyCreateNode = {
  type: 'n8n-nodes-base.keap';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<KeapV1CompanyCreateParams>;
};