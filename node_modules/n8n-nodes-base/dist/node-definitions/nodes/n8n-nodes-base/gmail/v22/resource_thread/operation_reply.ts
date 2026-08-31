/**
 * Gmail Node - Version 2.2
 * Discriminator: resource=thread, operation=reply
 */


interface Credentials {
  googleApi: CredentialReference;
  gmailOAuth2: CredentialReference;
}

export type GmailV22ThreadReplyParams = {
  resource: 'thread';
  operation: 'reply';
  authentication?: 'oAuth2' | 'serviceAccount' | Expression<string>;
/**
 * The ID of the thread you are operating on
 */
    threadId?: string | Expression<string> | PlaceholderValue;
/**
 * Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
 */
    messageId?: string | Expression<string>;
/**
 * Email Type
 * @default text
 */
    emailType?: 'text' | 'html';
/**
 * Message
 * @hint Get better Text and Expressions writing experience by using the expression editor
 */
    message?: string | Expression<string> | PlaceholderValue;
/**
 * Options
 * @default {}
 */
    options?: {
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
    /** The email addresses of the blind copy recipients. Multiple addresses can be separated by a comma. e.g. jay@getsby.com, jon@smith.com.
     */
    bccList?: string | Expression<string> | PlaceholderValue;
    /** The email addresses of the copy recipients. Multiple addresses can be separated by a comma. e.g. jay@getsby.com, jon@smith.com.
     */
    ccList?: string | Expression<string> | PlaceholderValue;
    /** The name displayed in your contacts inboxes
     */
    senderName?: string | Expression<string> | PlaceholderValue;
    /** Whether to reply to the sender only or to the entire list of recipients
     * @displayOptions.hide { replyToRecipientsOnly: [true] }
     * @default false
     */
    replyToSenderOnly?: boolean | Expression<boolean>;
    /** Whether to exclude the sender from the reply
     * @displayOptions.hide { replyToSenderOnly: [true] }
     * @default false
     */
    replyToRecipientsOnly?: boolean | Expression<boolean>;
  };
};

export type GmailV22ThreadReplyOutput = {
  id?: string;
  labelIds?: Array<string>;
  threadId?: string;
};

export type GmailV22ThreadReplyNode = {
  type: 'n8n-nodes-base.gmail';
  version: 2.2;
  credentials?: Credentials;
  config: NodeConfig<GmailV22ThreadReplyParams>;
  output?: Items<GmailV22ThreadReplyOutput>;
};