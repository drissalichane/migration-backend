/**
 * Microsoft Teams Node - Version 1
 * Discriminator: resource=channel, operation=update
 */


interface Credentials {
  microsoftTeamsOAuth2Api: CredentialReference;
}

/** Update a channel */
export type MicrosoftTeamsV1ChannelUpdateParams = {
  resource: 'channel';
  operation: 'update';
/**
 * Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
 */
    teamId?: string | Expression<string>;
/**
 * Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
 */
    channelId?: string | Expression<string>;
/**
 * Update Fields
 * @default {}
 */
    updateFields?: {
    /** Channel name as it will appear to the user in Microsoft Teams
     */
    name?: string | Expression<string> | PlaceholderValue;
    /** Channel's description
     */
    description?: string | Expression<string> | PlaceholderValue;
  };
};

export type MicrosoftTeamsV1ChannelUpdateNode = {
  type: 'n8n-nodes-base.microsoftTeams';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<MicrosoftTeamsV1ChannelUpdateParams>;
};