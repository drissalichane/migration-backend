/**
 * Twist Node - Version 1
 * Discriminator: resource=messageConversation, operation=get
 */


interface Credentials {
  twistOAuth2Api: CredentialReference;
}

/** Get information about a channel */
export type TwistV1MessageConversationGetParams = {
  resource: 'messageConversation';
  operation: 'get';
/**
 * The ID of the conversation message
 */
    id?: string | Expression<string> | PlaceholderValue;
};

export type TwistV1MessageConversationGetNode = {
  type: 'n8n-nodes-base.twist';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<TwistV1MessageConversationGetParams>;
};