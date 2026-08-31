/**
 * Sentry.io Node - Version 1
 * Discriminator: resource=release, operation=get
 */


interface Credentials {
  sentryIoOAuth2Api: CredentialReference;
  sentryIoApi: CredentialReference;
  sentryIoServerApi: CredentialReference;
}

/** Get event by ID */
export type SentryIoV1ReleaseGetParams = {
  resource: 'release';
  operation: 'get';
  authentication?: 'accessToken' | 'oAuth2' | 'accessTokenServer' | Expression<string>;
/**
 * The slug of the organization the release belongs to. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
 */
    organizationSlug?: string | Expression<string>;
/**
 * The version identifier of the release
 */
    version?: string | Expression<string> | PlaceholderValue;
};

export type SentryIoV1ReleaseGetNode = {
  type: 'n8n-nodes-base.sentryIo';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<SentryIoV1ReleaseGetParams>;
};