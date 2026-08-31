/**
 * WooCommerce Node - Version 1
 * Discriminator: resource=customer, operation=update
 */


interface Credentials {
  wooCommerceApi: CredentialReference;
}

/** Update a customer */
export type WooCommerceV1CustomerUpdateParams = {
  resource: 'customer';
  operation: 'update';
/**
 * ID of the customer to update
 */
    customerId?: string | Expression<string> | PlaceholderValue;
/**
 * Update Fields
 * @default {}
 */
    updateFields?: {
    /** Billing Address
     * @default {}
     */
    billing?: {
    /** First Name
     */
    first_name?: string | Expression<string> | PlaceholderValue;
    /** Last Name
     */
    last_name?: string | Expression<string> | PlaceholderValue;
    /** Company
     */
    company?: string | Expression<string> | PlaceholderValue;
    /** Address 1
     */
    address_1?: string | Expression<string> | PlaceholderValue;
    /** Address 2
     */
    address_2?: string | Expression<string> | PlaceholderValue;
    /** City
     */
    city?: string | Expression<string> | PlaceholderValue;
    /** State
     */
    state?: string | Expression<string> | PlaceholderValue;
    /** Postcode
     */
    postcode?: string | Expression<string> | PlaceholderValue;
    /** Country
     */
    country?: string | Expression<string> | PlaceholderValue;
    /** Email
     */
    email?: string | Expression<string> | PlaceholderValue;
    /** Phone
     */
    phone?: string | Expression<string> | PlaceholderValue;
  };
    /** First Name
     */
    first_name?: string | Expression<string> | PlaceholderValue;
    /** Last Name
     */
    last_name?: string | Expression<string> | PlaceholderValue;
    /** Metadata
     * @default {}
     */
    meta_data?: {
        /** Metadata Fields
     */
    meta_data_fields?: Array<{
      /** Key
       */
      key?: string | Expression<string> | PlaceholderValue;
      /** Value
       */
      value?: string | Expression<string> | PlaceholderValue;
    }>;
  };
    /** Password
     * @displayOptions.show { /operation: ["create"] }
     */
    password?: string | Expression<string> | PlaceholderValue;
    /** Shipping Address
     * @default {}
     */
    shipping?: {
    /** First Name
     */
    first_name?: string | Expression<string> | PlaceholderValue;
    /** Last Name
     */
    last_name?: string | Expression<string> | PlaceholderValue;
    /** Company
     */
    company?: string | Expression<string> | PlaceholderValue;
    /** Address 1
     */
    address_1?: string | Expression<string> | PlaceholderValue;
    /** Address 2
     */
    address_2?: string | Expression<string> | PlaceholderValue;
    /** City
     */
    city?: string | Expression<string> | PlaceholderValue;
    /** State
     */
    state?: string | Expression<string> | PlaceholderValue;
    /** Postcode
     */
    postcode?: string | Expression<string> | PlaceholderValue;
    /** Country
     */
    country?: string | Expression<string> | PlaceholderValue;
    /** Email
     */
    email?: string | Expression<string> | PlaceholderValue;
    /** Phone
     */
    phone?: string | Expression<string> | PlaceholderValue;
  };
  };
};

export type WooCommerceV1CustomerUpdateNode = {
  type: 'n8n-nodes-base.wooCommerce';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<WooCommerceV1CustomerUpdateParams>;
};