/**
 * Microsoft Teams Node - Version 2
 * Discriminator: resource=channel, operation=update
 */


interface Credentials {
  microsoftTeamsOAuth2Api: CredentialReference;
}

/** Update a channel */
export type MicrosoftTeamsV2ChannelUpdateParams = {
  resource: 'channel';
  operation: 'update';
/**
 * Select the team from the list, by URL, or by ID (the ID is the "groupId" parameter in the URL you get from "Get a link to the team")
 * @default {"mode":"list","value":""}
 */
    teamId?: { __rl: true; mode: 'list' | 'url' | 'id'; value: string; cachedResultName?: string };
/**
 * Select the channel from the list, by URL, or by ID (the ID is the "threadId" in the URL)
 * @default {"mode":"list","value":""}
 */
    channelId?: { __rl: true; mode: 'list' | 'id'; value: string; cachedResultName?: string };
/**
 * The name of the channel
 */
    name?: string | Expression<string> | PlaceholderValue;
/**
 * Options
 * @default {}
 */
    options?: {
    /** The description of the channel
     */
    description?: string | Expression<string> | PlaceholderValue;
  };
};

export type MicrosoftTeamsV2ChannelUpdateNode = {
  type: 'n8n-nodes-base.microsoftTeams';
  version: 2;
  credentials?: Credentials;
  config: NodeConfig<MicrosoftTeamsV2ChannelUpdateParams>;
};