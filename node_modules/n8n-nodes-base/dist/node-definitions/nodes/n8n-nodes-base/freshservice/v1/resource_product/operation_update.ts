/**
 * Freshservice Node - Version 1
 * Discriminator: resource=product, operation=update
 */


interface Credentials {
  freshserviceApi: CredentialReference;
}

/** Update an agent */
export type FreshserviceV1ProductUpdateParams = {
  resource: 'product';
  operation: 'update';
/**
 * ID of the product to update
 */
    productId?: string | Expression<string> | PlaceholderValue;
/**
 * Update Fields
 * @default {}
 */
    updateFields?: {
    /** Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
     */
    asset_type_id?: string | Expression<string>;
    /** HTML supported
     */
    description?: string | Expression<string> | PlaceholderValue;
    /** Manufacturer
     */
    manufacturer?: string | Expression<string> | PlaceholderValue;
    /** Mode of Procurement
     * @default Buy
     */
    mode_of_procurement?: 'Buy' | 'Lease' | 'Both' | Expression<string>;
    /** Name
     */
    name?: string | Expression<string> | PlaceholderValue;
    /** Status
     * @default In Production
     */
    status?: 'In Production' | 'In Pipeline' | 'Retired' | Expression<string>;
  };
};

export type FreshserviceV1ProductUpdateNode = {
  type: 'n8n-nodes-base.freshservice';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<FreshserviceV1ProductUpdateParams>;
};