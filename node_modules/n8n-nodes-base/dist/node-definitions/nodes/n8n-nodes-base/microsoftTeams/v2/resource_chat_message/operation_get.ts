/**
 * Microsoft Teams Node - Version 2
 * Discriminator: resource=chatMessage, operation=get
 */


interface Credentials {
  microsoftTeamsOAuth2Api: CredentialReference;
}

/** Get a channel */
export type MicrosoftTeamsV2ChatMessageGetParams = {
  resource: 'chatMessage';
  operation: 'get';
/**
 * Select the chat from the list, by URL, or by ID (find the chat ID after "conversations/" in the URL)
 * @default {"mode":"list","value":""}
 */
    chatId?: { __rl: true; mode: 'list' | 'id'; value: string; cachedResultName?: string };
/**
 * The ID of the message to retrieve
 */
    messageId?: string | Expression<string> | PlaceholderValue;
};

export type MicrosoftTeamsV2ChatMessageGetOutput = {
  '@odata.context'?: string;
  attachments?: Array<{
    content?: string;
    contentType?: string;
    contentUrl?: null;
    id?: string;
    name?: null;
    teamsAppId?: null;
    thumbnailUrl?: null;
  }>;
  body?: {
    content?: string;
    contentType?: string;
  };
  channelIdentity?: null;
  chatId?: string;
  createdDateTime?: string;
  etag?: string;
  from?: {
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
  mentions?: Array<{
    id?: number;
    mentioned?: {
      application?: {
        '@odata.type'?: string;
        applicationIdentityType?: string;
        displayName?: string;
        id?: string;
      };
      conversation?: null;
      device?: null;
      tag?: null;
      user?: null;
    };
    mentionText?: string;
  }>;
  messageType?: string;
  policyViolation?: null;
  reactions?: Array<{
    createdDateTime?: string;
    displayName?: string;
    reactionContentUrl?: null;
    reactionType?: string;
    user?: {
      application?: null;
      device?: null;
      user?: {
        '@odata.type'?: string;
        displayName?: null;
        id?: string;
        userIdentityType?: string;
      };
    };
  }>;
  replyToId?: null;
  summary?: null;
  webUrl?: null;
};

export type MicrosoftTeamsV2ChatMessageGetNode = {
  type: 'n8n-nodes-base.microsoftTeams';
  version: 2;
  credentials?: Credentials;
  config: NodeConfig<MicrosoftTeamsV2ChatMessageGetParams>;
  output?: Items<MicrosoftTeamsV2ChatMessageGetOutput>;
};