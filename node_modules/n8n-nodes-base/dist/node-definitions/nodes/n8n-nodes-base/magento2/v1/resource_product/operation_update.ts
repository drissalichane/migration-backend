/**
 * Magento 2 Node - Version 1
 * Discriminator: resource=product, operation=update
 */


interface Credentials {
  magento2Api: CredentialReference;
}

/** Update a customer */
export type Magento2V1ProductUpdateParams = {
  resource: 'product';
  operation: 'update';
/**
 * Stock-keeping unit of the product
 */
    sku?: string | Expression<string> | PlaceholderValue;
/**
 * Update Fields
 * @default {}
 */
    updateFields?: {
    /** Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
     */
    attribute_set_id?: string | Expression<string>;
    /** Name
     */
    name?: string | Expression<string> | PlaceholderValue;
    /** Price
     * @default 0
     */
    price?: number | Expression<number>;
    /** Status
     * @default 1
     */
    status?: 1 | 2 | Expression<number>;
    /** Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
     */
    type_id?: string | Expression<string>;
    /** Visibility
     * @default 4
     */
    visibility?: 1 | 2 | 3 | 4 | Expression<number>;
    /** Weight (LBS)
     * @default 0
     */
    weight?: number | Expression<number>;
  };
};

export type Magento2V1ProductUpdateNode = {
  type: 'n8n-nodes-base.magento2';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<Magento2V1ProductUpdateParams>;
};