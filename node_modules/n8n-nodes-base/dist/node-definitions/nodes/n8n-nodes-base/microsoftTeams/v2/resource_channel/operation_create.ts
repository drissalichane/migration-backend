/**
 * Microsoft Teams Node - Version 2
 * Discriminator: resource=channel, operation=create
 */


interface Credentials {
  microsoftTeamsOAuth2Api: CredentialReference;
}

/** Create a channel */
export type MicrosoftTeamsV2ChannelCreateParams = {
  resource: 'channel';
  operation: 'create';
/**
 * Select the team from the list, by URL, or by ID (the ID is the "groupId" parameter in the URL you get from "Get a link to the team")
 * @default {"mode":"list","value":""}
 */
    teamId?: { __rl: true; mode: 'list' | 'url' | 'id'; value: string; cachedResultName?: string };
/**
 * The name of the new channel you want to create
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
    /** Standard: Accessible to everyone on the team. Private: Accessible only to a specific group of people within the team.
     * @default standard
     */
    type?: 'private' | 'standard' | Expression<string>;
  };
};

export type MicrosoftTeamsV2ChannelCreateOutput = {
  '@odata.context'?: string;
  createdDateTime?: string;
  displayName?: string;
  email?: string;
  id?: string;
  isArchived?: boolean;
  membershipType?: string;
  webUrl?: string;
};

export type MicrosoftTeamsV2ChannelCreateNode = {
  type: 'n8n-nodes-base.microsoftTeams';
  version: 2;
  credentials?: Credentials;
  config: NodeConfig<MicrosoftTeamsV2ChannelCreateParams>;
  output?: Items<MicrosoftTeamsV2ChannelCreateOutput>;
};