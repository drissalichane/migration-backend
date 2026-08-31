/**
 * Microsoft Outlook Node - Version 2
 * Discriminator: resource=draft, operation=get
 */


interface Credentials {
  microsoftOutlookOAuth2Api: CredentialReference;
}

/** Retrieve a calendar */
export type MicrosoftOutlookV2DraftGetParams = {
  resource: 'draft';
  operation: 'get';
/**
 * Draft
 * @default {"mode":"list","value":""}
 */
    draftId?: { __rl: true; mode: 'list' | 'id'; value: string; cachedResultName?: string };
/**
 * Output
 * @default simple
 */
    output?: 'simple' | 'raw' | 'fields' | Expression<string>;
/**
 * The fields to add to the output
 * @displayOptions.show { output: ["fields"] }
 * @default []
 */
    fields?: Array<'bccRecipients' | 'body' | 'bodyPreview' | 'categories' | 'ccRecipients' | 'changeKey' | 'conversationId' | 'createdDateTime' | 'flag' | 'from' | 'hasAttachments' | 'importance' | 'inferenceClassification' | 'internetMessageId' | 'isDeliveryReceiptRequested' | 'isDraft' | 'isRead' | 'isReadReceiptRequested' | 'lastModifiedDateTime' | 'parentFolderId' | 'receivedDateTime' | 'replyTo' | 'sender' | 'sentDateTime' | 'subject' | 'toRecipients' | 'webLink'>;
/**
 * Options
 * @default {}
 */
    options?: {
    /** Prefix for name of the output fields to put the binary files data in. An index starting from 0 will be added. So if name is "attachment_" the first attachment is saved to "attachment_0".
     * @default attachment_
     */
    attachmentsPrefix?: string | Expression<string> | PlaceholderValue;
    /** Whether the message's attachments will be downloaded and included in the output
     * @default false
     */
    downloadAttachments?: boolean | Expression<boolean>;
  };
};

export type MicrosoftOutlookV2DraftGetOutput = {
  '@odata.context'?: string;
  '@odata.etag'?: string;
  body?: {
    content?: string;
    contentType?: string;
  };
  bodyPreview?: string;
  categories?: Array<string>;
  conversationId?: string;
  hasAttachments?: boolean;
  id?: string;
  subject?: string;
};

export type MicrosoftOutlookV2DraftGetNode = {
  type: 'n8n-nodes-base.microsoftOutlook';
  version: 2;
  credentials?: Credentials;
  config: NodeConfig<MicrosoftOutlookV2DraftGetParams>;
  output?: Items<MicrosoftOutlookV2DraftGetOutput>;
};