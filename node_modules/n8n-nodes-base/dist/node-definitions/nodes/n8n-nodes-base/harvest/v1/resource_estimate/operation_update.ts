/**
 * Harvest Node - Version 1
 * Discriminator: resource=estimate, operation=update
 */


interface Credentials {
  harvestApi: CredentialReference;
  harvestOAuth2Api: CredentialReference;
}

/** Update a client */
export type HarvestV1EstimateUpdateParams = {
  resource: 'estimate';
  operation: 'update';
  authentication?: 'accessToken' | 'oAuth2' | Expression<string>;
/**
 * Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
 */
    accountId?: string | Expression<string>;
/**
 * The ID of the invoice want to update
 */
    id?: string | Expression<string> | PlaceholderValue;
/**
 * Update Fields
 * @default {}
 */
    updateFields?: {
    /** The ID of the retainer associated with this invoice
     */
    client_id?: string | Expression<string> | PlaceholderValue;
    /** The currency used by the estimate. If not provided, the client’s currency will be used. See a list of supported currencies
     */
    currency?: string | Expression<string> | PlaceholderValue;
    /** This percentage is subtracted from the subtotal. Example: use 10.0 for 10.0%.
     */
    over_budget_notification_percentage?: string | Expression<string> | PlaceholderValue;
    /** Date the invoice was issued. Defaults to today’s date.
     */
    issue_date?: string | Expression<string>;
    /** If no value is set, the number will be automatically generated
     */
    number?: string | Expression<string> | PlaceholderValue;
    /** Any additional notes to include on the estimate
     */
    notes?: string | Expression<string> | PlaceholderValue;
    /** The purchase order number
     */
    purchase_order?: string | Expression<string> | PlaceholderValue;
    /** The estimate subject
     */
    subject?: string | Expression<string> | PlaceholderValue;
    /** This percentage is applied to the subtotal, including line items and discounts. Example: use 10.0 for 10.0%.
     */
    tax?: string | Expression<string> | PlaceholderValue;
    /** This percentage is applied to the subtotal, including line items and discounts. Example: use 10.0 for 10.0%.
     */
    tax2?: string | Expression<string> | PlaceholderValue;
  };
};

export type HarvestV1EstimateUpdateNode = {
  type: 'n8n-nodes-base.harvest';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<HarvestV1EstimateUpdateParams>;
};