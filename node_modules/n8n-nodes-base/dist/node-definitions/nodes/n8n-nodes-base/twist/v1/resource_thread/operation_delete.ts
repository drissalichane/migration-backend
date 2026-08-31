/**
 * Twist Node - Version 1
 * Discriminator: resource=thread, operation=delete
 */


interface Credentials {
  twistOAuth2Api: CredentialReference;
}

/** Delete a channel */
export type TwistV1ThreadDeleteParams = {
  resource: 'thread';
  operation: 'delete';
/**
 * The ID of the thread
 */
    threadId?: string | Expression<string> | PlaceholderValue;
};

export type TwistV1ThreadDeleteNode = {
  type: 'n8n-nodes-base.twist';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<TwistV1ThreadDeleteParams>;
};