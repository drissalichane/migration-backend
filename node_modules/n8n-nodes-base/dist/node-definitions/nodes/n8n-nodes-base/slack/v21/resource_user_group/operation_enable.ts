/**
 * Slack Node - Version 2.1
 * Discriminator: resource=userGroup, operation=enable
 */


interface Credentials {
  slackApi: CredentialReference;
  slackOAuth2Api: CredentialReference;
}

export type SlackV21UserGroupEnableParams = {
  resource: 'userGroup';
  operation: 'enable';
  authentication?: 'accessToken' | 'oAuth2' | Expression<string>;
/**
 * The encoded ID of the User Group to update
 */
    userGroupId?: string | Expression<string> | PlaceholderValue;
/**
 * Options
 * @default {}
 */
    option?: {
    /** Whether to include the number of users in each User Group
     * @default true
     */
    include_count?: boolean | Expression<boolean>;
  };
};

export type SlackV21UserGroupEnableNode = {
  type: 'n8n-nodes-base.slack';
  version: 2.1;
  credentials?: Credentials;
  config: NodeConfig<SlackV21UserGroupEnableParams>;
};