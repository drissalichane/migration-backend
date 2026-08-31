/**
 * QuickBooks Online Node - Version 1
 * Discriminator: resource=bill, operation=create
 */


interface Credentials {
  quickBooksOAuth2Api: CredentialReference;
}

export type QuickbooksV1BillCreateParams = {
  resource: 'bill';
  operation: 'create';
/**
 * The ID of the vendor who the bill is for. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
 * @default []
 */
    VendorRef?: string | Expression<string>;
/**
 * Individual line item of a transaction
 * @default {}
 */
    Line?: {
    /** Account ID
     */
    accountId?: string | Expression<string> | PlaceholderValue;
    /** Monetary amount of the line item
     * @default 0
     */
    Amount?: number | Expression<number>;
    /** Textual description of the line item
     */
    Description?: string | Expression<string> | PlaceholderValue;
    /** Detail Type
     * @default ItemBasedExpenseLineDetail
     */
    DetailType?: 'AccountBasedExpenseLineDetail' | 'ItemBasedExpenseLineDetail' | Expression<string>;
    /** Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
     * @default []
     */
    itemId?: string | Expression<string>;
    /** Position of the line item relative to others
     * @default 1
     */
    LineNum?: number | Expression<number>;
  };
/**
 * Additional Fields
 * @default {}
 */
    additionalFields?: {
    /** Accounts Payable account to which the bill will be credited
     * @default {}
     */
    APAccountRef?: {
        /** Details
     */
    details?: {
      /** Name
       */
      name?: string | Expression<string> | PlaceholderValue;
      /** ID
       */
      value?: string | Expression<string> | PlaceholderValue;
    };
  };
    /** The balance reflecting any payments made against the transaction
     */
    Balance?: string | Expression<string> | PlaceholderValue;
    /** Date when the payment of the transaction is due
     */
    DueDate?: string | Expression<string>;
    /** Sales term associated with the transaction
     * @default {}
     */
    SalesTermRef?: {
        /** Details
     */
    details?: {
      /** Name
       */
      name?: string | Expression<string> | PlaceholderValue;
      /** ID
       */
      value?: string | Expression<string> | PlaceholderValue;
    };
  };
    /** Total amount of the transaction
     * @default 0
     */
    TotalAmt?: number | Expression<number>;
    /** Date when the transaction occurred
     */
    TxnDate?: string | Expression<string>;
  };
};

export type QuickbooksV1BillCreateNode = {
  type: 'n8n-nodes-base.quickbooks';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<QuickbooksV1BillCreateParams>;
};