/**
 * Slack Node - Version 2.2
 * Discriminator: resource=userGroup, operation=getAll
 */


interface Credentials {
  slackApi: CredentialReference;
  slackOAuth2Api: CredentialReference;
}

/** Get many channels in a Slack team */
export type SlackV22UserGroupGetAllParams = {
  resource: 'userGroup';
  operation: 'getAll';
  authentication?: 'accessToken' | 'oAuth2' | Expression<string>;
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
/**
 * Options
 * @default {}
 */
    options?: {
    /** Whether to include the number of users in each User Group
     * @default true
     */
    include_count?: boolean | Expression<boolean>;
    /** Whether to include disabled User Groups
     * @default true
     */
    include_disabled?: boolean | Expression<boolean>;
    /** Whether to include the list of users for each User Group
     * @default true
     */
    include_users?: boolean | Expression<boolean>;
  };
};

export type SlackV22UserGroupGetAllNode = {
  type: 'n8n-nodes-base.slack';
  version: 2.2;
  credentials?: Credentials;
  config: NodeConfig<SlackV22UserGroupGetAllParams>;
};