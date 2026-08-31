/**
 * Zulip Node - Version 1
 * Discriminator: resource=message, operation=sendStream
 */


interface Credentials {
  zulipApi: CredentialReference;
}

/** Send a message to stream */
export type ZulipV1MessageSendStreamParams = {
  resource: 'message';
  operation: 'sendStream';
/**
 * The destination stream, or a comma-separated list containing the usernames (emails) of the recipients. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
 */
    stream?: string | Expression<string>;
/**
 * The topic of the message. Only required if type is stream, ignored otherwise. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
 */
    topic?: string | Expression<string>;
/**
 * The content of the message
 */
    content?: string | Expression<string> | PlaceholderValue;
};

export type ZulipV1MessageSendStreamNode = {
  type: 'n8n-nodes-base.zulip';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<ZulipV1MessageSendStreamParams>;
};