/**
 * Help Scout Node - Version 1
 * Discriminator: resource=thread, operation=create
 */


interface Credentials {
  helpScoutOAuth2Api: CredentialReference;
}

/** Create a new conversation */
export type HelpScoutV1ThreadCreateParams = {
  resource: 'thread';
  operation: 'create';
/**
 * Conversation ID
 */
    conversationId?: string | Expression<string> | PlaceholderValue;
/**
 * Type
 */
    type?: 'chat' | 'customer' | 'note' | 'phone' | 'reply' | Expression<string>;
/**
 * The chat text
 */
    text?: string | Expression<string> | PlaceholderValue;
/**
 * Additional Fields
 * @default {}
 */
    additionalFields?: {
    /** Created At
     */
    createdAt?: string | Expression<string>;
    /** Customer Email
     */
    customerEmail?: string | Expression<string> | PlaceholderValue;
    /** Customer ID
     * @default 0
     */
    customerId?: number | Expression<number>;
    /** Whether a draft reply is created
     * @displayOptions.show { /type: ["note"] }
     * @default false
     */
    draft?: boolean | Expression<boolean>;
    /** Whether no outgoing emails or notifications will be generated
     * @default false
     */
    imported?: boolean | Expression<boolean>;
  };
/**
 * Array of supported attachments to add to the message
 * @default {}
 */
    attachmentsUi?: {
        /** Attachments Values
     */
    attachmentsValues?: Array<{
      /** Attachment’s file name
       */
      fileName?: string | Expression<string> | PlaceholderValue;
      /** Attachment’s mime type
       */
      mimeType?: string | Expression<string> | PlaceholderValue;
      /** Base64-encoded stream of data
       */
      data?: string | Expression<string> | PlaceholderValue;
    }>;
        /** Attachments Binary
     */
    attachmentsBinary?: Array<{
      /** Name of the binary properties which contain data which should be added to email as attachment
       * @default data
       */
      property?: string | Expression<string> | PlaceholderValue;
    }>;
  };
};

export type HelpScoutV1ThreadCreateNode = {
  type: 'n8n-nodes-base.helpScout';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<HelpScoutV1ThreadCreateParams>;
};