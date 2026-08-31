/**
 * Microsoft Teams Node - Version 1
 * Discriminator: resource=chatMessage, operation=get
 */


interface Credentials {
  microsoftTeamsOAuth2Api: CredentialReference;
}

/** Get a channel */
export type MicrosoftTeamsV1ChatMessageGetParams = {
  resource: 'chatMessage';
  operation: 'get';
/**
 * Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
 */
    chatId?: string | Expression<string>;
/**
 * Message ID
 */
    messageId?: string | Expression<string> | PlaceholderValue;
};

export type MicrosoftTeamsV1ChatMessageGetNode = {
  type: 'n8n-nodes-base.microsoftTeams';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<MicrosoftTeamsV1ChatMessageGetParams>;
};