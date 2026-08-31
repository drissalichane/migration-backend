/**
 * Freshworks CRM Node - Version 1
 * Discriminator: resource=deal, operation=update
 */


interface Credentials {
  freshworksCrmApi: CredentialReference;
}

/** Update an account */
export type FreshworksCrmV1DealUpdateParams = {
  resource: 'deal';
  operation: 'update';
/**
 * ID of the deal to update
 */
    dealId?: string | Expression<string> | PlaceholderValue;
/**
 * Update Fields
 * @default {}
 */
    updateFields?: {
    /** Value of the deal
     * @default 0
     */
    amount?: number | Expression<number>;
    /** Value of the deal in base currency
     * @default 0
     */
    base_currency_amount?: number | Expression<number>;
    /** ID of the campaign that landed this deal. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
     */
    campaign_id?: string | Expression<string>;
    /** ID of the currency that the deal belongs to. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
     */
    currency_id?: string | Expression<string>;
    /** ID of the mode of payment for the deal. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
     */
    deal_payment_status_id?: string | Expression<string>;
    /** ID of the deal pipeline that it belongs to. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
     */
    deal_pipeline_id?: string | Expression<string>;
    /** ID of the product that the deal belongs to (in a multi-product company). Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
     */
    deal_product_id?: string | Expression<string>;
    /** ID of the reason for losing the deal. Can only be set if the deal is in 'Lost' stage. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
     */
    deal_reason_id?: string | Expression<string>;
    /** ID of the deal stage that the deal belongs to. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
     */
    deal_stage_id?: string | Expression<string>;
    /** ID of the deal type that the deal belongs to. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
     */
    deal_type_id?: string | Expression<string>;
    /** ID of the source where deal came from
     */
    lead_source_id?: string | Expression<string> | PlaceholderValue;
    /** Name of the deal
     */
    name?: string | Expression<string> | PlaceholderValue;
    /** ID of the user to whom the deal is assigned. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
     */
    owner_id?: string | Expression<string>;
    /** Probability of winning the deal as a number between 0 and 100
     * @default 0
     */
    probability?: number | Expression<number>;
    /** ID of the account that the deal belongs to. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
     */
    sales_account_id?: string | Expression<string>;
    /** ID of the territory that the deal belongs to. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
     */
    territory_id?: string | Expression<string>;
  };
};

export type FreshworksCrmV1DealUpdateNode = {
  type: 'n8n-nodes-base.freshworksCrm';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<FreshworksCrmV1DealUpdateParams>;
};