/**
 * Google Chat Node - Version 1
 * Discriminator: resource=space, operation=get
 */


interface Credentials {
  googleApi: CredentialReference;
  googleChatOAuth2Api: CredentialReference;
}

/** Get a membership */
export type GoogleChatV1SpaceGetParams = {
  resource: 'space';
  operation: 'get';
  authentication?: 'oAuth2' | 'serviceAccount' | Expression<string>;
/**
 * Resource name of the space, in the form "spaces/*"
 */
    spaceId?: string | Expression<string> | PlaceholderValue;
};

export type GoogleChatV1SpaceGetOutput = {
  accessSettings?: {
    accessState?: string;
    audience?: string;
  };
  createTime?: string;
  customer?: string;
  displayName?: string;
  lastActiveTime?: string;
  membershipCount?: {
    joinedDirectHumanUserCount?: number;
  };
  name?: string;
  permissionSettings?: {
    manageApps?: {
      managersAllowed?: boolean;
      membersAllowed?: boolean;
    };
    manageMembersAndGroups?: {
      managersAllowed?: boolean;
      membersAllowed?: boolean;
    };
    manageWebhooks?: {
      managersAllowed?: boolean;
      membersAllowed?: boolean;
    };
    modifySpaceDetails?: {
      managersAllowed?: boolean;
      membersAllowed?: boolean;
    };
    postMessages?: {
      managersAllowed?: boolean;
      membersAllowed?: boolean;
    };
    replyMessages?: {
      managersAllowed?: boolean;
      membersAllowed?: boolean;
    };
    toggleHistory?: {
      managersAllowed?: boolean;
      membersAllowed?: boolean;
    };
    useAtMentionAll?: {
      managersAllowed?: boolean;
      membersAllowed?: boolean;
    };
  };
  spaceHistoryState?: string;
  spaceThreadingState?: string;
  spaceType?: string;
  spaceUri?: string;
  type?: string;
};

export type GoogleChatV1SpaceGetNode = {
  type: 'n8n-nodes-base.googleChat';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<GoogleChatV1SpaceGetParams>;
  output?: Items<GoogleChatV1SpaceGetOutput>;
};