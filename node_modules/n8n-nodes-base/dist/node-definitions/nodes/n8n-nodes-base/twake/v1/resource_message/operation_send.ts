/**
 * Twake Node - Version 1
 * Discriminator: resource=message, operation=send
 */


interface Credentials {
  twakeCloudApi: CredentialReference;
}

/** Send data to the message app */
export type TwakeV1MessageSendParams = {
  resource: 'message';
  operation: 'send';
/**
 * Channel's ID. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
 */
    channelId?: string | Expression<string>;
/**
 * Message content
 */
    content?: string | Expression<string> | PlaceholderValue;
/**
 * Additional Fields
 * @default {}
 */
    additionalFields?: {
    /** URL of the image/icon
     */
    senderIcon?: string | Expression<string> | PlaceholderValue;
    /** Sender Name
     */
    senderName?: string | Expression<string> | PlaceholderValue;
  };
};

export type TwakeV1MessageSendNode = {
  type: 'n8n-nodes-base.twake';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<TwakeV1MessageSendParams>;
};