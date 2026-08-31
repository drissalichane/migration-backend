/**
 * Pipedrive Node - Version 1
 * Discriminator: resource=dealProduct, operation=update
 */


interface Credentials {
  pipedriveApi: CredentialReference;
  pipedriveOAuth2Api: CredentialReference;
}

/** Update an activity */
export type PipedriveV1DealProductUpdateParams = {
  resource: 'dealProduct';
  operation: 'update';
  authentication?: 'apiToken' | 'oAuth2' | Expression<string>;
/**
 * The ID of the deal whose product to update. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
 */
    dealId?: string | Expression<string>;
/**
 * ID of the deal-product (the ID of the product attached to the deal). Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
 */
    productAttachmentId?: string | Expression<string>;
/**
 * Update Fields
 * @default {}
 */
    updateFields?: {
    /** Text to describe this product-deal attachment
     */
    comments?: string | Expression<string> | PlaceholderValue;
    /** Percentage of discount to apply
     * @default 0
     */
    discount_percentage?: number | Expression<number>;
    /** Price at which to add or update this product in a deal
     * @default 0
     */
    item_price?: number | Expression<number>;
    /** How many items of this product to add/update in a deal
     * @default 1
     */
    quantity?: number | Expression<number>;
    /** ID of the product variation to use
     */
    product_variation_id?: string | Expression<string> | PlaceholderValue;
  };
};

export type PipedriveV1DealProductUpdateNode = {
  type: 'n8n-nodes-base.pipedrive';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<PipedriveV1DealProductUpdateParams>;
};