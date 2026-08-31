/**
 * HubSpot Node - Version 1
 * Discriminator: resource=contact, operation=upsert
 */


interface Credentials {
  hubspotApi: CredentialReference;
  hubspotAppToken: CredentialReference;
  hubspotOAuth2Api: CredentialReference;
}

/** Create a new contact, or update the current one if it already exists (upsert) */
export type HubspotV1ContactUpsertParams = {
  resource: 'contact';
  operation: 'upsert';
  authentication?: 'apiKey' | 'appToken' | 'oAuth2' | Expression<string>;
/**
 * Email
 */
    email?: string | Expression<string> | PlaceholderValue;
/**
 * By default the response only includes the ID. If this option gets activated, it will resolve the data automatically.
 * @default true
 */
    resolveData?: boolean | Expression<boolean>;
/**
 * Additional Fields
 * @default {}
 */
    additionalFields?: {
    /** Annual Revenue
     * @default 0
     */
    annualRevenue?: number | Expression<number>;
    /** Companies associated with the ticket. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
     */
    associatedCompanyId?: string | Expression<string>;
    /** City
     */
    city?: string | Expression<string> | PlaceholderValue;
    /** Clicked Facebook Ad
     */
    clickedFacebookAd?: string | Expression<string> | PlaceholderValue;
    /** Close Date
     */
    closeDate?: string | Expression<string>;
    /** Company Name
     */
    companyName?: string | Expression<string> | PlaceholderValue;
    /** Company Size
     */
    companySize?: string | Expression<string> | PlaceholderValue;
    /** Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
     */
    contactOwner?: string | Expression<string>;
    /** Country/Region
     */
    country?: string | Expression<string> | PlaceholderValue;
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
    /** Date of Birth
     */
    dateOfBirth?: string | Expression<string>;
    /** Degree
     */
    degree?: string | Expression<string> | PlaceholderValue;
    /** Facebook Click ID
     */
    facebookClickId?: string | Expression<string> | PlaceholderValue;
    /** Fax Number
     */
    faxNumber?: string | Expression<string> | PlaceholderValue;
    /** A contact's field of study. This property is required for the Facebook Ads Integration. This property will be automatically synced via the Lead Ads tool
     */
    fieldOfStudy?: string | Expression<string> | PlaceholderValue;
    /** A contact's first name
     */
    firstName?: string | Expression<string> | PlaceholderValue;
    /** Gender
     */
    gender?: string | Expression<string> | PlaceholderValue;
    /** Google Ad Click ID
     */
    googleAdClickId?: string | Expression<string> | PlaceholderValue;
    /** A contact's graduation date. This property is required for the Facebook Ads Integration. This property will be automatically synced via the Lead Ads tool
     */
    graduationDate?: string | Expression<string>;
    /** The industry a contact is in
     */
    industry?: string | Expression<string> | PlaceholderValue;
    /** A contact's job function. This property is required for the Facebook Ads Integration. This property will be automatically synced via the Lead Ads tool
     */
    jobFunction?: string | Expression<string> | PlaceholderValue;
    /** A contact's job title
     */
    jobTitle?: string | Expression<string> | PlaceholderValue;
    /** A contact's last name
     */
    lastName?: string | Expression<string> | PlaceholderValue;
    /** The contact's sales, prospecting or outreach status. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
     */
    leadStatus?: string | Expression<string>;
    /** Legal basis for processing contact's data; 'Not applicable' will exempt the contact from GDPR protections. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
     */
    processingContactData?: string | Expression<string>;
    /** The qualification of contacts to sales readiness. It can be set through imports, forms, workflows, and manually on a per contact basis. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
     */
    lifeCycleStage?: string | Expression<string>;
    /** A contact's marital status. This property is required for the Facebook Ads Integration. This property will be automatically synced via the Lead Ads tool
     */
    maritalStatus?: string | Expression<string> | PlaceholderValue;
    /** The notes relating to the contact's content membership
     */
    membershipNote?: string | Expression<string> | PlaceholderValue;
    /** A default property to be used for any message or comments a contact may want to leave on a form
     */
    message?: string | Expression<string> | PlaceholderValue;
    /** A contact's mobile phone number
     */
    mobilePhoneNumber?: string | Expression<string> | PlaceholderValue;
    /** The number of company employees. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
     */
    numberOfEmployees?: string | Expression<string>;
    /** The first known source through which a contact found your website. Source is automatically set by HubSpot, but may be updated manually. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
     */
    originalSource?: string | Expression<string>;
    /** A contact's primary phone number
     */
    phoneNumber?: string | Expression<string> | PlaceholderValue;
    /** &lt;p&gt;Used to include specific company properties in the results. By default, the results will only include company ID and will not include the values for any properties for your company.&lt;/p&gt;&lt;p&gt;Including this parameter will include the data for the specified property in the results. You can include this parameter multiple times to request multiple properties separated by a comma: &lt;code&gt;,&lt;/code&gt;.&lt;/p&gt;. Choose from the list, or specify IDs using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
     * @displayOptions.show { /resolveData: [true] }
     * @default []
     */
    properties?: string[];
    /** The contact's zip code. This might be set via import, form, or integration.
     */
    postalCode?: string | Expression<string> | PlaceholderValue;
    /** Set your contact's preferred language for communications. This property can be changed from an import, form, or integration. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
     */
    prefferedLanguage?: string | Expression<string>;
    /** A contact's relationship status. This property is required for the Facebook Ads Integration. This property will be automatically synced via the Lead Ads tool
     */
    relationshipStatus?: string | Expression<string> | PlaceholderValue;
    /** The title used to address a contact
     */
    salutation?: string | Expression<string> | PlaceholderValue;
    /** A contact's school. This property is required for the Facebook Ads Integration. This property will be automatically synced via the Lead Ads tool
     */
    school?: string | Expression<string> | PlaceholderValue;
    /** A contact's seniority. This property is required for the Facebook Ads Integration. This property will be automatically synced via the Lead Ads tool
     */
    seniority?: string | Expression<string> | PlaceholderValue;
    /** A contact's start date. This property is required for the Facebook Ads Integration. This property will be automatically synced via the Lead Ads tool
     */
    startDate?: string | Expression<string>;
    /** The contact's state of residence. This might be set via import, form, or integration.
     */
    stateRegion?: string | Expression<string> | PlaceholderValue;
    /** The status of the contact's content membership. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
     */
    status?: string | Expression<string>;
    /** A contact's street address, including apartment or unit #
     */
    streetAddress?: string | Expression<string> | PlaceholderValue;
    /** The contact's Twitter handle. This is set by HubSpot using the contact's email address.
     */
    twitterUsername?: string | Expression<string> | PlaceholderValue;
    /** The contact's company website
     */
    websiteUrl?: string | Expression<string> | PlaceholderValue;
    /** A contact's work email. This property is required for the Facebook Ads Integration. This property will be automatically synced via the Lead Ads tool
     */
    workEmail?: string | Expression<string> | PlaceholderValue;
  };
};

export type HubspotV1ContactUpsertNode = {
  type: 'n8n-nodes-base.hubspot';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<HubspotV1ContactUpsertParams>;
};