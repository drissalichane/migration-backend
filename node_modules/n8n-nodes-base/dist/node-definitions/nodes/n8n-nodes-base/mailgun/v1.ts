/**
 * Mailgun Node - Version 1
 * Sends an email via Mailgun
 */


export interface MailgunV1Params {
/**
 * Email address of the sender optional with name
 */
    fromEmail?: string | Expression<string> | PlaceholderValue;
/**
 * Email address of the recipient. Multiple ones can be separated by comma.
 */
    toEmail?: string | Expression<string> | PlaceholderValue;
/**
 * Cc Email address of the recipient. Multiple ones can be separated by comma.
 */
    ccEmail?: string | Expression<string> | PlaceholderValue;
/**
 * Bcc Email address of the recipient. Multiple ones can be separated by comma.
 */
    bccEmail?: string | Expression<string> | PlaceholderValue;
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
 * Name of the binary properties which contain data which should be added to email as attachment. Multiple ones can be comma-separated.
 */
    attachments?: string | Expression<string> | PlaceholderValue;
}

export interface MailgunV1Credentials {
  mailgunApi: CredentialReference;
}

interface MailgunV1NodeBase {
  type: 'n8n-nodes-base.mailgun';
  version: 1;
  credentials?: MailgunV1Credentials;
}

export type MailgunV1ParamsNode = MailgunV1NodeBase & {
  config: NodeConfig<MailgunV1Params>;
};

export type MailgunV1Node = MailgunV1ParamsNode;