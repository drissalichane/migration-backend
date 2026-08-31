/**
 * Gmail Node - Version 1
 * Discriminator: resource=message, operation=reply
 */


interface Credentials {
  googleApi: CredentialReference;
  gmailOAuth2: CredentialReference;
}

export type GmailV1MessageReplyParams = {
  resource: 'message';
  operation: 'reply';
  authentication?: 'oAuth2' | 'serviceAccount' | Expression<string>;
/**
 * Thread ID
 */
    threadId?: string | Expression<string> | PlaceholderValue;
/**
 * Message ID
 */
    messageId?: string | Expression<string> | PlaceholderValue;
/**
 * Subject
 */
    subject?: string | Expression<string> | PlaceholderValue;
/**
 * Whether the message should also be included as HTML
 * @default false
 */
    includeHtml?: boolean | Expression<boolean>;
/**
 * The HTML message body
 * @displayOptions.show { includeHtml: [true] }
 */
    htmlMessage?: string | Expression<string> | PlaceholderValue;
/**
 * Plain text message body
 */
    message?: string | Expression<string> | PlaceholderValue;
/**
 * The email addresses of the recipients
 * @default []
 */
    toList?: string | Expression<string> | PlaceholderValue;
/**
 * Additional Fields
 * @default {}
 */
    additionalFields?: {
    /** Array of supported attachments to add to the message
     * @default {}
     */
    attachmentsUi?: {
        /** Attachment Binary
     */
    attachmentsBinary?: Array<{
      /** Add the field name from the input node. Multiple properties can be set separated by comma.
       */
      property?: string | Expression<string> | PlaceholderValue;
    }>;
  };
    /** The email addresses of the blind copy recipients
     * @default []
     */
    bccList?: string | Expression<string> | PlaceholderValue;
    /** The email addresses of the copy recipients
     * @default []
     */
    ccList?: string | Expression<string> | PlaceholderValue;
    /** The name displayed in your contacts inboxes. It has to be in the format: "Display-Name &#60;name@gmail.com&#62;". The email address has to match the email address of the logged in user for the API.
     */
    senderName?: string | Expression<string> | PlaceholderValue;
  };
};

export type GmailV1MessageReplyNode = {
  type: 'n8n-nodes-base.gmail';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<GmailV1MessageReplyParams>;
};