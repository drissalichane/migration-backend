/**
 * HubSpot Node - Version 1
 * Discriminator: resource=engagement, operation=create
 */


interface Credentials {
  hubspotApi: CredentialReference;
  hubspotAppToken: CredentialReference;
  hubspotOAuth2Api: CredentialReference;
}

/** Create a company */
export type HubspotV1EngagementCreateParams = {
  resource: 'engagement';
  operation: 'create';
  authentication?: 'apiKey' | 'appToken' | 'oAuth2' | Expression<string>;
/**
 * Type
 */
    type?: 'call' | 'email' | 'meeting' | 'task' | Expression<string>;
/**
 * Metadata
 * @displayOptions.show { type: ["task"] }
 * @default {}
 */
    metadata?: {
    /** Body
     */
    body?: string | Expression<string> | PlaceholderValue;
    /** For Object Type
     */
    forObjectType?: 'COMPANY' | 'CONTACT' | Expression<string>;
    /** Status
     */
    status?: 'COMPLETED' | 'DEFERRED' | 'IN_PROGRESS' | 'NOT_STARTED' | 'WAITING' | Expression<string>;
    /** Subject
     */
    subject?: string | Expression<string> | PlaceholderValue;
  };
/**
 * Additional Fields
 * @default {}
 */
    additionalFields?: {
    /** Associations
     * @default {}
     */
    associations?: {
    /** Company IDs
     */
    companyIds?: string | Expression<string> | PlaceholderValue;
    /** Contact IDs
     */
    contactIds?: string | Expression<string> | PlaceholderValue;
    /** Deals IDs
     */
    dealIds?: string | Expression<string> | PlaceholderValue;
    /** Owner IDs
     */
    ownerIds?: string | Expression<string> | PlaceholderValue;
    /** Ticket IDs
     */
    ticketIds?: string | Expression<string> | PlaceholderValue;
  };
  };
};

export type HubspotV1EngagementCreateNode = {
  type: 'n8n-nodes-base.hubspot';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<HubspotV1EngagementCreateParams>;
};