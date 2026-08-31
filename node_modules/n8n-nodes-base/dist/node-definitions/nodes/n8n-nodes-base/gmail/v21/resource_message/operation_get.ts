/**
 * Gmail Node - Version 2.1
 * Discriminator: resource=message, operation=get
 */


interface Credentials {
  googleApi: CredentialReference;
  gmailOAuth2: CredentialReference;
}

export type GmailV21MessageGetParams = {
  resource: 'message';
  operation: 'get';
  authentication?: 'oAuth2' | 'serviceAccount' | Expression<string>;
/**
 * Message ID
 */
    messageId?: string | Expression<string> | PlaceholderValue;
/**
 * Whether to return a simplified version of the response instead of the raw data
 * @default true
 */
    simple?: boolean | Expression<boolean>;
/**
 * Options
 * @displayOptions.hide { simple: [true] }
 * @default {}
 */
    options?: {
    /** Prefix for name of the binary property to which to write the attachment. An index starting with 0 will be added. So if name is 'attachment_' the first attachment is saved to 'attachment_0'.
     * @default attachment_
     */
    dataPropertyAttachmentsPrefixName?: string | Expression<string> | PlaceholderValue;
    /** Whether the email's attachments will be downloaded and included in the output
     * @default false
     */
    downloadAttachments?: boolean | Expression<boolean>;
  };
};

export type GmailV21MessageGetOutput = {
  date?: string;
  from?: {
    html?: string;
    text?: string;
    value?: Array<{
      address?: string;
      name?: string;
    }>;
  };
  headers?: {
    'arc-authentication-results'?: string;
    'arc-message-signature'?: string;
    'arc-seal'?: string;
    'authentication-results'?: string;
    'content-type'?: string;
    date?: string;
    'delivered-to'?: string;
    'dkim-signature'?: string;
    from?: string;
    'message-id'?: string;
    'mime-version'?: string;
    received?: string;
    'received-spf'?: string;
    'return-path'?: string;
    subject?: string;
    to?: string;
    'x-google-smtp-source'?: string;
    'x-received'?: string;
  };
  id?: string;
  labelIds?: Array<string>;
  messageId?: string;
  sizeEstimate?: number;
  subject?: string;
  text?: string;
  textAsHtml?: string;
  threadId?: string;
  to?: {
    html?: string;
    text?: string;
    value?: Array<{
      address?: string;
      name?: string;
    }>;
  };
};

export type GmailV21MessageGetNode = {
  type: 'n8n-nodes-base.gmail';
  version: 2.1;
  credentials?: Credentials;
  config: NodeConfig<GmailV21MessageGetParams>;
  output?: Items<GmailV21MessageGetOutput>;
};