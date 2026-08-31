/**
 * Microsoft Outlook Node - Version 2
 * Discriminator: resource=message, operation=reply
 */


interface Credentials {
  microsoftOutlookOAuth2Api: CredentialReference;
}

/** Create a reply to a message */
export type MicrosoftOutlookV2MessageReplyParams = {
  resource: 'message';
  operation: 'reply';
/**
 * Message
 * @default {"mode":"list","value":""}
 */
    messageId?: { __rl: true; mode: 'list' | 'id'; value: string; cachedResultName?: string };
/**
 * Whether to reply to the sender only or to the entire list of recipients
 * @default false
 */
    replyToSenderOnly?: boolean | Expression<boolean>;
/**
 * Message body content
 */
    message?: string | Expression<string> | PlaceholderValue;
/**
 * Additional Fields
 * @displayOptions.show { replyToSenderOnly: [true] }
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
    /** Comma-separated list of email addresses of recipients
     */
    toRecipients?: string | Expression<string> | PlaceholderValue;
    /** Email address to use when replying
     */
    replyTo?: string | Expression<string> | PlaceholderValue;
    /** The subject of the message
     */
    subject?: string | Expression<string> | PlaceholderValue;
  };
/**
 * Options
 * @default {}
 */
    options?: {
    /** Whether to save the message as a draft. If false, the message is sent immediately.
     * @default false
     */
    saveAsDraft?: boolean | Expression<boolean>;
  };
};

export type MicrosoftOutlookV2MessageReplyOutput = {
  '@odata.context'?: string;
  '@odata.etag'?: string;
  body?: {
    content?: string;
    contentType?: string;
  };
  bodyPreview?: string;
  changeKey?: string;
  conversationId?: string;
  conversationIndex?: string;
  createdDateTime?: string;
  flag?: {
    flagStatus?: string;
  };
  from?: {
    emailAddress?: {
      address?: string;
      name?: string;
    };
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
  sender?: {
    emailAddress?: {
      address?: string;
      name?: string;
    };
  };
  sentDateTime?: string;
  subject?: string;
  toRecipients?: Array<{
    emailAddress?: {
      address?: string;
      name?: string;
    };
  }>;
  webLink?: string;
};

export type MicrosoftOutlookV2MessageReplyNode = {
  type: 'n8n-nodes-base.microsoftOutlook';
  version: 2;
  credentials?: Credentials;
  config: NodeConfig<MicrosoftOutlookV2MessageReplyParams>;
  output?: Items<MicrosoftOutlookV2MessageReplyOutput>;
};