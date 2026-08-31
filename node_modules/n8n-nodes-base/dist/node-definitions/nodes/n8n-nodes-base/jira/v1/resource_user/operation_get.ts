/**
 * Jira Software Node - Version 1
 * Discriminator: resource=user, operation=get
 */


interface Credentials {
  jiraSoftwareCloudApi: CredentialReference;
  jiraSoftwareServerApi: CredentialReference;
  jiraSoftwareServerPatApi: CredentialReference;
}

/** Get, create and delete a user */
export type JiraV1UserGetParams = {
  resource: 'user';
  operation: 'get';
  jiraVersion?: 'cloud' | 'server' | 'serverPat' | Expression<string>;
/**
 * Account ID of the user to retrieve
 */
    accountId?: string | Expression<string> | PlaceholderValue;
/**
 * Additional Fields
 * @default {}
 */
    additionalFields?: {
    /** Include more information about the user
     * @default []
     */
    expand?: Array<'groups' | 'applicationRoles'>;
  };
};

export type JiraV1UserGetOutput = {
  accountId?: string;
  accountType?: string;
  active?: boolean;
  applicationRoles?: {
    items?: Array<{
      key?: string;
      name?: string;
    }>;
    size?: number;
  };
  avatarUrls?: {
    '16x16'?: string;
    '24x24'?: string;
    '32x32'?: string;
    '48x48'?: string;
  };
  displayName?: string;
  emailAddress?: string;
  expand?: string;
  groups?: {
    items?: Array<{
      groupId?: string;
      name?: string;
      self?: string;
    }>;
    size?: number;
  };
  locale?: string;
  self?: string;
  timeZone?: string;
};

export type JiraV1UserGetNode = {
  type: 'n8n-nodes-base.jira';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<JiraV1UserGetParams>;
  output?: Items<JiraV1UserGetOutput>;
};