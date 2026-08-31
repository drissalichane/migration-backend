/**
 * Microsoft Outlook Node - Version 1
 * Discriminator: resource=messageAttachment, operation=download
 */


interface Credentials {
  microsoftOutlookOAuth2Api: CredentialReference;
}

/** Download attachment content */
export type MicrosoftOutlookV1MessageAttachmentDownloadParams = {
  resource: 'messageAttachment';
  operation: 'download';
/**
 * Message ID
 */
    messageId?: string | Expression<string> | PlaceholderValue;
/**
 * Attachment ID
 */
    attachmentId?: string | Expression<string> | PlaceholderValue;
/**
 * Put Output File in Field
 * @hint The name of the output binary field to put the file in
 * @default data
 */
    binaryPropertyName?: string | Expression<string> | PlaceholderValue;
};

export type MicrosoftOutlookV1MessageAttachmentDownloadNode = {
  type: 'n8n-nodes-base.microsoftOutlook';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<MicrosoftOutlookV1MessageAttachmentDownloadParams>;
};