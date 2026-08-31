/**
 * Xero Node - Version 1
 * Discriminator: resource=contact, operation=create
 */


interface Credentials {
  xeroOAuth2Api: CredentialReference;
}

/** Create a contact */
export type XeroV1ContactCreateParams = {
  resource: 'contact';
  operation: 'create';
/**
 * Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
 */
    organizationId?: string | Expression<string>;
/**
 * Full name of contact/organisation
 */
    name?: string | Expression<string> | PlaceholderValue;
/**
 * Additional Fields
 * @default {}
 */
    additionalFields?: {
    /** A user defined account number
     */
    accountNumber?: string | Expression<string> | PlaceholderValue;
    /** Addresses
     * @default {}
     */
    addressesUi?: {
        /** Address
     */
    addressesValues?: Array<{
      /** Type
       */
      type?: 'POBOX' | 'STREET' | Expression<string>;
      /** Line 1
       */
      line1?: string | Expression<string> | PlaceholderValue;
      /** Line 2
       */
      line2?: string | Expression<string> | PlaceholderValue;
      /** City
       */
      city?: string | Expression<string> | PlaceholderValue;
      /** Region
       */
      region?: string | Expression<string> | PlaceholderValue;
      /** Postal Code
       */
      postalCode?: string | Expression<string> | PlaceholderValue;
      /** Country
       */
      country?: string | Expression<string> | PlaceholderValue;
      /** Attention To
       */
      attentionTo?: string | Expression<string> | PlaceholderValue;
    }>;
  };
    /** Bank account number of contact
     */
    bankAccountDetails?: string | Expression<string> | PlaceholderValue;
    /** This field is read only on the Xero contact screen, used to identify contacts in external systems
     */
    contactNumber?: string | Expression<string> | PlaceholderValue;
    /** Current status of a contact - see contact status types
     */
    contactStatus?: 'ACTIVE' | 'ARCHIVED' | 'GDPRREQUEST' | Expression<string>;
    /** Default currency for raising invoices against contact
     */
    defaultCurrency?: string | Expression<string> | PlaceholderValue;
    /** Email address of contact person (umlauts not supported) (max length = 255)
     */
    emailAddress?: string | Expression<string> | PlaceholderValue;
    /** First name of contact person (max length = 255)
     */
    firstName?: string | Expression<string> | PlaceholderValue;
    /** Last name of contact person (max length = 255)
     */
    lastName?: string | Expression<string> | PlaceholderValue;
    /** Phones
     * @default {}
     */
    phonesUi?: {
        /** Phones
     */
    phonesValues?: Array<{
      /** Type
       */
      phoneType?: 'DEFAULT' | 'DDI' | 'MOBILE' | 'FAX' | Expression<string>;
      /** Number
       */
      phoneNumber?: string | Expression<string> | PlaceholderValue;
      /** Area Code
       */
      phoneAreaCode?: string | Expression<string> | PlaceholderValue;
      /** Country Code
       */
      phoneCountryCode?: string | Expression<string> | PlaceholderValue;
    }>;
  };
    /** The default purchases account code for contacts. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
     */
    purchasesDefaultAccountCode?: string | Expression<string>;
    /** The default sales account code for contacts. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
     */
    salesDefaultAccountCode?: string | Expression<string>;
    /** Skype user name of contact
     */
    skypeUserName?: string | Expression<string> | PlaceholderValue;
    /** Tax number of contact
     */
    taxNumber?: string | Expression<string> | PlaceholderValue;
    /** Store XeroNetworkKey for contacts
     */
    xeroNetworkKey?: string | Expression<string> | PlaceholderValue;
  };
};

export type XeroV1ContactCreateOutput = {
  Addresses?: Array<{
    AddressType?: string;
    City?: string;
    Country?: string;
    PostalCode?: string;
    Region?: string;
  }>;
  BankAccountDetails?: string;
  ContactID?: string;
  ContactStatus?: string;
  EmailAddress?: string;
  HasValidationErrors?: boolean;
  IsCustomer?: boolean;
  IsSupplier?: boolean;
  Name?: string;
  Phones?: Array<{
    PhoneAreaCode?: string;
    PhoneCountryCode?: string;
    PhoneNumber?: string;
    PhoneType?: string;
  }>;
  UpdatedDateUTC?: string;
};

export type XeroV1ContactCreateNode = {
  type: 'n8n-nodes-base.xero';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<XeroV1ContactCreateParams>;
  output?: Items<XeroV1ContactCreateOutput>;
};