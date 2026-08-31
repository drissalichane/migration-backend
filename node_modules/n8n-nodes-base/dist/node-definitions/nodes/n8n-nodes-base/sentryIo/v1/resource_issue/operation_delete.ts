/**
 * Sentry.io Node - Version 1
 * Discriminator: resource=issue, operation=delete
 */


interface Credentials {
  sentryIoOAuth2Api: CredentialReference;
  sentryIoApi: CredentialReference;
  sentryIoServerApi: CredentialReference;
}

/** Delete an issue */
export type SentryIoV1IssueDeleteParams = {
  resource: 'issue';
  operation: 'delete';
  authentication?: 'accessToken' | 'oAuth2' | 'accessTokenServer' | Expression<string>;
/**
 * ID of issue to get
 */
    issueId?: string | Expression<string> | PlaceholderValue;
};

export type SentryIoV1IssueDeleteNode = {
  type: 'n8n-nodes-base.sentryIo';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<SentryIoV1IssueDeleteParams>;
};