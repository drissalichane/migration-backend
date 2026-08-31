/**
 * Google Chat Node - Version 1
 * Discriminator: resource=message, operation=get
 */


interface Credentials {
  googleApi: CredentialReference;
  googleChatOAuth2Api: CredentialReference;
}

/** Get a membership */
export type GoogleChatV1MessageGetParams = {
  resource: 'message';
  operation: 'get';
  authentication?: 'oAuth2' | 'serviceAccount' | Expression<string>;
/**
 * Resource name of the message to be retrieved, in the form "spaces//messages/"
 */
    messageId?: string | Expression<string> | PlaceholderValue;
};

export type GoogleChatV1MessageGetOutput = {
  argumentText?: string;
  createTime?: string;
  formattedText?: string;
  name?: string;
  sender?: {
    displayName?: string;
    name?: string;
    type?: string;
  };
  space?: {
    lastActiveTime?: string;
    membershipCount?: {
      joinedDirectHumanUserCount?: number;
    };
    name?: string;
    spaceHistoryState?: string;
    spaceThreadingState?: string;
    spaceType?: string;
    spaceUri?: string;
    type?: string;
  };
  text?: string;
  thread?: {
    name?: string;
  };
};

export type GoogleChatV1MessageGetNode = {
  type: 'n8n-nodes-base.googleChat';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<GoogleChatV1MessageGetParams>;
  output?: Items<GoogleChatV1MessageGetOutput>;
};