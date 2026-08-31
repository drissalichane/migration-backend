/**
 * Twist Node - Version 1
 * Discriminator: resource=messageConversation, operation=delete
 */


interface Credentials {
  twistOAuth2Api: CredentialReference;
}

/** Delete a channel */
export type TwistV1MessageConversationDeleteParams = {
  resource: 'messageConversation';
  operation: 'delete';
/**
 * The ID of the conversation message
 */
    id?: string | Expression<string> | PlaceholderValue;
};

export type TwistV1MessageConversationDeleteNode = {
  type: 'n8n-nodes-base.twist';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<TwistV1MessageConversationDeleteParams>;
};