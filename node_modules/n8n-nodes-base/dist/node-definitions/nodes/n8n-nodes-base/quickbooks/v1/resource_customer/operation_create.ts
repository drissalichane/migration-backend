/**
 * QuickBooks Online Node - Version 1
 * Discriminator: resource=customer, operation=create
 */


interface Credentials {
  quickBooksOAuth2Api: CredentialReference;
}

export type QuickbooksV1CustomerCreateParams = {
  resource: 'customer';
  operation: 'create';
/**
 * The display name of the customer to create
 */
    displayName?: string | Expression<string> | PlaceholderValue;
/**
 * Additional Fields
 * @default {}
 */
    additionalFields?: {
    /** Whether the customer is currently enabled for use by QuickBooks
     * @default true
     */
    Active?: boolean | Expression<boolean>;
    /** Open balance amount or amount unpaid by the customer
     */
    Balance?: string | Expression<string> | PlaceholderValue;
    /** Cumulative open balance amount for the customer (or job) and all its sub-jobs
     * @default 0
     */
    BalanceWithJobs?: number | Expression<number>;
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
    /** Whether to bill this customer together with its parent
     * @default false
     */
    BillWithParent?: boolean | Expression<boolean>;
    /** Company Name
     */
    CompanyName?: string | Expression<string> | PlaceholderValue;
    /** Family Name
     */
    FamilyName?: string | Expression<string> | PlaceholderValue;
    /** Fully Qualified Name
     */
    FullyQualifiedName?: string | Expression<string> | PlaceholderValue;
    /** Given Name
     */
    GivenName?: string | Expression<string> | PlaceholderValue;
    /** Preferred Delivery Method
     * @default Print
     */
    PreferredDeliveryMethod?: 'Print' | 'Email' | 'None' | Expression<string>;
    /** Primary Email Address
     */
    PrimaryEmailAddr?: string | Expression<string> | PlaceholderValue;
    /** Primary Phone
     */
    PrimaryPhone?: string | Expression<string> | PlaceholderValue;
    /** Name of the customer as printed on a check
     */
    PrintOnCheckName?: string | Expression<string> | PlaceholderValue;
    /** Whether transactions for this customer are taxable
     * @default false
     */
    Taxable?: boolean | Expression<boolean>;
  };
};

export type QuickbooksV1CustomerCreateNode = {
  type: 'n8n-nodes-base.quickbooks';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<QuickbooksV1CustomerCreateParams>;
};