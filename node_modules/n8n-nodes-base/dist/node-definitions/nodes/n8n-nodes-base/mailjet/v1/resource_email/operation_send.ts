/**
 * Mailjet Node - Version 1
 * Discriminator: resource=email, operation=send
 */


interface Credentials {
  mailjetEmailApi: CredentialReference;
  mailjetSmsApi: CredentialReference;
}

/** Send a email */
export type MailjetV1EmailSendParams = {
  resource: 'email';
  operation: 'send';
/**
 * The title for the email
 */
    fromEmail?: string | Expression<string> | PlaceholderValue;
/**
 * Email address of the recipient. Multiple ones can be separated by comma.
 */
    toEmail?: string | Expression<string> | PlaceholderValue;
/**
 * Subject line of the email
 */
    subject?: string | Expression<string> | PlaceholderValue;
/**
 * Plain text message of email
 */
    text?: string | Expression<string> | PlaceholderValue;
/**
 * HTML text message of email
 */
    html?: string | Expression<string> | PlaceholderValue;
/**
 * JSON Parameters
 * @default false
 */
    jsonParameters?: boolean | Expression<boolean>;
/**
 * Additional Fields
 * @default {}
 */
    additionalFields?: {
    /** Bcc Email address of the recipient. Multiple ones can be separated by comma.
     */
    bccEmail?: string | Expression<string> | PlaceholderValue;
    /** Cc Email address of the recipient. Multiple ones can be separated by comma.
     */
    ccAddresses?: string | Expression<string> | PlaceholderValue;
    /** From Name
     */
    fromName?: string | Expression<string> | PlaceholderValue;
    /** Priority
     * @default 2
     */
    priority?: number | Expression<number>;
    /** The reply-to email address. Multiple ones can be separated by comma.
     */
    replyTo?: string | Expression<string> | PlaceholderValue;
    /** Template Language
     * @default false
     */
    templateLanguage?: boolean | Expression<boolean>;
    /** Enable or disable open tracking on this message
     * @default account_default
     */
    trackClicks?: 'account_default' | 'disabled' | 'enabled' | Expression<string>;
    /** Enable or disable open tracking on this message
     * @default account_default
     */
    trackOpens?: 'account_default' | 'disabled' | 'enabled' | Expression<string>;
    /** Custom Campaign
     */
    customCampaign?: string | Expression<string> | PlaceholderValue;
    /** Deduplicate Campaign
     * @default false
     */
    deduplicateCampaign?: boolean | Expression<boolean>;
  };
/**
 * HTML text message of email
 * @displayOptions.show { jsonParameters: [true] }
 */
    variablesJson?: string | Expression<string> | PlaceholderValue;
/**
 * Variables
 * @displayOptions.show { jsonParameters: [false] }
 * @default {}
 */
    variablesUi?: {
        /** Variable
     */
    variablesValues?: Array<{
      /** Name
       */
      name?: string | Expression<string> | PlaceholderValue;
      /** Value
       */
      value?: string | Expression<string> | PlaceholderValue;
    }>;
  };
};

export type MailjetV1EmailSendOutput = {
  Bcc?: Array<{
    Email?: string;
    MessageHref?: string;
    MessageID?: number;
    MessageUUID?: string;
  }>;
  Cc?: Array<{
    Email?: string;
    MessageHref?: string;
    MessageID?: number;
    MessageUUID?: string;
  }>;
  CustomID?: string;
  Status?: string;
  To?: Array<{
    Email?: string;
    MessageHref?: string;
    MessageID?: number;
    MessageUUID?: string;
  }>;
};

export type MailjetV1EmailSendNode = {
  type: 'n8n-nodes-base.mailjet';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<MailjetV1EmailSendParams>;
  output?: Items<MailjetV1EmailSendOutput>;
};