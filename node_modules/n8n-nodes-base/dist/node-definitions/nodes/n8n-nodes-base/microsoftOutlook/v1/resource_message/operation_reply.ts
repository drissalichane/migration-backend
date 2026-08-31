/**
 * Microsoft Outlook Node - Version 1
 * Discriminator: resource=message, operation=reply
 */


interface Credentials {
  microsoftOutlookOAuth2Api: CredentialReference;
}

/** Create reply to a message */
export type MicrosoftOutlookV1MessageReplyParams = {
  resource: 'message';
  operation: 'reply';
/**
 * Message ID
 */
    messageId?: string | Expression<string> | PlaceholderValue;
/**
 * Reply Type
 * @default reply
 */
    replyType?: 'reply' | 'replyAll' | Expression<string>;
/**
 * A comment to include. Can be an empty string.
 */
    comment?: string | Expression<string> | PlaceholderValue;
/**
 * Whether to send the reply message directly. If not set, it will be saved as draft.
 * @default true
 */
    send?: boolean | Expression<boolean>;
/**
 * Additional Fields
 * @displayOptions.show { replyType: ["reply"] }
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
      /** Name of the binary property containing the data to be added to the email as an attachment
       */
      binaryPropertyName?: string | Expression<string> | PlaceholderValue;
    }>;
  };
    /** Email addresses of BCC recipients
     */
    bccRecipients?: string | Expression<string> | PlaceholderValue;
    /** Message body content
     */
    bodyContent?: string | Expression<string> | PlaceholderValue;
    /** Message body content type
     * @default html
     */
    bodyContentType?: 'html' | 'Text' | Expression<string>;
    /** Email addresses of CC recipients
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
    /** The owner of the mailbox which the message is sent. Must correspond to the actual mailbox used.
     */
    from?: string | Expression<string> | PlaceholderValue;
    /** The importance of the message
     * @default Low
     */
    importance?: 'Low' | 'Normal' | 'High' | Expression<string>;
    /** Whether a read receipt is requested for the message
     * @default false
     */
    isReadReceiptRequested?: boolean | Expression<boolean>;
    /** Email addresses of recipients. Multiple can be added separated by comma.
     */
    toRecipients?: string | Expression<string> | PlaceholderValue;
    /** Email addresses to use when replying
     */
    replyTo?: string | Expression<string> | PlaceholderValue;
    /** The subject of the message
     */
    subject?: string | Expression<string> | PlaceholderValue;
  };
};

export type MicrosoftOutlookV1MessageReplyNode = {
  type: 'n8n-nodes-base.microsoftOutlook';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<MicrosoftOutlookV1MessageReplyParams>;
};