/**
 * QuickBooks Online Node - Version 1
 * Discriminator: resource=estimate, operation=update
 */


interface Credentials {
  quickBooksOAuth2Api: CredentialReference;
}

export type QuickbooksV1EstimateUpdateParams = {
  resource: 'estimate';
  operation: 'update';
/**
 * The ID of the estimate to update
 */
    estimateId?: string | Expression<string> | PlaceholderValue;
/**
 * Update Fields
 * @default {}
 */
    updateFields?: {
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
    /** Date when the transaction occurred
     */
    TxnDate?: string | Expression<string>;
  };
};

export type QuickbooksV1EstimateUpdateNode = {
  type: 'n8n-nodes-base.quickbooks';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<QuickbooksV1EstimateUpdateParams>;
};