/**
 * Microsoft Teams Node - Version 1.1
 * Discriminator: resource=channel, operation=create
 */


interface Credentials {
  microsoftTeamsOAuth2Api: CredentialReference;
}

/** Create a channel */
export type MicrosoftTeamsV11ChannelCreateParams = {
  resource: 'channel';
  operation: 'create';
/**
 * Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
 */
    teamId?: string | Expression<string>;
/**
 * Channel name as it will appear to the user in Microsoft Teams
 */
    name?: string | Expression<string> | PlaceholderValue;
/**
 * Options
 * @default {}
 */
    options?: {
    /** Channel's description
     */
    description?: string | Expression<string> | PlaceholderValue;
    /** The type of the channel
     * @default standard
     */
    type?: 'private' | 'standard' | Expression<string>;
  };
};

export type MicrosoftTeamsV11ChannelCreateNode = {
  type: 'n8n-nodes-base.microsoftTeams';
  version: 1.1;
  credentials?: Credentials;
  config: NodeConfig<MicrosoftTeamsV11ChannelCreateParams>;
};