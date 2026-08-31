/**
 * Gmail Node - Version 1
 * Discriminator: resource=draft, operation=create
 */


interface Credentials {
  googleApi: CredentialReference;
  gmailOAuth2: CredentialReference;
}

export type GmailV1DraftCreateParams = {
  resource: 'draft';
  operation: 'create';
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
 * The message body. If HTML formatted, then you have to add and activate the option "HTML content" in the "Additional Options" section.
 */
    message?: string | Expression<string> | PlaceholderValue;
/**
 * Additional Fields
 * @default {}
 */
    additionalFields?: {
    /** The email addresses of the recipients
     * @default []
     */
    toList?: string | Expression<string> | PlaceholderValue;
    /** The email addresses of the copy recipients
     * @default []
     */
    ccList?: string | Expression<string> | PlaceholderValue;
    /** The email addresses of the blind copy recipients
     * @default []
     */
    bccList?: string | Expression<string> | PlaceholderValue;
    /** Array of supported attachments to add to the message
     * @default {}
     */
    attachmentsUi?: {
        /** Attachment Binary
     */
    attachmentsBinary?: Array<{
      /** Name of the binary property containing the data to be added to the email as an attachment. Multiple properties can be set separated by comma.
       */
      property?: string | Expression<string> | PlaceholderValue;
    }>;
  };
  };
};

export type GmailV1DraftCreateNode = {
  type: 'n8n-nodes-base.gmail';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<GmailV1DraftCreateParams>;
};