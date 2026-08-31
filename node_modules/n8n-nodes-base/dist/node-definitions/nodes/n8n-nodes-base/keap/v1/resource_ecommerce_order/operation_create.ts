/**
 * Keap Node - Version 1
 * Discriminator: resource=ecommerceOrder, operation=create
 */


interface Credentials {
  keapOAuth2Api: CredentialReference;
}

/** Create a company */
export type KeapV1EcommerceOrderCreateParams = {
  resource: 'ecommerceOrder';
  operation: 'create';
/**
 * Contact ID
 */
    contactId?: string | Expression<string> | PlaceholderValue;
/**
 * Order Date
 */
    orderDate?: string | Expression<string>;
/**
 * Order Title
 */
    orderTitle?: string | Expression<string> | PlaceholderValue;
/**
 * Order Type
 */
    orderType?: 'offline' | 'online' | Expression<string>;
/**
 * Additional Fields
 * @default {}
 */
    additionalFields?: {
    /** Lead Affiliate ID
     * @default 0
     */
    leadAffiliateId?: number | Expression<number>;
    /** Uses multiple strings separated by comma as promo codes. The corresponding discount will be applied to the order.
     */
    promoCodes?: string | Expression<string> | PlaceholderValue;
    /** Sales Affiliate ID
     * @default 0
     */
    salesAffiliateId?: number | Expression<number>;
  };
/**
 * Shipping Address
 * @default {}
 */
    addressUi?: {
        /** Address
     */
    addressValues?: {
      /** Company
       */
      company?: string | Expression<string> | PlaceholderValue;
      /** Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
       */
      countryCode?: string | Expression<string>;
      /** First Name
       */
      firstName?: string | Expression<string> | PlaceholderValue;
      /** Middle Name
       */
      middleName?: string | Expression<string> | PlaceholderValue;
      /** Last Name
       */
      lastName?: string | Expression<string> | PlaceholderValue;
      /** Line 1
       */
      line1?: string | Expression<string> | PlaceholderValue;
      /** Line 2
       */
      line2?: string | Expression<string> | PlaceholderValue;
      /** Locality
       */
      locality?: string | Expression<string> | PlaceholderValue;
      /** Region
       */
      region?: string | Expression<string> | PlaceholderValue;
      /** Zip Code
       */
      zipCode?: string | Expression<string> | PlaceholderValue;
      /** Zip Four
       */
      zipFour?: string | Expression<string> | PlaceholderValue;
      /** Phone
       */
      phone?: string | Expression<string> | PlaceholderValue;
    };
  };
/**
 * Order Items
 * @default {}
 */
    orderItemsUi?: {
        /** Order Item
     */
    orderItemsValues?: Array<{
      /** Description
       */
      description?: string | Expression<string> | PlaceholderValue;
      /** Overridable price of the product, if not specified, the default will be used
       * @default 0
       */
      price?: number | Expression<number>;
      /** Product ID
       * @default 0
       */
      'product ID'?: number | Expression<number>;
      /** Quantity
       * @default 1
       */
      quantity?: number | Expression<number>;
    }>;
  };
};

export type KeapV1EcommerceOrderCreateNode = {
  type: 'n8n-nodes-base.keap';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<KeapV1EcommerceOrderCreateParams>;
};