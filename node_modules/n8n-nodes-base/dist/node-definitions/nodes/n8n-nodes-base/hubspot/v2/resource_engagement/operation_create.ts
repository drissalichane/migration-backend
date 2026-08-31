/**
 * HubSpot Node - Version 2
 * Discriminator: resource=engagement, operation=create
 */


interface Credentials {
  hubspotApi: CredentialReference;
  hubspotAppToken: CredentialReference;
  hubspotOAuth2Api: CredentialReference;
}

/** Create a company */
export type HubspotV2EngagementCreateParams = {
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
 * Engagement Properties
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
    /** Owner ID
     * @default 0
     */
    ownerId?: number | Expression<number>;
    /** Ticket IDs
     */
    ticketIds?: string | Expression<string> | PlaceholderValue;
  };
  };
};

export type HubspotV2EngagementCreateOutput = {
  associations?: {
    companyIds?: Array<number>;
    contactIds?: Array<number>;
    dealIds?: Array<number>;
    ownerIds?: Array<number>;
    ticketIds?: Array<number>;
  };
  engagement?: {
    active?: boolean;
    bodyPreview?: string;
    bodyPreviewHtml?: string;
    bodyPreviewIsTruncated?: boolean;
    createdAt?: number;
    id?: number;
    lastUpdated?: number;
    portalId?: number;
    timestamp?: number;
    type?: string;
  };
  metadata?: {
    status?: string;
  };
};

export type HubspotV2EngagementCreateNode = {
  type: 'n8n-nodes-base.hubspot';
  version: 2;
  credentials?: Credentials;
  config: NodeConfig<HubspotV2EngagementCreateParams>;
  output?: Items<HubspotV2EngagementCreateOutput>;
};