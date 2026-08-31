/**
 * Keap Node - Version 1
 * Discriminator: resource=ecommerceProduct, operation=create
 */


interface Credentials {
  keapOAuth2Api: CredentialReference;
}

/** Create a company */
export type KeapV1EcommerceProductCreateParams = {
  resource: 'ecommerceProduct';
  operation: 'create';
/**
 * Product Name
 */
    productName?: string | Expression<string> | PlaceholderValue;
/**
 * Additional Fields
 * @default {}
 */
    additionalFields?: {
    /** Active
     * @default false
     */
    active?: boolean | Expression<boolean>;
    /** Product Description
     */
    productDesc?: string | Expression<string> | PlaceholderValue;
    /** Product Price
     * @default 0
     */
    productPrice?: number | Expression<number>;
    /** Product Short Desc
     */
    productShortDesc?: string | Expression<string> | PlaceholderValue;
    /** SKU
     */
    sku?: string | Expression<string> | PlaceholderValue;
    /** Subscription Only
     * @default false
     */
    subscriptionOnly?: boolean | Expression<boolean>;
  };
};

export type KeapV1EcommerceProductCreateNode = {
  type: 'n8n-nodes-base.keap';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<KeapV1EcommerceProductCreateParams>;
};