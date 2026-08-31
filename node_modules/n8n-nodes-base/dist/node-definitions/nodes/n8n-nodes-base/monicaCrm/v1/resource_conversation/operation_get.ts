/**
 * Monica CRM Node - Version 1
 * Discriminator: resource=conversation, operation=get
 */


interface Credentials {
  monicaCrmApi: CredentialReference;
}

/** Retrieve an activity */
export type MonicaCrmV1ConversationGetParams = {
  resource: 'conversation';
  operation: 'get';
/**
 * ID of the conversation to retrieve
 */
    conversationId?: string | Expression<string> | PlaceholderValue;
};

export type MonicaCrmV1ConversationGetNode = {
  type: 'n8n-nodes-base.monicaCrm';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<MonicaCrmV1ConversationGetParams>;
};