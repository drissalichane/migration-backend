/**
 * Microsoft Outlook Node - Version 1
 * Discriminator: resource=messageAttachment, operation=get
 */


interface Credentials {
  microsoftOutlookOAuth2Api: CredentialReference;
}

/** Get a single draft */
export type MicrosoftOutlookV1MessageAttachmentGetParams = {
  resource: 'messageAttachment';
  operation: 'get';
/**
 * Message ID
 */
    messageId?: string | Expression<string> | PlaceholderValue;
/**
 * Attachment ID
 */
    attachmentId?: string | Expression<string> | PlaceholderValue;
/**
 * Additional Fields
 * @default {}
 */
    additionalFields?: {
    /** Fields the response will contain. Multiple can be added separated by ,.
     */
    fields?: string | Expression<string> | PlaceholderValue;
    /** Microsoft Graph API OData $filter query
     */
    filter?: string | Expression<string> | PlaceholderValue;
  };
};

export type MicrosoftOutlookV1MessageAttachmentGetNode = {
  type: 'n8n-nodes-base.microsoftOutlook';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<MicrosoftOutlookV1MessageAttachmentGetParams>;
};