/**
 * Microsoft Teams Node - Version 2
 * Discriminator: resource=channelMessage, operation=create
 */


interface Credentials {
  microsoftTeamsOAuth2Api: CredentialReference;
}

/** Create a channel */
export type MicrosoftTeamsV2ChannelMessageCreateParams = {
  resource: 'channelMessage';
  operation: 'create';
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
 * Whether the message is plain text or HTML
 * @default text
 */
    contentType?: 'text' | 'html' | Expression<string>;
/**
 * The content of the message to be sent
 */
    message?: string | Expression<string> | PlaceholderValue;
/**
 * Options
 * @default {}
 */
    options?: {
    /** Whether to append a link to this workflow at the end of the message. This is helpful if you have many workflows sending messages.
     * @default true
     */
    includeLinkToWorkflow?: boolean | Expression<boolean>;
    /** An optional ID of the message you want to reply to. The message ID is the number before "?tenantId" in the message URL.
     */
    makeReply?: string | Expression<string> | PlaceholderValue;
  };
};

export type MicrosoftTeamsV2ChannelMessageCreateOutput = {
  '@odata.context'?: string;
  body?: {
    content?: string;
    contentType?: string;
  };
  channelIdentity?: {
    channelId?: string;
    teamId?: string;
  };
  chatId?: null;
  createdDateTime?: string;
  deletedDateTime?: null;
  etag?: string;
  eventDetail?: null;
  from?: {
    application?: null;
    device?: null;
    user?: {
      '@odata.type'?: string;
      displayName?: string;
      id?: string;
      tenantId?: string;
      userIdentityType?: string;
    };
  };
  id?: string;
  importance?: string;
  lastEditedDateTime?: null;
  lastModifiedDateTime?: string;
  locale?: string;
  messageType?: string;
  onBehalfOf?: null;
  policyViolation?: null;
  subject?: null;
  summary?: null;
  webUrl?: string;
};

export type MicrosoftTeamsV2ChannelMessageCreateNode = {
  type: 'n8n-nodes-base.microsoftTeams';
  version: 2;
  credentials?: Credentials;
  config: NodeConfig<MicrosoftTeamsV2ChannelMessageCreateParams>;
  output?: Items<MicrosoftTeamsV2ChannelMessageCreateOutput>;
};