/**
 * Jira Software Node - Version 1
 * Discriminator: resource=user, operation=create
 */


interface Credentials {
  jiraSoftwareCloudApi: CredentialReference;
  jiraSoftwareServerApi: CredentialReference;
  jiraSoftwareServerPatApi: CredentialReference;
}

/** Get, create and delete a user */
export type JiraV1UserCreateParams = {
  resource: 'user';
  operation: 'create';
  jiraVersion?: 'cloud' | 'server' | 'serverPat' | Expression<string>;
/**
 * Username
 */
    username?: string | Expression<string> | PlaceholderValue;
/**
 * Email Address
 */
    emailAddress?: string | Expression<string> | PlaceholderValue;
/**
 * Display Name
 */
    displayName?: string | Expression<string> | PlaceholderValue;
/**
 * Additional Fields
 * @default {}
 */
    additionalFields?: {
    /** Password for the user. If a password is not set, a random password is generated.
     */
    password?: string | Expression<string> | PlaceholderValue;
    /** Whether to send the user an email confirmation that they have been added to Jira
     * @default false
     */
    notification?: boolean | Expression<boolean>;
  };
};

export type JiraV1UserCreateNode = {
  type: 'n8n-nodes-base.jira';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<JiraV1UserCreateParams>;
};