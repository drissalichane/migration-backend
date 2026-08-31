/**
 * Sendy Node - Version 1
 * Discriminator: resource=campaign, operation=create
 */


interface Credentials {
  sendyApi: CredentialReference;
}

/** Create a campaign */
export type SendyV1CampaignCreateParams = {
  resource: 'campaign';
  operation: 'create';
/**
 * The 'From name' of your campaign
 */
    fromName?: string | Expression<string> | PlaceholderValue;
/**
 * The 'From email' of your campaign
 */
    fromEmail?: string | Expression<string> | PlaceholderValue;
/**
 * The 'Reply to' of your campaign
 */
    replyTo?: string | Expression<string> | PlaceholderValue;
/**
 * The 'Title' of your campaign
 */
    title?: string | Expression<string> | PlaceholderValue;
/**
 * The 'Subject' of your campaign
 */
    subject?: string | Expression<string> | PlaceholderValue;
/**
 * The 'HTML version' of your campaign
 */
    htmlText?: string | Expression<string> | PlaceholderValue;
/**
 * Whether to send the campaign as well and not just create a draft. Default is false.
 * @default false
 */
    sendCampaign?: boolean | Expression<boolean>;
/**
 * Brand ID
 * @displayOptions.show { sendCampaign: [false] }
 */
    brandId?: string | Expression<string> | PlaceholderValue;
/**
 * Additional Fields
 * @default {}
 */
    additionalFields?: {
    /** Lists to exclude from your campaign. List IDs should be single or comma-separated.
     */
    excludeListIds?: string | Expression<string> | PlaceholderValue;
    /** Segments to exclude from your campaign. Segment IDs should be single or comma-separated.
     */
    excludeSegmentIds?: string | Expression<string> | PlaceholderValue;
    /** List IDs should be single or comma-separated
     */
    listIds?: string | Expression<string> | PlaceholderValue;
    /** The 'Plain text version' of your campaign
     */
    plainText?: string | Expression<string> | PlaceholderValue;
    /** Google Analytics tags
     */
    queryString?: string | Expression<string> | PlaceholderValue;
    /** Segment IDs should be single or comma-separated
     */
    segmentIds?: string | Expression<string> | PlaceholderValue;
    /** Whether to disable clicks tracking. Default is true.
     * @default true
     */
    trackClicks?: boolean | Expression<boolean>;
    /** Whether to disable opens tracking. Default is true.
     * @default true
     */
    trackOpens?: boolean | Expression<boolean>;
  };
};

export type SendyV1CampaignCreateNode = {
  type: 'n8n-nodes-base.sendy';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<SendyV1CampaignCreateParams>;
};