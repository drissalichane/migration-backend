/**
 * Microsoft Outlook Node - Version 2
 * Discriminator: resource=message, operation=send
 */


interface Credentials {
  microsoftOutlookOAuth2Api: CredentialReference;
}

/** Send an existing email draft */
export type MicrosoftOutlookV2MessageSendParams = {
  resource: 'message';
  operation: 'send';
/**
 * Comma-separated list of email addresses of recipients
 */
    toRecipients?: string | Expression<string> | PlaceholderValue;
/**
 * The subject of the message
 */
    subject?: string | Expression<string> | PlaceholderValue;
/**
 * Message body content
 */
    bodyContent?: string | Expression<string> | PlaceholderValue;
/**
 * Additional Fields
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
      /** Input Data Field Name
       * @hint The name of the input field containing the binary file data to be attached
       */
      binaryPropertyName?: string | Expression<string> | PlaceholderValue;
    }>;
  };
    /** Comma-separated list of email addresses of BCC recipients
     */
    bccRecipients?: string | Expression<string> | PlaceholderValue;
    /** Choose from the list, or specify IDs using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
     * @default []
     */
    categories?: string[];
    /** Comma-separated list of email addresses of CC recipients
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
    /** The owner of the mailbox from which the message is sent. Must correspond to the actual mailbox used.
     */
    from?: string | Expression<string> | PlaceholderValue;
    /** The importance of the message
     * @default Normal
     */
    importance?: 'Low' | 'Normal' | 'High' | Expression<string>;
    /** Message body content type
     * @default html
     */
    bodyContentType?: 'html' | 'Text' | Expression<string>;
    /** Whether a read receipt is requested for the message
     * @default false
     */
    isReadReceiptRequested?: boolean | Expression<boolean>;
    /** Email address to use when replying
     */
    replyTo?: string | Expression<string> | PlaceholderValue;
    /** Whether to save the message in Sent Items
     * @default true
     */
    saveToSentItems?: boolean | Expression<boolean>;
  };
};

export type MicrosoftOutlookV2MessageSendOutput = {
  success?: boolean;
};

export type MicrosoftOutlookV2MessageSendNode = {
  type: 'n8n-nodes-base.microsoftOutlook';
  version: 2;
  credentials?: Credentials;
  config: NodeConfig<MicrosoftOutlookV2MessageSendParams>;
  output?: Items<MicrosoftOutlookV2MessageSendOutput>;
};