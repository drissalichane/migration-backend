/**
 * QuickBooks Online Node - Version 1
 * Discriminator: resource=invoice, operation=getAll
 */


interface Credentials {
  quickBooksOAuth2Api: CredentialReference;
}

export type QuickbooksV1InvoiceGetAllParams = {
  resource: 'invoice';
  operation: 'getAll';
/**
 * Whether to return all results or only up to a given limit
 * @default false
 */
    returnAll?: boolean | Expression<boolean>;
/**
 * Max number of results to return
 * @displayOptions.show { returnAll: [false] }
 * @default 50
 */
    limit?: number | Expression<number>;
/**
 * Filters
 * @default {}
 */
    filters?: {
    /** The condition for selecting invoices. See the &lt;a href="https://developer.intuit.com/app/developer/qbo/docs/develop/explore-the-quickbooks-online-api/data-queries"&gt;guide&lt;/a&gt; for supported syntax.
     */
    query?: string | Expression<string> | PlaceholderValue;
  };
};

export type QuickbooksV1InvoiceGetAllNode = {
  type: 'n8n-nodes-base.quickbooks';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<QuickbooksV1InvoiceGetAllParams>;
};