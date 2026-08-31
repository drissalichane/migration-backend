/**
 * Mattermost Node - Version 1
 * Discriminator: resource=user, operation=invite
 */


interface Credentials {
  mattermostApi: CredentialReference;
}

/** Invite user to team */
export type MattermostV1UserInviteParams = {
  resource: 'user';
  operation: 'invite';
/**
 * Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
 */
    teamId?: string | Expression<string>;
/**
 * User's email. Multiple emails can be set separated by comma.
 */
    emails?: string | Expression<string> | PlaceholderValue;
};

export type MattermostV1UserInviteNode = {
  type: 'n8n-nodes-base.mattermost';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<MattermostV1UserInviteParams>;
};