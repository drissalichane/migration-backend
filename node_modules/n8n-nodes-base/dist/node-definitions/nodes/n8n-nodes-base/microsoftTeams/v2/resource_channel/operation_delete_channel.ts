/**
 * Microsoft Teams Node - Version 2
 * Discriminator: resource=channel, operation=deleteChannel
 */


interface Credentials {
  microsoftTeamsOAuth2Api: CredentialReference;
}

/** Delete a channel */
export type MicrosoftTeamsV2ChannelDeleteChannelParams = {
  resource: 'channel';
  operation: 'deleteChannel';
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
};

export type MicrosoftTeamsV2ChannelDeleteChannelNode = {
  type: 'n8n-nodes-base.microsoftTeams';
  version: 2;
  credentials?: Credentials;
  config: NodeConfig<MicrosoftTeamsV2ChannelDeleteChannelParams>;
};