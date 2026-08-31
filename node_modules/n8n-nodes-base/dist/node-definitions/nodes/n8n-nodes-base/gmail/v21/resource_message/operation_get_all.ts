/**
 * Gmail Node - Version 2.1
 * Discriminator: resource=message, operation=getAll
 */


interface Credentials {
  googleApi: CredentialReference;
  gmailOAuth2: CredentialReference;
}

export type GmailV21MessageGetAllParams = {
  resource: 'message';
  operation: 'getAll';
  authentication?: 'oAuth2' | 'serviceAccount' | Expression<string>;
/**
 * Whether to return all results or only up to a given limit
 * @default false
 */
    returnAll?: boolean | Expression<boolean>;
/**
 * Max number of results to return
 * @displayOptions.show { returnAll: [false] }
 * @default 50
 */
    limit?: number | Expression<number>;
/**
 * Whether to return a simplified version of the response instead of the raw data
 * @default true
 */
    simple?: boolean | Expression<boolean>;
/**
 * Filters
 * @default {}
 */
    filters?: {
    /** Whether to include messages from SPAM and TRASH in the results
     * @default false
     */
    includeSpamTrash?: boolean | Expression<boolean>;
    /** Only return messages with labels that match all of the specified label IDs. Choose from the list, or specify IDs using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
     * @default []
     */
    labelIds?: string[];
    /** Only return messages matching the specified query
     * @hint Use the same format as in the Gmail search box. &lt;a href="https://support.google.com/mail/answer/7190?hl=en"&gt;More info&lt;/a&gt;.
     */
    q?: string | Expression<string> | PlaceholderValue;
    /** Read Status
     * @hint Filter emails by whether they have been read or not
     * @default unread
     */
    readStatus?: 'both' | 'unread' | 'read' | Expression<string>;
    /** Get all emails received after the specified date. In an expression you can set date using string in ISO format or a timestamp in miliseconds.
     */
    receivedAfter?: string | Expression<string>;
    /** Get all emails received before the specified date. In an expression you can set date using string in ISO format or a timestamp in miliseconds.
     */
    receivedBefore?: string | Expression<string>;
    /** Sender name or email to filter by
     * @hint Enter an email or part of a sender name
     */
    sender?: string | Expression<string> | PlaceholderValue;
  };
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

export type GmailV21MessageGetAllOutput = {
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
    'x-gm-message-state'?: string;
    'x-google-dkim-signature'?: string;
    'x-google-smtp-source'?: string;
    'x-received'?: string;
  };
  id?: string;
  labelIds?: Array<string>;
  messageId?: string;
  sizeEstimate?: number;
  subject?: string;
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

export type GmailV21MessageGetAllNode = {
  type: 'n8n-nodes-base.gmail';
  version: 2.1;
  credentials?: Credentials;
  config: NodeConfig<GmailV21MessageGetAllParams>;
  output?: Items<GmailV21MessageGetAllOutput>;
};