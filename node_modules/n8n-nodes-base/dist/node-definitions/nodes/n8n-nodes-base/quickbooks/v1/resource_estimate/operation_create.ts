/**
 * QuickBooks Online Node - Version 1
 * Discriminator: resource=estimate, operation=create
 */


interface Credentials {
  quickBooksOAuth2Api: CredentialReference;
}

export type QuickbooksV1EstimateCreateParams = {
  resource: 'estimate';
  operation: 'create';
/**
 * The ID of the customer who the estimate is for. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
 * @default []
 */
    CustomerRef?: string | Expression<string>;
/**
 * Individual line item of a transaction
 * @default {}
 */
    Line?: {
    /** Monetary amount of the line item
     * @default 0
     */
    Amount?: number | Expression<number>;
    /** Textual description of the line item
     */
    Description?: string | Expression<string> | PlaceholderValue;
    /** Detail Type
     * @default SalesItemLineDetail
     */
    DetailType?: 'SalesItemLineDetail' | Expression<string>;
    /** Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
     * @default []
     */
    itemId?: string | Expression<string>;
    /** Position of the line item relative to others
     * @default 1
     */
    LineNum?: number | Expression<number>;
    /** Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
     * @default []
     */
    TaxCodeRef?: string | Expression<string>;
  };
/**
 * Additional Fields
 * @default {}
 */
    additionalFields?: {
    /** Apply Tax After Discount
     * @default false
     */
    ApplyTaxAfterDiscount?: boolean | Expression<boolean>;
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
    /** E-mail address to which the estimate will be sent
     */
    BillEmail?: string | Expression<string> | PlaceholderValue;
    /** Custom Fields
     * @default {}
     */
    CustomFields?: {
        /** Field
     */
    Field?: Array<{
      /** ID of the field to set. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
       */
      DefinitionId?: string | Expression<string>;
      /** Value of the field to set
       */
      StringValue?: string | Expression<string> | PlaceholderValue;
    }>;
  };
    /** User-entered message to the customer. This message is visible to end user on their transactions.
     */
    CustomerMemo?: string | Expression<string> | PlaceholderValue;
    /** Reference number for the transaction
     */
    DocNumber?: string | Expression<string> | PlaceholderValue;
    /** Email Status
     * @default NotSet
     */
    EmailStatus?: 'NotSet' | 'NeedToSend' | 'EmailSent' | Expression<string>;
    /** Print Status
     * @default NotSet
     */
    PrintStatus?: 'NotSet' | 'NeedToPrint' | 'PrintComplete' | Expression<string>;
    /** Shipping Address
     * @default {}
     */
    ShipAddr?: {
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
    /** Total amount of the transaction
     * @default 0
     */
    TotalAmt?: number | Expression<number>;
    /** Date when the transaction occurred
     */
    TxnDate?: string | Expression<string>;
    /** Total amount of tax incurred
     * @default 0
     */
    TotalTax?: number | Expression<number>;
  };
};

export type QuickbooksV1EstimateCreateNode = {
  type: 'n8n-nodes-base.quickbooks';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<QuickbooksV1EstimateCreateParams>;
};