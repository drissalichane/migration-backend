/**
 * Microsoft Outlook Node - Version 2
 * Discriminator: resource=draft, operation=create
 */


interface Credentials {
  microsoftOutlookOAuth2Api: CredentialReference;
}

/** Create a new calendar */
export type MicrosoftOutlookV2DraftCreateParams = {
  resource: 'draft';
  operation: 'create';
/**
 * The subject of the message
 */
    subject?: string | Expression<string> | PlaceholderValue;
/**
 * Message body content
 */
    bodyContent?: string | Expression<string> | PlaceholderValue;
/**
 * Additional Fields
 * @default {}
 */
    additionalFields?: {
    /** Attachments
     * @default {}
     */
    attachments?: {
        /** Attachment
     */
    attachments?: Array<{
      /** Input Data Field Name
       * @hint The name of the input field containing the binary file data to be attached
       */
      binaryPropertyName?: string | Expression<string> | PlaceholderValue;
    }>;
  };
    /** Comma-separated list of email addresses of BCC recipients
     */
    bccRecipients?: string | Expression<string> | PlaceholderValue;
    /** Choose from the list, or specify IDs using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
     * @default []
     */
    categories?: string[];
    /** Comma-separated list of email addresses of CC recipients
     */
    ccRecipients?: string | Expression<string> | PlaceholderValue;
    /** Custom Headers
     * @default {}
     */
    internetMessageHeaders?: {
        /** Header
     */
    headers?: Array<{
      /** Name of the header
       */
      name?: string | Expression<string> | PlaceholderValue;
      /** Value to set for the header
       */
      value?: string | Expression<string> | PlaceholderValue;
    }>;
  };
    /** The owner of the mailbox from which the message is sent. Must correspond to the actual mailbox used.
     */
    from?: string | Expression<string> | PlaceholderValue;
    /** The importance of the message
     * @default Normal
     */
    importance?: 'Low' | 'Normal' | 'High' | Expression<string>;
    /** Message body content type
     * @default html
     */
    bodyContentType?: 'html' | 'Text' | Expression<string>;
    /** Whether a read receipt is requested for the message
     * @default false
     */
    isReadReceiptRequested?: boolean | Expression<boolean>;
    /** Email address to use when replying
     */
    replyTo?: string | Expression<string> | PlaceholderValue;
    /** Comma-separated list of email addresses of recipients
     */
    toRecipients?: string | Expression<string> | PlaceholderValue;
  };
};

export type MicrosoftOutlookV2DraftCreateOutput = {
  '@odata.context'?: string;
  '@odata.etag'?: string;
  bccRecipients?: Array<{
    emailAddress?: {
      address?: string;
      name?: string;
    };
  }>;
  body?: {
    content?: string;
    contentType?: string;
  };
  bodyPreview?: string;
  categories?: Array<string>;
  changeKey?: string;
  conversationId?: string;
  conversationIndex?: string;
  createdDateTime?: string;
  flag?: {
    flagStatus?: string;
  };
  hasAttachments?: boolean;
  id?: string;
  importance?: string;
  inferenceClassification?: string;
  internetMessageId?: string;
  isDeliveryReceiptRequested?: boolean;
  isDraft?: boolean;
  isRead?: boolean;
  isReadReceiptRequested?: boolean;
  lastModifiedDateTime?: string;
  parentFolderId?: string;
  receivedDateTime?: string;
  replyTo?: Array<{
    emailAddress?: {
      address?: string;
      name?: string;
    };
  }>;
  sentDateTime?: string;
  toRecipients?: Array<{
    emailAddress?: {
      address?: string;
      name?: string;
    };
  }>;
  webLink?: string;
};

export type MicrosoftOutlookV2DraftCreateNode = {
  type: 'n8n-nodes-base.microsoftOutlook';
  version: 2;
  credentials?: Credentials;
  config: NodeConfig<MicrosoftOutlookV2DraftCreateParams>;
  output?: Items<MicrosoftOutlookV2DraftCreateOutput>;
};