/**
 * Twist Node - Version 1
 * Discriminator: resource=thread, operation=get
 */


interface Credentials {
  twistOAuth2Api: CredentialReference;
}

/** Get information about a channel */
export type TwistV1ThreadGetParams = {
  resource: 'thread';
  operation: 'get';
/**
 * The ID of the thread
 */
    threadId?: string | Expression<string> | PlaceholderValue;
};

export type TwistV1ThreadGetNode = {
  type: 'n8n-nodes-base.twist';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<TwistV1ThreadGetParams>;
};