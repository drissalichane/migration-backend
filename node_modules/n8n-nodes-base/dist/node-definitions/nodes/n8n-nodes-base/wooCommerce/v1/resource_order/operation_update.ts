/**
 * WooCommerce Node - Version 1
 * Discriminator: resource=order, operation=update
 */


interface Credentials {
  wooCommerceApi: CredentialReference;
}

/** Update a customer */
export type WooCommerceV1OrderUpdateParams = {
  resource: 'order';
  operation: 'update';
/**
 * Order ID
 */
    orderId?: string | Expression<string> | PlaceholderValue;
/**
 * Update Fields
 * @default {}
 */
    updateFields?: {
    /** Currency the order was created with
     */
    currency?: string | Expression<string> | PlaceholderValue;
    /** User ID who owns the order. 0 for guests.
     */
    customerId?: string | Expression<string> | PlaceholderValue;
    /** Note left by customer during checkout
     */
    customerNote?: string | Expression<string> | PlaceholderValue;
    /** Parent order ID
     */
    parentId?: string | Expression<string> | PlaceholderValue;
    /** Payment Method ID
     */
    paymentMethodId?: string | Expression<string> | PlaceholderValue;
    /** Payment Method Title
     */
    paymentMethodTitle?: string | Expression<string> | PlaceholderValue;
    /** A named status for the order
     * @default pending
     */
    status?: 'cancelled' | 'completed' | 'failed' | 'on-hold' | 'pending' | 'processing' | 'refunded' | 'trash' | Expression<string>;
    /** Unique transaction ID
     */
    transactionID?: string | Expression<string> | PlaceholderValue;
  };
/**
 * Billing address
 * @default {}
 */
    billingUi?: {
        /** Address
     */
    billingValues?: {
      /** First Name
       */
      firstName?: string | Expression<string> | PlaceholderValue;
      /** Last Name
       */
      lastName?: string | Expression<string> | PlaceholderValue;
      /** Company
       */
      company?: string | Expression<string> | PlaceholderValue;
      /** Address Line 1
       */
      address_1?: string | Expression<string> | PlaceholderValue;
      /** Address Line 2
       */
      address_2?: string | Expression<string> | PlaceholderValue;
      /** ISO code or name of the state, province or district
       */
      city?: string | Expression<string> | PlaceholderValue;
      /** Postal Code
       */
      postalCode?: string | Expression<string> | PlaceholderValue;
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
/**
 * Coupons line data
 * @default {}
 */
    couponLinesUi?: {
        /** Coupon Line
     */
    couponLinesValues?: Array<{
      /** Coupon code
       */
      code?: string | Expression<string> | PlaceholderValue;
      /** Meta data
       * @default {}
       */
      metadataUi?: {
        /** Metadata
     */
    metadataValues?: Array<{
      /** Name of the metadata key to add
       */
      key?: string | Expression<string> | PlaceholderValue;
      /** Value to set for the metadata key
       */
      value?: string | Expression<string> | PlaceholderValue;
    }>;
  };
    }>;
  };
/**
 * Fee line data
 * @default {}
 */
    feeLinesUi?: {
        /** Fee Line
     */
    feeLinesValues?: Array<{
      /** Fee name
       */
      name?: string | Expression<string> | PlaceholderValue;
      /** Tax class of fee
       */
      taxClass?: string | Expression<string> | PlaceholderValue;
      /** Tax class of fee
       */
      taxStatus?: 'taxable' | 'none' | Expression<string>;
      /** Line total (after discounts)
       */
      total?: string | Expression<string> | PlaceholderValue;
      /** Meta data
       * @default {}
       */
      metadataUi?: {
        /** Metadata
     */
    metadataValues?: Array<{
      /** Name of the metadata key to add
       */
      key?: string | Expression<string> | PlaceholderValue;
      /** Value to set for the metadata key
       */
      value?: string | Expression<string> | PlaceholderValue;
    }>;
  };
    }>;
  };
/**
 * Line item data
 * @default {}
 */
    lineItemsUi?: {
        /** Line Item
     */
    lineItemsValues?: Array<{
      /** Product name
       */
      name?: string | Expression<string> | PlaceholderValue;
      /** Product ID
       * @default 0
       */
      productId?: number | Expression<number>;
      /** Variation ID, if applicable
       * @default 0
       */
      variationId?: number | Expression<number>;
      /** Quantity ordered
       * @default 1
       */
      quantity?: number | Expression<number>;
      /** Slug of the tax class of product
       */
      taxClass?: string | Expression<string> | PlaceholderValue;
      /** Line subtotal (before discounts)
       */
      subtotal?: string | Expression<string> | PlaceholderValue;
      /** Line total (after discounts)
       */
      total?: string | Expression<string> | PlaceholderValue;
      /** Meta data
       * @default {}
       */
      metadataUi?: {
        /** Metadata
     */
    metadataValues?: Array<{
      /** Name of the metadata key to add
       */
      key?: string | Expression<string> | PlaceholderValue;
      /** Value to set for the metadata key
       */
      value?: string | Expression<string> | PlaceholderValue;
    }>;
  };
    }>;
  };
/**
 * Meta data
 * @default {}
 */
    metadataUi?: {
        /** Metadata
     */
    metadataValues?: Array<{
      /** Name of the metadata key to add
       */
      key?: string | Expression<string> | PlaceholderValue;
      /** Value to set for the metadata key
       */
      value?: string | Expression<string> | PlaceholderValue;
    }>;
  };
/**
 * Shipping address
 * @default {}
 */
    shippingUi?: {
        /** Address
     */
    shippingValues?: {
      /** First Name
       */
      firstName?: string | Expression<string> | PlaceholderValue;
      /** Last Name
       */
      lastName?: string | Expression<string> | PlaceholderValue;
      /** Company
       */
      company?: string | Expression<string> | PlaceholderValue;
      /** Address Line 1
       */
      address_1?: string | Expression<string> | PlaceholderValue;
      /** Address Line 2
       */
      address_2?: string | Expression<string> | PlaceholderValue;
      /** ISO code or name of the state, province or district
       */
      city?: string | Expression<string> | PlaceholderValue;
      /** Postal Code
       */
      postalCode?: string | Expression<string> | PlaceholderValue;
      /** Country
       */
      country?: string | Expression<string> | PlaceholderValue;
    };
  };
/**
 * Shipping line data
 * @default {}
 */
    shippingLinesUi?: {
        /** Fee Line
     */
    shippingLinesValues?: Array<{
      /** Shipping method name
       */
      methodTitle?: string | Expression<string> | PlaceholderValue;
      /** Shipping method ID
       */
      'method ID'?: string | Expression<string> | PlaceholderValue;
      /** Line total (after discounts)
       */
      total?: string | Expression<string> | PlaceholderValue;
      /** Meta data
       * @default {}
       */
      metadataUi?: {
        /** Metadata
     */
    metadataValues?: Array<{
      /** Name of the metadata key to add
       */
      key?: string | Expression<string> | PlaceholderValue;
      /** Value to set for the metadata key
       */
      value?: string | Expression<string> | PlaceholderValue;
    }>;
  };
    }>;
  };
};

export type WooCommerceV1OrderUpdateNode = {
  type: 'n8n-nodes-base.wooCommerce';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<WooCommerceV1OrderUpdateParams>;
};