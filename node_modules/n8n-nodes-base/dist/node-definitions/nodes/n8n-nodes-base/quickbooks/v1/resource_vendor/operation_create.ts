/**
 * QuickBooks Online Node - Version 1
 * Discriminator: resource=vendor, operation=create
 */


interface Credentials {
  quickBooksOAuth2Api: CredentialReference;
}

export type QuickbooksV1VendorCreateParams = {
  resource: 'vendor';
  operation: 'create';
/**
 * The display name of the vendor to create
 */
    displayName?: string | Expression<string> | PlaceholderValue;
/**
 * Additional Fields
 * @default {}
 */
    additionalFields?: {
    /** Account Number
     */
    AcctNum?: string | Expression<string> | PlaceholderValue;
    /** Whether the employee is currently enabled for use by QuickBooks
     * @default false
     */
    Active?: boolean | Expression<boolean>;
    /** The balance reflecting any payments made against the transaction
     * @default 0
     */
    Balance?: number | Expression<number>;
    /** Billing Address
     * @default {}
     */
    BillAddr?: {
        /** Details
     */
    details?: {
      /** City
       */
      City?: string | Expression<string> | PlaceholderValue;
      /** Line 1
       */
      Line1?: string | Expression<string> | PlaceholderValue;
      /** Postal Code
       */
      PostalCode?: string | Expression<string> | PlaceholderValue;
      /** Latitude
       */
      Lat?: string | Expression<string> | PlaceholderValue;
      /** Longitude
       */
      Long?: string | Expression<string> | PlaceholderValue;
      /** Country Subdivision Code
       */
      CountrySubDivisionCode?: string | Expression<string> | PlaceholderValue;
    };
  };
    /** Company Name
     */
    CompanyName?: string | Expression<string> | PlaceholderValue;
    /** Family Name
     */
    FamilyName?: string | Expression<string> | PlaceholderValue;
    /** Given Name
     */
    GivenName?: string | Expression<string> | PlaceholderValue;
    /** Primary Email Address
     */
    PrimaryEmailAddr?: string | Expression<string> | PlaceholderValue;
    /** Primary Phone
     */
    PrimaryPhone?: string | Expression<string> | PlaceholderValue;
    /** Name of the vendor as printed on a check
     */
    PrintOnCheckName?: string | Expression<string> | PlaceholderValue;
    /** Whether the vendor is an independent contractor, given a 1099-MISC form at the end of the year
     * @default false
     */
    Vendor1099?: boolean | Expression<boolean>;
  };
};

export type QuickbooksV1VendorCreateNode = {
  type: 'n8n-nodes-base.quickbooks';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<QuickbooksV1VendorCreateParams>;
};