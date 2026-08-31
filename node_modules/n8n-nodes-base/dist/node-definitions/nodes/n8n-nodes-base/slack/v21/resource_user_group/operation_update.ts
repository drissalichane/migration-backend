/**
 * Slack Node - Version 2.1
 * Discriminator: resource=userGroup, operation=update
 */


interface Credentials {
  slackApi: CredentialReference;
  slackOAuth2Api: CredentialReference;
}

export type SlackV21UserGroupUpdateParams = {
  resource: 'userGroup';
  operation: 'update';
  authentication?: 'accessToken' | 'oAuth2' | Expression<string>;
/**
 * The encoded ID of the User Group to update
 */
    userGroupId?: string | Expression<string> | PlaceholderValue;
/**
 * Update Fields
 * @default {}
 */
    updateFields?: {
    /** A comma-separated string of encoded channel IDs for which the User Group uses as a default. Choose from the list, or specify IDs using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
     * @default []
     */
    channels?: string[];
    /** A short description of the User Group
     */
    description?: string | Expression<string> | PlaceholderValue;
    /** A mention handle. Must be unique among channels, users and User Groups.
     */
    handle?: string | Expression<string> | PlaceholderValue;
    /** Whether to include the number of users in each User Group
     * @default true
     */
    include_count?: boolean | Expression<boolean>;
    /** A name for the User Group. Must be unique among User Groups.
     */
    name?: string | Expression<string> | PlaceholderValue;
  };
};

export type SlackV21UserGroupUpdateNode = {
  type: 'n8n-nodes-base.slack';
  version: 2.1;
  credentials?: Credentials;
  config: NodeConfig<SlackV21UserGroupUpdateParams>;
};