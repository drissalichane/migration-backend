/**
 * Gmail Node - Version 1
 * Discriminator: resource=message, operation=send
 */


interface Credentials {
  googleApi: CredentialReference;
  gmailOAuth2: CredentialReference;
}

export type GmailV1MessageSendParams = {
  resource: 'message';
  operation: 'send';
  authentication?: 'oAuth2' | 'serviceAccount' | Expression<string>;
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

export type GmailV1MessageSendNode = {
  type: 'n8n-nodes-base.gmail';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<GmailV1MessageSendParams>;
};