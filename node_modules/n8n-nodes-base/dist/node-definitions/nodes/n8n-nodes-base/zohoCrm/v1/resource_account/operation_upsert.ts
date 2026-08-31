/**
 * Zoho CRM Node - Version 1
 * Discriminator: resource=account, operation=upsert
 */


interface Credentials {
  zohoOAuth2Api: CredentialReference;
}

/** Create a new record, or update the current one if it already exists (upsert) */
export type ZohoCrmV1AccountUpsertParams = {
  resource: 'account';
  operation: 'upsert';
/**
 * Name of the account. If a record with this account name exists it will be updated, otherwise a new one will be created.
 */
    accountName?: string | Expression<string> | PlaceholderValue;
/**
 * Additional Fields
 * @default {}
 */
    additionalFields?: {
    /** Account Number
     */
    Account_Number?: string | Expression<string> | PlaceholderValue;
    /** Name of the account’s location, e.g. Headquarters or London
     */
    Account_Site?: string | Expression<string> | PlaceholderValue;
    /** Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
     * @default []
     */
    Account_Type?: string | Expression<string>;
    /** Annual Revenue
     */
    Annual_Revenue?: number | Expression<number>;
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
    /** Contact Details
     */
    Contact_Details?: string | Expression<string> | PlaceholderValue;
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
    /** Description
     */
    Description?: string | Expression<string> | PlaceholderValue;
    /** Number of employees in the account’s company
     */
    Employees?: number | Expression<number>;
    /** Exchange rate of the default currency to the home currency
     */
    Exchange_Rate?: number | Expression<number>;
    /** Fax
     */
    Fax?: string | Expression<string> | PlaceholderValue;
    /** Industry
     */
    Industry?: string | Expression<string> | PlaceholderValue;
    /** Phone
     */
    Phone?: string | Expression<string> | PlaceholderValue;
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
    /** Ticker Symbol
     */
    Ticker_Symbol?: string | Expression<string> | PlaceholderValue;
    /** Website
     */
    Website?: string | Expression<string> | PlaceholderValue;
  };
};

export type ZohoCrmV1AccountUpsertNode = {
  type: 'n8n-nodes-base.zohoCrm';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<ZohoCrmV1AccountUpsertParams>;
};