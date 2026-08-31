/**
 * GitHub Node - Version 1.1
 * Discriminator: resource=user, operation=invite
 */


interface Credentials {
  githubApi: CredentialReference;
  githubOAuth2Api: CredentialReference;
}

/** Invites a user to an organization */
export type GithubV11UserInviteParams = {
  resource: 'user';
  operation: 'invite';
  authentication?: 'accessToken' | 'oAuth2' | Expression<string>;
/**
 * The GitHub organization that the user is being invited to
 */
    organization?: string | Expression<string> | PlaceholderValue;
/**
 * The email address of the invited user
 */
    email?: string | Expression<string> | PlaceholderValue;
};

export type GithubV11UserInviteNode = {
  type: 'n8n-nodes-base.github';
  version: 1.1;
  credentials?: Credentials;
  config: NodeConfig<GithubV11UserInviteParams>;
};