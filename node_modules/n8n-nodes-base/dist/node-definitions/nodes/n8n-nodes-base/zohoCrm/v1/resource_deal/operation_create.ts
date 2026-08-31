/**
 * Zoho CRM Node - Version 1
 * Discriminator: resource=deal, operation=create
 */


interface Credentials {
  zohoOAuth2Api: CredentialReference;
}

/** Create an account */
export type ZohoCrmV1DealCreateParams = {
  resource: 'deal';
  operation: 'create';
/**
 * Deal Name
 */
    dealName?: string | Expression<string> | PlaceholderValue;
/**
 * Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
 * @default []
 */
    stage?: string | Expression<string>;
/**
 * Additional Fields
 * @default {}
 */
    additionalFields?: {
    /** Monetary amount of the deal
     */
    Amount?: number | Expression<number>;
    /** Closing Date
     */
    Closing_Date?: string | Expression<string>;
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
    /** Average number of days to convert the lead into a deal
     */
    Lead_Conversion_Time?: number | Expression<number>;
    /** Description of the next step in the sales process
     */
    Next_Step?: string | Expression<string> | PlaceholderValue;
    /** Average number of days to convert the lead into a deal and to win the deal
     */
    Overall_Sales_Duration?: number | Expression<number>;
    /** Probability of deal closure as a percentage. For example, enter 12 for 12%.
     */
    Probability?: number | Expression<number>;
    /** Average number of days for the deal to be won
     * @default 0
     */
    Sales_Cycle_Duration?: number | Expression<number>;
  };
};

export type ZohoCrmV1DealCreateNode = {
  type: 'n8n-nodes-base.zohoCrm';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<ZohoCrmV1DealCreateParams>;
};