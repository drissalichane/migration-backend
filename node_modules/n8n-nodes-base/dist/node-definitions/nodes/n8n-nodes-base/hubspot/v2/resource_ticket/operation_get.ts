/**
 * HubSpot Node - Version 2
 * Discriminator: resource=ticket, operation=get
 */


interface Credentials {
  hubspotApi: CredentialReference;
  hubspotAppToken: CredentialReference;
  hubspotOAuth2Api: CredentialReference;
}

/** Get a contact */
export type HubspotV2TicketGetParams = {
  resource: 'ticket';
  operation: 'get';
  authentication?: 'apiKey' | 'appToken' | 'oAuth2' | Expression<string>;
/**
 * Ticket to Get
 * @default {"mode":"list","value":""}
 */
    ticketId?: { __rl: true; mode: 'list' | 'id'; value: string; cachedResultName?: string };
/**
 * Options
 * @default {}
 */
    additionalFields?: {
    /** Include Deleted
     * @default false
     */
    includeDeleted?: boolean | Expression<boolean>;
    /** Whether to include specific Ticket properties in the returned results. Choose from a list, or specify IDs using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;. Choose from the list, or specify IDs using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
     * @default []
     */
    properties?: string[];
    /** Works similarly to properties=, but this parameter will include the history for the specified property, instead of just including the current value. Use this parameter when you need the full history of changes to a property's value.
     */
    propertiesWithHistory?: string | Expression<string> | PlaceholderValue;
  };
};

export type HubspotV2TicketGetOutput = {
  isDeleted?: boolean;
  objectId?: number;
  objectType?: string;
  portalId?: number;
};

export type HubspotV2TicketGetNode = {
  type: 'n8n-nodes-base.hubspot';
  version: 2;
  credentials?: Credentials;
  config: NodeConfig<HubspotV2TicketGetParams>;
  output?: Items<HubspotV2TicketGetOutput>;
};