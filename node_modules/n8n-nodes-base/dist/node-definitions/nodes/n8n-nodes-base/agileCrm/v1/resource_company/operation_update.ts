/**
 * Agile CRM Node - Version 1
 * Discriminator: resource=company, operation=update
 */


interface Credentials {
  agileCrmApi: CredentialReference;
}

/** Update contact properties */
export type AgileCrmV1CompanyUpdateParams = {
  resource: 'company';
  operation: 'update';
/**
 * Unique identifier for a particular company
 */
    companyId?: string | Expression<string> | PlaceholderValue;
/**
 * JSON Parameters
 * @default false
 */
    jsonParameters?: boolean | Expression<boolean>;
/**
 * Object of values to set as described &lt;a href="https://github.com/agilecrm/rest-api#1-companys---companies-api"&gt;here&lt;/a&gt;
 * @displayOptions.show { jsonParameters: [true] }
 */
    additionalFieldsJson?: IDataObject | string | Expression<string>;
/**
 * Additional Fields
 * @displayOptions.show { jsonParameters: [false] }
 * @default {}
 */
    additionalFields?: {
    /** Company address
     * @default {}
     */
    addressOptions?: {
        /** Address Properties
     */
    addressProperties?: Array<{
      /** Type of address
       */
      subtype?: 'postal' | 'office' | Expression<string>;
      /** Full address
       */
      address?: string | Expression<string> | PlaceholderValue;
    }>;
  };
    /** Company email
     */
    email?: string | Expression<string> | PlaceholderValue;
    /** Rating of company (Max value 5). This is not applicable for companies.
     */
    starValue?: 0 | 1 | 2 | 3 | 4 | 5 | Expression<number>;
    /** Unique identifiers added to company, for easy management of companys. This is not applicable for companies.
     * @default []
     */
    tags?: string | Expression<string> | PlaceholderValue;
    /** Company name
     */
    name?: string | Expression<string> | PlaceholderValue;
    /** Company phone
     */
    phone?: string | Expression<string> | PlaceholderValue;
    /** Companys websites
     * @default {}
     */
    websiteOptions?: {
        /** Website Properties.
     */
    websiteProperties?: Array<{
      /** Type of website
       */
      subtype?: 'facebook' | 'feed' | 'flickr' | 'github' | 'googlePlus' | 'linkedin' | 'skype' | 'twitter' | 'url' | 'xing' | 'youtube' | Expression<string>;
      /** Website URL
       */
      url?: string | Expression<string> | PlaceholderValue;
    }>;
  };
    /** Custom Properties
     * @default {}
     */
    customProperties?: {
        /** Property
     */
    customProperty?: Array<{
      /** Property name
       */
      name?: string | Expression<string> | PlaceholderValue;
      /** Property sub type
       */
      subtype?: string | Expression<string> | PlaceholderValue;
      /** Property value
       */
      value?: string | Expression<string> | PlaceholderValue;
    }>;
  };
  };
};

export type AgileCrmV1CompanyUpdateNode = {
  type: 'n8n-nodes-base.agileCrm';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<AgileCrmV1CompanyUpdateParams>;
};