/**
 * Microsoft Outlook Node - Version 2
 * Discriminator: resource=messageAttachment, operation=download
 */


interface Credentials {
  microsoftOutlookOAuth2Api: CredentialReference;
}

/** Download an attachment from a message */
export type MicrosoftOutlookV2MessageAttachmentDownloadParams = {
  resource: 'messageAttachment';
  operation: 'download';
/**
 * Message
 * @default {"mode":"list","value":""}
 */
    messageId?: { __rl: true; mode: 'list' | 'id'; value: string; cachedResultName?: string };
/**
 * Attachment
 * @default {"mode":"list","value":""}
 */
    attachmentId?: { __rl: true; mode: 'list' | 'id'; value: string; cachedResultName?: string };
/**
 * Put Output in Field
 * @hint The name of the output field to put the binary file data in
 * @default data
 */
    binaryPropertyName?: string | Expression<string> | PlaceholderValue;
};

export type MicrosoftOutlookV2MessageAttachmentDownloadOutput = {
  '@odata.mediaContentType'?: string;
  '@odata.type'?: string;
  contentType?: string;
  id?: string;
  isInline?: boolean;
  lastModifiedDateTime?: string;
  name?: string;
  size?: number;
};

export type MicrosoftOutlookV2MessageAttachmentDownloadNode = {
  type: 'n8n-nodes-base.microsoftOutlook';
  version: 2;
  credentials?: Credentials;
  config: NodeConfig<MicrosoftOutlookV2MessageAttachmentDownloadParams>;
  output?: Items<MicrosoftOutlookV2MessageAttachmentDownloadOutput>;
};