/**
 * Zoho CRM Node - Version 1
 * Discriminator: resource=product, operation=update
 */


interface Credentials {
  zohoOAuth2Api: CredentialReference;
}

/** Update an account */
export type ZohoCrmV1ProductUpdateParams = {
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
    /** Commission rate for the product. For example, enter 12 for 12%.
     * @default 0
     */
    Commission_Rate?: number | Expression<number>;
    /** Filter by custom fields
     * @default {}
     */
    customFields?: {
        /** Custom Field
     */
    customFields?: Array<{
      /** Custom field to set a value to
       */
      fieldId?: string | Expression<string>;
      /** Value to set on custom field
       */
      value?: string | Expression<string> | PlaceholderValue;
    }>;
  };
    /** Description
     */
    Description?: string | Expression<string> | PlaceholderValue;
    /** Manufacturer
     */
    Manufacturer?: string | Expression<string> | PlaceholderValue;
    /** Product Active
     * @default false
     */
    Product_Active?: boolean | Expression<boolean>;
    /** Product Category
     */
    Product_Category?: string | Expression<string> | PlaceholderValue;
    /** Quantity in Demand
     * @default 0
     */
    Qty_in_Demand?: number | Expression<number>;
    /** Quantity in Stock
     * @default 0
     */
    Qty_in_Stock?: number | Expression<number>;
    /** Taxable
     * @default false
     */
    Taxable?: boolean | Expression<boolean>;
    /** Unit Price
     * @default 0
     */
    Unit_Price?: number | Expression<number>;
  };
};

export type ZohoCrmV1ProductUpdateNode = {
  type: 'n8n-nodes-base.zohoCrm';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<ZohoCrmV1ProductUpdateParams>;
};