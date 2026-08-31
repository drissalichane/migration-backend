/**
 * Zulip Node - Version 1
 * Discriminator: resource=message, operation=sendPrivate
 */


interface Credentials {
  zulipApi: CredentialReference;
}

/** Send a private message */
export type ZulipV1MessageSendPrivateParams = {
  resource: 'message';
  operation: 'sendPrivate';
/**
 * The destination stream, or a comma-separated list containing the usernames (emails) of the recipients. Choose from the list, or specify IDs using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
 * @default []
 */
    to?: string[];
/**
 * The content of the message
 */
    content?: string | Expression<string> | PlaceholderValue;
};

export type ZulipV1MessageSendPrivateNode = {
  type: 'n8n-nodes-base.zulip';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<ZulipV1MessageSendPrivateParams>;
};