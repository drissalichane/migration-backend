/**
 * Slack Node - Version 2.1
 * Discriminator: resource=userGroup, operation=disable
 */


interface Credentials {
  slackApi: CredentialReference;
  slackOAuth2Api: CredentialReference;
}

export type SlackV21UserGroupDisableParams = {
  resource: 'userGroup';
  operation: 'disable';
  authentication?: 'accessToken' | 'oAuth2' | Expression<string>;
/**
 * The encoded ID of the User Group to update
 */
    userGroupId?: string | Expression<string> | PlaceholderValue;
/**
 * Options
 * @default {}
 */
    options?: {
    /** Whether to include the number of users in each User Group
     * @default true
     */
    include_count?: boolean | Expression<boolean>;
  };
};

export type SlackV21UserGroupDisableNode = {
  type: 'n8n-nodes-base.slack';
  version: 2.1;
  credentials?: Credentials;
  config: NodeConfig<SlackV21UserGroupDisableParams>;
};