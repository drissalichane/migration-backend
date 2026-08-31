/**
 * Pipedrive Node - Version 1
 * Discriminator: resource=dealProduct, operation=add
 */


interface Credentials {
  pipedriveApi: CredentialReference;
  pipedriveOAuth2Api: CredentialReference;
}

/** Add a product to a deal */
export type PipedriveV1DealProductAddParams = {
  resource: 'dealProduct';
  operation: 'add';
  authentication?: 'apiToken' | 'oAuth2' | Expression<string>;
/**
 * The ID of the deal to add a product to. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
 */
    dealId?: string | Expression<string>;
/**
 * The ID of the product to add to a deal. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
 */
    productId?: string | Expression<string>;
/**
 * Price at which to add or update this product in a deal
 * @default 0
 */
    item_price?: number | Expression<number>;
/**
 * How many items of this product to add/update in a deal
 * @default 1
 */
    quantity?: number | Expression<number>;
/**
 * Additional Fields
 * @default {}
 */
    additionalFields?: {
    /** Text to describe this product-deal attachment
     */
    comments?: string | Expression<string> | PlaceholderValue;
    /** Percentage of discount to apply
     * @default 0
     */
    discount_percentage?: number | Expression<number>;
    /** ID of the product variation to use
     */
    product_variation_id?: string | Expression<string> | PlaceholderValue;
  };
};

export type PipedriveV1DealProductAddNode = {
  type: 'n8n-nodes-base.pipedrive';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<PipedriveV1DealProductAddParams>;
};