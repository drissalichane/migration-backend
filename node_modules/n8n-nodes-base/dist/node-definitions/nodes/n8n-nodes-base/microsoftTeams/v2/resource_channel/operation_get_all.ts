/**
 * Microsoft Teams Node - Version 2
 * Discriminator: resource=channel, operation=getAll
 */


interface Credentials {
  microsoftTeamsOAuth2Api: CredentialReference;
}

/** Get many channels */
export type MicrosoftTeamsV2ChannelGetAllParams = {
  resource: 'channel';
  operation: 'getAll';
/**
 * Select the team from the list, by URL, or by ID (the ID is the "groupId" parameter in the URL you get from "Get a link to the team")
 * @default {"mode":"list","value":""}
 */
    teamId?: { __rl: true; mode: 'list' | 'url' | 'id'; value: string; cachedResultName?: string };
/**
 * Whether to return all results or only up to a given limit
 * @default false
 */
    returnAll?: boolean | Expression<boolean>;
/**
 * Max number of results to return
 * @displayOptions.show { returnAll: [false] }
 * @default 100
 */
    limit?: number | Expression<number>;
};

export type MicrosoftTeamsV2ChannelGetAllOutput = {
  createdDateTime?: string;
  displayName?: string;
  id?: string;
  isArchived?: boolean;
  membershipType?: string;
  tenantId?: string;
  webUrl?: string;
};

export type MicrosoftTeamsV2ChannelGetAllNode = {
  type: 'n8n-nodes-base.microsoftTeams';
  version: 2;
  credentials?: Credentials;
  config: NodeConfig<MicrosoftTeamsV2ChannelGetAllParams>;
  output?: Items<MicrosoftTeamsV2ChannelGetAllOutput>;
};