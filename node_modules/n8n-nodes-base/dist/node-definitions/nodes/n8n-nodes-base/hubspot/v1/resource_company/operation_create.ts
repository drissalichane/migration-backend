/**
 * HubSpot Node - Version 1
 * Discriminator: resource=company, operation=create
 */


interface Credentials {
  hubspotApi: CredentialReference;
  hubspotAppToken: CredentialReference;
  hubspotOAuth2Api: CredentialReference;
}

/** Create a company */
export type HubspotV1CompanyCreateParams = {
  resource: 'company';
  operation: 'create';
  authentication?: 'apiKey' | 'appToken' | 'oAuth2' | Expression<string>;
/**
 * Name
 */
    name?: string | Expression<string> | PlaceholderValue;
/**
 * Additional Fields
 * @default {}
 */
    additionalFields?: {
    /** About Us
     */
    aboutUs?: string | Expression<string> | PlaceholderValue;
    /** The actual or estimated annual revenue of the company
     * @default 0
     */
    annualRevenue?: number | Expression<number>;
    /** The city where the company is located
     */
    city?: string | Expression<string> | PlaceholderValue;
    /** The date the company or organization was closed as a customer
     */
    closeDate?: string | Expression<string>;
    /** The domain name of the company or organization
     */
    companyDomainName?: string | Expression<string> | PlaceholderValue;
    /** The owner of the company. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
     */
    companyOwner?: string | Expression<string>;
    /** The country/region in which the company or organization is located
     */
    countryRegion?: string | Expression<string> | PlaceholderValue;
    /** Custom Properties
     * @default {}
     */
    customPropertiesUi?: {
        /** Custom Property
     */
    customPropertiesValues?: Array<{
      /** Name of the property. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
       */
      property?: string | Expression<string>;
      /** Value of the property
       */
      value?: string | Expression<string> | PlaceholderValue;
    }>;
  };
    /** A short statement about the company's mission and goals
     */
    description?: string | Expression<string> | PlaceholderValue;
    /** Number of facebook fans
     * @default 0
     */
    facebookFans?: number | Expression<number>;
    /** The URL of the Google Plus page for the company or organization
     */
    googlePlusPage?: string | Expression<string> | PlaceholderValue;
    /** The type of business the company performs. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
     */
    industry?: string | Expression<string>;
    /** Whether that the company is publicly traded
     * @default false
     */
    isPublic?: boolean | Expression<boolean>;
    /** The company's sales, prospecting or outreach status. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
     */
    leadStatus?: string | Expression<string>;
    /** The most advanced lifecycle stage across all contacts associated with this company or organization. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
     */
    lifecycleStatus?: string | Expression<string>;
    /** The LinkedIn bio for the company or organization
     */
    linkedinBio?: string | Expression<string> | PlaceholderValue;
    /** The URL of the LinkedIn company page for the company or organization
     */
    linkedInCompanyPage?: string | Expression<string> | PlaceholderValue;
    /** The total number of employees who work for the company or organization
     * @default 0
     */
    numberOfEmployees?: number | Expression<number>;
    /** Original source for the contact with the earliest activity for this company or organization. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
     */
    originalSourceType?: string | Expression<string>;
    /** A company's primary phone number. Powered by HubSpot Insights.
     */
    phoneNumber?: string | Expression<string> | PlaceholderValue;
    /** The postal or zip code of the company or organization. Powered by HubSpot Insights.
     */
    postalCode?: string | Expression<string> | PlaceholderValue;
    /** The state or region in which the company or organization is located. Powered by HubSpot Insights.
     */
    stateRegion?: string | Expression<string> | PlaceholderValue;
    /** The street address of the company or organization, including unit number. Powered by HubSpot Insights.
     */
    streetAddress?: string | Expression<string> | PlaceholderValue;
    /** The additional address of the company or organization. Powered by HubSpot Insights.
     */
    streetAddress2?: string | Expression<string> | PlaceholderValue;
    /** The Target Account property is a means to flag high priority companies if you are following an account based strategy. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
     */
    targetAccount?: string | Expression<string>;
    /** The time zone where the company or organization is located. Powered by HubSpot Insights.
     */
    timezone?: string | Expression<string> | PlaceholderValue;
    /** The total amount of money raised by the company. Powered by HubSpot Insights.
     * @default 0
     */
    totalMoneyRaised?: number | Expression<number>;
    /** The Twitter bio of the company or organization
     */
    twitterBio?: string | Expression<string> | PlaceholderValue;
    /** The number of Twitter followers of the company or organization
     * @default 0
     */
    twitterFollowers?: number | Expression<number>;
    /** The main twitter account of the company or organization
     */
    twitterHandle?: string | Expression<string> | PlaceholderValue;
    /** The optional classification of this company record - prospect, partner, etc. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
     */
    type?: string | Expression<string>;
    /** The web technologies used by the company or organization. Powered by HubSpot Insights. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
     */
    webTechnologies?: string | Expression<string>;
    /** The main website of the company or organization. This property is used to identify unique companies. Powered by HubSpot Insights.
     */
    websiteUrl?: string | Expression<string> | PlaceholderValue;
    /** The year the company was created. Powered by HubSpot Insights.
     */
    yearFounded?: string | Expression<string> | PlaceholderValue;
  };
};

export type HubspotV1CompanyCreateNode = {
  type: 'n8n-nodes-base.hubspot';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<HubspotV1CompanyCreateParams>;
};