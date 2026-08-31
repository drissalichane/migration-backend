/**
 * HubSpot Node - Version 2
 * Discriminator: resource=deal, operation=create
 */


interface Credentials {
  hubspotApi: CredentialReference;
  hubspotAppToken: CredentialReference;
  hubspotOAuth2Api: CredentialReference;
}

/** Create a company */
export type HubspotV2DealCreateParams = {
  resource: 'deal';
  operation: 'create';
  authentication?: 'apiKey' | 'appToken' | 'oAuth2' | Expression<string>;
/**
 * The deal stage is required when creating a deal. See the CRM Pipelines API for details on managing pipelines and stages. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
 */
    stage?: string | Expression<string>;
/**
 * Deal Properties
 * @default {}
 */
    additionalFields?: {
    /** Amount
     */
    amount?: string | Expression<string> | PlaceholderValue;
    /** Whether to include specific Associated Company properties in the returned results. Choose from a list, or specify IDs using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;. Choose from the list, or specify IDs using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
     * @default []
     */
    associatedCompany?: string[];
    /** Whether to include specific Associated Vid in the returned results. Choose from a list, or specify IDs using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;. Choose from the list, or specify IDs using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
     * @default []
     */
    associatedVids?: string[];
    /** When using expressions, the time should be specified in YYYY-MM-DD hh-mm-ss format
     */
    closeDate?: string | Expression<string>;
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
    /** Deal Description
     */
    description?: string | Expression<string> | PlaceholderValue;
    /** Deal Name
     */
    dealName?: string | Expression<string> | PlaceholderValue;
    /** The HubSpot user to be assigned to the deal
     * @default {"mode":"list","value":""}
     */
    dealOwner?: { __rl: true; mode: 'list' | 'id'; value: string; cachedResultName?: string };
    /** Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
     */
    dealType?: string | Expression<string>;
    /** Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
     */
    pipeline?: string | Expression<string>;
  };
};

export type HubspotV2DealCreateNode = {
  type: 'n8n-nodes-base.hubspot';
  version: 2;
  credentials?: Credentials;
  config: NodeConfig<HubspotV2DealCreateParams>;
};