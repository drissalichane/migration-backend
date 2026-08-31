/**
 * HubSpot Node - Version 1
 * Discriminator: resource=deal, operation=update
 */


interface Credentials {
  hubspotApi: CredentialReference;
  hubspotAppToken: CredentialReference;
  hubspotOAuth2Api: CredentialReference;
}

/** Update a company */
export type HubspotV1DealUpdateParams = {
  resource: 'deal';
  operation: 'update';
  authentication?: 'apiKey' | 'appToken' | 'oAuth2' | Expression<string>;
/**
 * Unique identifier for a particular deal
 */
    dealId?: string | Expression<string> | PlaceholderValue;
/**
 * Update Fields
 * @default {}
 */
    updateFields?: {
    /** Amount
     */
    amount?: string | Expression<string> | PlaceholderValue;
    /** Close Date
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
    /** The dealstage is required when creating a deal. See the CRM Pipelines API for details on managing pipelines and stages. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
     */
    stage?: string | Expression<string>;
    /** Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
     */
    dealType?: string | Expression<string>;
    /** Pipeline
     */
    pipeline?: string | Expression<string> | PlaceholderValue;
  };
};

export type HubspotV1DealUpdateNode = {
  type: 'n8n-nodes-base.hubspot';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<HubspotV1DealUpdateParams>;
};