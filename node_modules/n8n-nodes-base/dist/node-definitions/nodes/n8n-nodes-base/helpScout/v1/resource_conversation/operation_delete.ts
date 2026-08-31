/**
 * Help Scout Node - Version 1
 * Discriminator: resource=conversation, operation=delete
 */


interface Credentials {
  helpScoutOAuth2Api: CredentialReference;
}

/** Delete a conversation */
export type HelpScoutV1ConversationDeleteParams = {
  resource: 'conversation';
  operation: 'delete';
/**
 * Conversation ID
 */
    conversationId?: string | Expression<string> | PlaceholderValue;
};

export type HelpScoutV1ConversationDeleteNode = {
  type: 'n8n-nodes-base.helpScout';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<HelpScoutV1ConversationDeleteParams>;
};