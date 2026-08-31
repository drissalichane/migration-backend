/**
 * Microsoft Teams Node - Version 2
 * Discriminator: resource=chatMessage, operation=create
 */


interface Credentials {
  microsoftTeamsOAuth2Api: CredentialReference;
}

/** Create a channel */
export type MicrosoftTeamsV2ChatMessageCreateParams = {
  resource: 'chatMessage';
  operation: 'create';
/**
 * Select the chat from the list, by URL, or by ID (find the chat ID after "conversations/" in the URL)
 * @default {"mode":"list","value":""}
 */
    chatId?: { __rl: true; mode: 'list' | 'id'; value: string; cachedResultName?: string };
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
 * Other options to set
 * @default {}
 */
    options?: {
    /** Whether to append a link to this workflow at the end of the message. This is helpful if you have many workflows sending messages.
     * @default true
     */
    includeLinkToWorkflow?: boolean | Expression<boolean>;
  };
};

export type MicrosoftTeamsV2ChatMessageCreateOutput = {
  '@odata.context'?: string;
  body?: {
    content?: string;
    contentType?: string;
  };
  channelIdentity?: null;
  chatId?: string;
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
  policyViolation?: null;
  replyToId?: null;
  subject?: null;
  summary?: null;
  webUrl?: null;
};

export type MicrosoftTeamsV2ChatMessageCreateNode = {
  type: 'n8n-nodes-base.microsoftTeams';
  version: 2;
  credentials?: Credentials;
  config: NodeConfig<MicrosoftTeamsV2ChatMessageCreateParams>;
  output?: Items<MicrosoftTeamsV2ChatMessageCreateOutput>;
};