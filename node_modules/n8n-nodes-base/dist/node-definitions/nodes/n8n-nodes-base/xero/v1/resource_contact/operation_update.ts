/**
 * Xero Node - Version 1
 * Discriminator: resource=contact, operation=update
 */


interface Credentials {
  xeroOAuth2Api: CredentialReference;
}

/** Update a contact */
export type XeroV1ContactUpdateParams = {
  resource: 'contact';
  operation: 'update';
/**
 * Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
 */
    organizationId?: string | Expression<string>;
/**
 * Contact ID
 */
    contactId?: string | Expression<string> | PlaceholderValue;
/**
 * Update Fields
 * @default {}
 */
    updateFields?: {
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
    /** Full name of contact/organisation
     */
    name?: string | Expression<string> | PlaceholderValue;
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

export type XeroV1ContactUpdateNode = {
  type: 'n8n-nodes-base.xero';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<XeroV1ContactUpdateParams>;
};