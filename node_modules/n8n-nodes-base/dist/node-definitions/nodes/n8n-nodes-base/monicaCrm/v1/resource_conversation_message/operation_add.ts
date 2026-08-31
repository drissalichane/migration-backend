/**
 * Monica CRM Node - Version 1
 * Discriminator: resource=conversationMessage, operation=add
 */


interface Credentials {
  monicaCrmApi: CredentialReference;
}

export type MonicaCrmV1ConversationMessageAddParams = {
  resource: 'conversationMessage';
  operation: 'add';
/**
 * ID of the contact whose conversation
 */
    conversationId?: string | Expression<string> | PlaceholderValue;
/**
 * Content of the message
 */
    content?: string | Expression<string> | PlaceholderValue;
/**
 * Date when the message was written
 */
    writtenAt?: string | Expression<string>;
/**
 * Author of the message
 * @default true
 */
    writtenByMe?: true | false | Expression<boolean>;
};

export type MonicaCrmV1ConversationMessageAddNode = {
  type: 'n8n-nodes-base.monicaCrm';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<MonicaCrmV1ConversationMessageAddParams>;
};