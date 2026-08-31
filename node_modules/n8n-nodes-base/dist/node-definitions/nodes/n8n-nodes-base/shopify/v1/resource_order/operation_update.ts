/**
 * Shopify Node - Version 1
 * Discriminator: resource=order, operation=update
 */


interface Credentials {
  shopifyApi: CredentialReference;
  shopifyAccessTokenApi: CredentialReference;
  shopifyOAuth2Api: CredentialReference;
}

/** Update an order */
export type ShopifyV1OrderUpdateParams = {
  resource: 'order';
  operation: 'update';
  authentication?: 'accessToken' | 'oAuth2' | 'apiKey' | Expression<string>;
/**
 * Order ID
 */
    orderId?: string | Expression<string> | PlaceholderValue;
/**
 * Update Fields
 * @default {}
 */
    updateFields?: {
    /** The customer's email address
     */
    email?: string | Expression<string> | PlaceholderValue;
    /** The ID of the physical location where the order was processed. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
     */
    locationId?: string | Expression<string>;
    /** An optional note that a shop owner can attach to the order
     */
    note?: string | Expression<string> | PlaceholderValue;
    /** Shipping Address
     * @default {}
     */
    shippingAddressUi?: {
        /** Shipping Address
     */
    shippingAddressValues?: {
      /** First Name
       */
      firstName?: string | Expression<string> | PlaceholderValue;
      /** Last Name
       */
      lastName?: string | Expression<string> | PlaceholderValue;
      /** Company
       */
      company?: string | Expression<string> | PlaceholderValue;
      /** Country
       */
      country?: string | Expression<string> | PlaceholderValue;
      /** Address Line 1
       */
      address1?: string | Expression<string> | PlaceholderValue;
      /** Address Line 2
       */
      address2?: string | Expression<string> | PlaceholderValue;
      /** City
       */
      city?: string | Expression<string> | PlaceholderValue;
      /** Province
       */
      province?: string | Expression<string> | PlaceholderValue;
      /** Zip Code
       */
      zip?: string | Expression<string> | PlaceholderValue;
      /** Phone
       */
      phone?: string | Expression<string> | PlaceholderValue;
    };
  };
    /** Where the order originated. Can be set only during order creation, and is not writeable afterwards.
     */
    sourceName?: string | Expression<string> | PlaceholderValue;
    /** Tags attached to the order, formatted as a string of comma-separated values
     */
    tags?: string | Expression<string> | PlaceholderValue;
  };
};

export type ShopifyV1OrderUpdateNode = {
  type: 'n8n-nodes-base.shopify';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<ShopifyV1OrderUpdateParams>;
};