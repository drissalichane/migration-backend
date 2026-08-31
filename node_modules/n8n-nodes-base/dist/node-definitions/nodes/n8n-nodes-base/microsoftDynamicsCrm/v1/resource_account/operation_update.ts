/**
 * Microsoft Dynamics CRM Node - Version 1
 * Discriminator: resource=account, operation=update
 */


interface Credentials {
  microsoftDynamicsOAuth2Api: CredentialReference;
}

export type MicrosoftDynamicsCrmV1AccountUpdateParams = {
  resource: 'account';
  operation: 'update';
/**
 * Account ID
 */
    accountId?: string | Expression<string> | PlaceholderValue;
/**
 * Update Fields
 * @default {}
 */
    updateFields?: {
    /** Category to indicate whether the customer account is standard or preferred. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
     */
    accountcategorycode?: string | Expression<string>;
    /** Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
     */
    accountratingcode?: string | Expression<string>;
    /** Address
     * @default {}
     */
    addresses?: {
        /** Address Fields
     */
    address?: Array<{
      /** Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
       */
      addresstypecode?: string | Expression<string>;
      /** Line1
       */
      line1?: string | Expression<string> | PlaceholderValue;
      /** Line2
       */
      line2?: string | Expression<string> | PlaceholderValue;
      /** Line3
       */
      line3?: string | Expression<string> | PlaceholderValue;
      /** City
       */
      city?: string | Expression<string> | PlaceholderValue;
      /** State or Province
       */
      stateorprovince?: string | Expression<string> | PlaceholderValue;
      /** Country
       */
      country?: string | Expression<string> | PlaceholderValue;
      /** Name
       */
      name?: string | Expression<string> | PlaceholderValue;
      /** Postalcode
       */
      postalcode?: string | Expression<string> | PlaceholderValue;
      /** Primary Contact Name
       */
      primarycontactname?: string | Expression<string> | PlaceholderValue;
      /** Telephone1
       */
      telephone1?: string | Expression<string> | PlaceholderValue;
      /** Telephone2
       */
      telephone2?: string | Expression<string> | PlaceholderValue;
      /** Fax
       */
      fax?: string | Expression<string> | PlaceholderValue;
    }>;
  };
    /** The legal designation or other business type of the account for contracts or reporting purposes. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
     */
    businesstypecode?: string | Expression<string>;
    /** Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
     */
    customersizecode?: string | Expression<string>;
    /** Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
     */
    customertypecode?: string | Expression<string>;
    /** Additional information to describe the account, such as an excerpt from the company’s website
     */
    description?: string | Expression<string> | PlaceholderValue;
    /** The primary email address for the account
     */
    emailaddress1?: string | Expression<string> | PlaceholderValue;
    /** The secondary email address for the account
     */
    emailaddress2?: string | Expression<string> | PlaceholderValue;
    /** Alternate email address for the account
     */
    emailaddress3?: string | Expression<string> | PlaceholderValue;
    /** Fax
     */
    fax?: string | Expression<string> | PlaceholderValue;
    /** URL for the account’s FTP site to enable users to access data and share documents
     */
    ftpsiteurl?: string | Expression<string> | PlaceholderValue;
    /** The account’s primary industry for use in marketing segmentation and demographic analysis. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
     */
    industrycode?: string | Expression<string>;
    /** Company o business name
     */
    name?: string | Expression<string> | PlaceholderValue;
    /** Credit limit of the account. This is a useful reference when you address invoice and accounting issues with the customer.
     */
    creditlimit?: number | Expression<number>;
    /** Number of employees that work at the account for use in marketing segmentation and demographic analysis
     * @default 0
     */
    numberofemployees?: number | Expression<number>;
    /** The payment terms to indicate when the customer needs to pay the total amount. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
     */
    paymenttermscode?: string | Expression<string>;
    /** Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
     */
    preferredappointmentdaycode?: string | Expression<string>;
    /** Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
     */
    preferredappointmenttimecode?: string | Expression<string>;
    /** Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
     */
    preferredcontactmethodcode?: string | Expression<string>;
    /** Primary Satori ID
     */
    primarysatoriid?: string | Expression<string> | PlaceholderValue;
    /** Primary Twitter ID
     */
    primarytwitterid?: string | Expression<string> | PlaceholderValue;
    /** The annual revenue for the account, used as an indicator in financial performance analysis
     */
    revenue?: number | Expression<number>;
    /** The number of shares available to the public for the account. This number is used as an indicator in financial performance analysis.
     */
    sharesoutstanding?: number | Expression<number>;
    /** Shipping method for deliveries sent to the account’s address to designate the preferred carrier or other delivery option. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
     */
    shippingmethodcode?: string | Expression<string>;
    /** The Standard Industrial Classification (SIC) code that indicates the account’s primary industry of business, for use in marketing segmentation and demographic analysis
     */
    sic?: string | Expression<string> | PlaceholderValue;
    /** Stage ID
     */
    stageid?: string | Expression<string> | PlaceholderValue;
    /** The stock exchange at which the account is listed to track their stock and financial performance of the company
     */
    stockexchange?: string | Expression<string> | PlaceholderValue;
    /** The main phone number for this account
     */
    telephone1?: string | Expression<string> | PlaceholderValue;
    /** The second phone number for this account
     */
    telephone2?: string | Expression<string> | PlaceholderValue;
    /** The third phone number for this account
     */
    telephone3?: string | Expression<string> | PlaceholderValue;
    /** Region or territory for the account for use in segmentation and analysis. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
     */
    territorycode?: string | Expression<string>;
    /** Type the stock exchange symbol for the account to track financial performance of the company. You can click the code entered in this field to access the latest trading information from MSN Money.
     */
    tickersymbol?: string | Expression<string> | PlaceholderValue;
    /** The account’s website URL to get quick details about the company profile
     */
    websiteurl?: string | Expression<string> | PlaceholderValue;
    /** The phonetic spelling of the company name, if specified in Japanese, to make sure the name is pronounced correctly in phone calls and other communications
     */
    yominame?: string | Expression<string> | PlaceholderValue;
  };
/**
 * Options
 * @default {}
 */
    options?: {
    /** Fields the response will include. Choose from the list, or specify IDs using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
     * @default []
     */
    returnFields?: string[];
  };
};

export type MicrosoftDynamicsCrmV1AccountUpdateNode = {
  type: 'n8n-nodes-base.microsoftDynamicsCrm';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<MicrosoftDynamicsCrmV1AccountUpdateParams>;
};