/**
 * Monica CRM Node - Version 1
 * Discriminator: resource=conversationMessage, operation=update
 */


interface Credentials {
  monicaCrmApi: CredentialReference;
}

/** Update an activity */
export type MonicaCrmV1ConversationMessageUpdateParams = {
  resource: 'conversationMessage';
  operation: 'update';
/**
 * ID of the message to update
 */
    messageId?: string | Expression<string> | PlaceholderValue;
/**
 * ID of the conversation whose message to update
 */
    conversationId?: string | Expression<string> | PlaceholderValue;
/**
 * Update Fields
 * @default {}
 */
    updateFields?: {
    /** ID of the contact to associate the conversationMessage with
     */
    contact_id?: string | Expression<string> | PlaceholderValue;
    /** Content of the message
     */
    content?: string | Expression<string> | PlaceholderValue;
    /** Date when the message was written
     */
    written_at?: string | Expression<string>;
    /** Author of the message
     * @default true
     */
    written_by_me?: true | false | Expression<boolean>;
  };
};

export type MonicaCrmV1ConversationMessageUpdateNode = {
  type: 'n8n-nodes-base.monicaCrm';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<MonicaCrmV1ConversationMessageUpdateParams>;
};