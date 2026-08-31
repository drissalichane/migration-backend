/**
 * Slack Node - Version 2.2
 * Discriminator: resource=channel, operation=open
 */


interface Credentials {
  slackApi: CredentialReference;
  slackOAuth2Api: CredentialReference;
}

/** Opens or resumes a direct message or multi-person direct message */
export type SlackV22ChannelOpenParams = {
  resource: 'channel';
  operation: 'open';
  authentication?: 'accessToken' | 'oAuth2' | Expression<string>;
/**
 * Options
 * @default {}
 */
    options?: {
    /** Resume a conversation by supplying an im or mpim's ID. Or provide the users field instead.
     */
    channelId?: string | Expression<string> | PlaceholderValue;
    /** Whether you want the full IM channel definition in the response
     * @default false
     */
    returnIm?: boolean | Expression<boolean>;
    /** If only one user is included, this creates a 1:1 DM. The ordering of the users is preserved whenever a multi-person direct message is returned. Supply a channel when not supplying users. Choose from the list, or specify IDs using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
     * @default []
     */
    users?: string[];
  };
};

export type SlackV22ChannelOpenOutput = {
  id?: string;
};

export type SlackV22ChannelOpenNode = {
  type: 'n8n-nodes-base.slack';
  version: 2.2;
  credentials?: Credentials;
  config: NodeConfig<SlackV22ChannelOpenParams>;
  output?: Items<SlackV22ChannelOpenOutput>;
};