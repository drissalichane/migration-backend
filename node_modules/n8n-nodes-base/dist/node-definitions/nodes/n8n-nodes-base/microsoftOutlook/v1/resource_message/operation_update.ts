/**
 * Microsoft Outlook Node - Version 1
 * Discriminator: resource=message, operation=update
 */


interface Credentials {
  microsoftOutlookOAuth2Api: CredentialReference;
}

/** Update a draft */
export type MicrosoftOutlookV1MessageUpdateParams = {
  resource: 'message';
  operation: 'update';
/**
 * Message ID
 */
    messageId?: string | Expression<string> | PlaceholderValue;
/**
 * Update Fields
 * @default {}
 */
    updateFields?: {
    /** Email addresses of BCC recipients
     */
    bccRecipients?: string | Expression<string> | PlaceholderValue;
    /** Message body content
     */
    bodyContent?: string | Expression<string> | PlaceholderValue;
    /** Message body content type
     * @default html
     */
    bodyContentType?: 'html' | 'Text' | Expression<string>;
    /** Choose from the list, or specify IDs using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
     * @default []
     */
    categories?: string[];
    /** Email addresses of CC recipients
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
    /** The owner of the mailbox which the message is sent. Must correspond to the actual mailbox used.
     */
    from?: string | Expression<string> | PlaceholderValue;
    /** The importance of the message
     * @default Low
     */
    importance?: 'Low' | 'Normal' | 'High' | Expression<string>;
    /** Whether the message has been read
     * @default false
     */
    isRead?: boolean | Expression<boolean>;
    /** Whether a read receipt is requested for the message
     * @default false
     */
    isReadReceiptRequested?: boolean | Expression<boolean>;
    /** Email addresses of recipients. Multiple can be added separated by comma.
     */
    toRecipients?: string | Expression<string> | PlaceholderValue;
    /** Email addresses to use when replying
     */
    replyTo?: string | Expression<string> | PlaceholderValue;
    /** The subject of the message
     */
    subject?: string | Expression<string> | PlaceholderValue;
  };
};

export type MicrosoftOutlookV1MessageUpdateNode = {
  type: 'n8n-nodes-base.microsoftOutlook';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<MicrosoftOutlookV1MessageUpdateParams>;
};