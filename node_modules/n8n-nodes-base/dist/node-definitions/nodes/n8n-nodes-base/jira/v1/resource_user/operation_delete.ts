/**
 * Jira Software Node - Version 1
 * Discriminator: resource=user, operation=delete
 */


interface Credentials {
  jiraSoftwareCloudApi: CredentialReference;
  jiraSoftwareServerApi: CredentialReference;
  jiraSoftwareServerPatApi: CredentialReference;
}

/** Get, create and delete a user */
export type JiraV1UserDeleteParams = {
  resource: 'user';
  operation: 'delete';
  jiraVersion?: 'cloud' | 'server' | 'serverPat' | Expression<string>;
/**
 * Account ID of the user to delete
 */
    accountId?: string | Expression<string> | PlaceholderValue;
};

export type JiraV1UserDeleteNode = {
  type: 'n8n-nodes-base.jira';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<JiraV1UserDeleteParams>;
};