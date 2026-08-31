/**
 * Microsoft Outlook Node - Version 2
 * Discriminator: resource=messageAttachment, operation=get
 */


interface Credentials {
  microsoftOutlookOAuth2Api: CredentialReference;
}

/** Retrieve a calendar */
export type MicrosoftOutlookV2MessageAttachmentGetParams = {
  resource: 'messageAttachment';
  operation: 'get';
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
 * Options
 * @default {}
 */
    options?: {
    /** The fields to add to the output
     * @default []
     */
    fields?: Array<'contentType' | 'isInline' | 'lastModifiedDateTime' | 'name' | 'size'>;
  };
};

export type MicrosoftOutlookV2MessageAttachmentGetOutput = {
  '@odata.context'?: string;
  '@odata.mediaContentType'?: string;
  '@odata.type'?: string;
  contentType?: string;
  id?: string;
  isInline?: boolean;
  lastModifiedDateTime?: string;
  name?: string;
  size?: number;
  value?: Array<{
    '@odata.mediaContentType'?: string;
    '@odata.type'?: string;
    id?: string;
    name?: string;
  }>;
};

export type MicrosoftOutlookV2MessageAttachmentGetNode = {
  type: 'n8n-nodes-base.microsoftOutlook';
  version: 2;
  credentials?: Credentials;
  config: NodeConfig<MicrosoftOutlookV2MessageAttachmentGetParams>;
  output?: Items<MicrosoftOutlookV2MessageAttachmentGetOutput>;
};