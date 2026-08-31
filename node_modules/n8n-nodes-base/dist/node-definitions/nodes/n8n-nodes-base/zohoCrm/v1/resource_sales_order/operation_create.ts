/**
 * Zoho CRM Node - Version 1
 * Discriminator: resource=salesOrder, operation=create
 */


interface Credentials {
  zohoOAuth2Api: CredentialReference;
}

/** Create an account */
export type ZohoCrmV1SalesOrderCreateParams = {
  resource: 'salesOrder';
  operation: 'create';
/**
 * Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
 * @default []
 */
    accountId?: string | Expression<string>;
/**
 * Subject or title of the sales order
 */
    subject?: string | Expression<string> | PlaceholderValue;
/**
 * Products
 * @default {}
 */
    Product_Details?: {
    /** List Price
     */
    list_price?: number | Expression<number>;
    /** Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
     * @default []
     */
    id?: string | Expression<string>;
    /** Product Description
     */
    product_description?: string | Expression<string> | PlaceholderValue;
    /** Quantity
     * @default 1
     */
    quantity?: number | Expression<number>;
    /** Quantity in Stock
     * @default 0
     */
    quantity_in_stock?: number | Expression<number>;
    /** Tax
     * @default 0
     */
    Tax?: number | Expression<number>;
    /** Total
     * @default 0
     */
    total?: number | Expression<number>;
    /** Total After Discount
     * @default 0
     */
    total_after_discount?: number | Expression<number>;
    /** Total (Net)
     * @default 0
     */
    net_total?: number | Expression<number>;
    /** Unit Price
     * @default 0
     */
    unit_price?: number | Expression<number>;
  };
/**
 * Additional Fields
 * @default {}
 */
    additionalFields?: {
    /** Adjustment in the grand total, if any
     * @default 0
     */
    Adjustment?: number | Expression<number>;
    /** Billing Address
     * @default {}
     */
    Billing_Address?: {
        /** Billing Address Fields
     */
    address_fields?: {
      /** Street
       */
      Billing_Street?: string | Expression<string> | PlaceholderValue;
      /** City
       */
      Billing_City?: string | Expression<string> | PlaceholderValue;
      /** State
       */
      Billing_State?: string | Expression<string> | PlaceholderValue;
      /** Country
       */
      Billing_Country?: string | Expression<string> | PlaceholderValue;
      /** Zip Code
       */
      Billing_Code?: string | Expression<string> | PlaceholderValue;
    };
  };
    /** Name of the carrier
     */
    Carrier?: string | Expression<string> | PlaceholderValue;
    /** Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
     * @default []
     */
    contactId?: string | Expression<string>;
    /** Symbol of the currency in which revenue is generated
     * @default USD
     */
    Currency?: 'USD' | 'EUR' | 'AED' | 'AFN' | 'ALL' | 'ARS' | 'AUD' | 'AZN' | 'BBD' | 'BDT' | 'BGN' | 'BMD' | 'BND' | 'BOB' | 'BRL' | 'BSD' | 'BWP' | 'BZD' | 'CAD' | 'CHF' | 'CLP' | 'CNY' | 'COP' | 'CRC' | 'CZK' | 'DKK' | 'DOP' | 'DZD' | 'EGP' | 'FJD' | 'GBP' | 'GTQ' | 'HKD' | 'HNL' | 'HRK' | 'HUF' | 'IDR' | 'ILS' | 'INR' | 'JMD' | 'JPY' | 'KES' | 'KRW' | 'KZT' | 'LAK' | 'LBP' | 'LKR' | 'LRD' | 'MAD' | 'MMK' | 'MOP' | 'MRO' | 'MUR' | 'MVR' | 'MXN' | 'MYR' | 'NIO' | 'NOK' | 'NPR' | 'NZD' | 'PEN' | 'PGK' | 'PHP' | 'PKR' | 'PLN' | 'QAR' | 'RON' | 'RUB' | 'SAR' | 'SBD' | 'SCR' | 'SEK' | 'SGD' | 'SYP' | 'THB' | 'TOP' | 'TRY' | 'TTD' | 'TWD' | 'UAH' | 'VND' | 'VUV' | 'WST' | 'XCD' | 'XOF' | 'YER' | 'ZAR' | Expression<string>;
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
    /** Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
     * @default []
     */
    dealId?: string | Expression<string>;
    /** Description
     */
    Description?: string | Expression<string> | PlaceholderValue;
    /** Discount applied to the sales order. For example, enter 12 for 12%.
     * @default 0
     */
    Discount?: number | Expression<number>;
    /** Due Date
     */
    Due_Date?: string | Expression<string>;
    /** Exchange rate of the default currency to the home currency
     * @default 0
     */
    Exchange_Rate?: number | Expression<number>;
    /** Total amount for the product after deducting tax and discounts
     * @default 0
     */
    Grand_Total?: number | Expression<number>;
    /** ID of the sales order after creating a case
     */
    SO_Number?: string | Expression<string> | PlaceholderValue;
    /** Commission of sales person on deal closure as a percentage. For example, enter 12 for 12%.
     * @default 0
     */
    Sales_Commission?: number | Expression<number>;
    /** Shipping Address
     * @default {}
     */
    Shipping_Address?: {
        /** Shipping Address Fields
     */
    address_fields?: {
      /** Street
       */
      Shipping_Street?: string | Expression<string> | PlaceholderValue;
      /** City
       */
      Shipping_City?: string | Expression<string> | PlaceholderValue;
      /** State
       */
      Shipping_State?: string | Expression<string> | PlaceholderValue;
      /** Country
       */
      Shipping_Country?: string | Expression<string> | PlaceholderValue;
      /** Zip Code
       */
      Shipping_Code?: string | Expression<string> | PlaceholderValue;
    };
  };
    /** Status of the sales order. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
     * @default []
     */
    Status?: string | Expression<string>;
    /** Total amount for the product excluding tax
     * @default 0
     */
    Sub_Total?: number | Expression<number>;
    /** Tax amount as the sum of sales tax and value-added tax
     * @default 0
     */
    Tax?: number | Expression<number>;
    /** Terms and conditions associated with the purchase order
     */
    Terms_and_Conditions?: string | Expression<string> | PlaceholderValue;
  };
};

export type ZohoCrmV1SalesOrderCreateNode = {
  type: 'n8n-nodes-base.zohoCrm';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<ZohoCrmV1SalesOrderCreateParams>;
};