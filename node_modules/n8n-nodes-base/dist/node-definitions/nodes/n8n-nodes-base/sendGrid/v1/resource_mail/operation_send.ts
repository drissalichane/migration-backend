/**
 * SendGrid Node - Version 1
 * Discriminator: resource=mail, operation=send
 */


interface Credentials {
  sendGridApi: CredentialReference;
}

/** Send an email */
export type SendGridV1MailSendParams = {
  resource: 'mail';
  operation: 'send';
/**
 * Email address of the sender of the email
 */
    fromEmail?: string | Expression<string> | PlaceholderValue;
/**
 * Name of the sender of the email
 */
    fromName?: string | Expression<string> | PlaceholderValue;
/**
 * Comma-separated list of recipient email addresses
 */
    toEmail?: string | Expression<string> | PlaceholderValue;
/**
 * Subject of the email to send
 * @displayOptions.show { dynamicTemplate: [false] }
 */
    subject?: string | Expression<string> | PlaceholderValue;
/**
 * Whether this email will contain a dynamic template
 * @default false
 */
    dynamicTemplate?: boolean | Expression<boolean>;
/**
 * MIME type of the email to send
 * @displayOptions.show { dynamicTemplate: [false] }
 * @default text/plain
 */
    contentType?: 'text/plain' | 'text/html' | Expression<string>;
/**
 * Message body of the email to send
 * @displayOptions.show { dynamicTemplate: [false] }
 */
    contentValue?: string | Expression<string> | PlaceholderValue;
/**
 * Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
 * @displayOptions.show { dynamicTemplate: [true] }
 * @default []
 */
    templateId?: string | Expression<string>;
/**
 * Dynamic Template Fields
 * @displayOptions.show { dynamicTemplate: [true] }
 * @default {}
 */
    dynamicTemplateFields?: {
        /** Fields
     */
    fields?: Array<{
      /** Key of the dynamic template field
       */
      key?: string | Expression<string> | PlaceholderValue;
      /** Value for the field
       */
      value?: string | Expression<string> | PlaceholderValue;
    }>;
  };
/**
 * Additional Fields
 * @default {}
 */
    additionalFields?: {
    /** Comma-separated list of binary properties
     */
    attachments?: string | Expression<string> | PlaceholderValue;
    /** Comma-separated list of emails of the recipients of a blind carbon copy of the email
     */
    bccEmail?: string | Expression<string> | PlaceholderValue;
    /** Comma-separated list of categories. Each category name may not exceed 255 characters.
     */
    categories?: string | Expression<string> | PlaceholderValue;
    /** Comma-separated list of emails of the recipients of a carbon copy of the email
     */
    ccEmail?: string | Expression<string> | PlaceholderValue;
    /** Whether to use to the sandbox for testing out email-sending functionality
     * @default false
     */
    enableSandbox?: boolean | Expression<boolean>;
    /** The IP Pool that you would like to send this email from
     */
    ipPoolName?: string | Expression<string> | PlaceholderValue;
    /** Comma-separated list of email addresses that will appear in the reply-to field of the email
     */
    replyToEmail?: string | Expression<string> | PlaceholderValue;
    /** Headers
     * @default {}
     */
    headers?: {
        /** Details
     */
    details?: Array<{
      /** Key to set in the header object
       */
      key?: string | Expression<string> | PlaceholderValue;
      /** Value to set in the header object
       */
      value?: string | Expression<string> | PlaceholderValue;
    }>;
  };
    /** When to deliver the email. Scheduling more than 72 hours in advance is forbidden.
     */
    sendAt?: string | Expression<string>;
  };
};

export type SendGridV1MailSendOutput = {
  messageId?: string;
};

export type SendGridV1MailSendNode = {
  type: 'n8n-nodes-base.sendGrid';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<SendGridV1MailSendParams>;
  output?: Items<SendGridV1MailSendOutput>;
};