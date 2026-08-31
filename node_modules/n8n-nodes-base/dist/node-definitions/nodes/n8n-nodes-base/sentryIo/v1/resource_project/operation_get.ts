/**
 * Sentry.io Node - Version 1
 * Discriminator: resource=project, operation=get
 */


interface Credentials {
  sentryIoOAuth2Api: CredentialReference;
  sentryIoApi: CredentialReference;
  sentryIoServerApi: CredentialReference;
}

/** Get event by ID */
export type SentryIoV1ProjectGetParams = {
  resource: 'project';
  operation: 'get';
  authentication?: 'accessToken' | 'oAuth2' | 'accessTokenServer' | Expression<string>;
/**
 * The slug of the organization the events belong to. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
 */
    organizationSlug?: string | Expression<string>;
/**
 * The slug of the project to retrieve. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
 */
    projectSlug?: string | Expression<string>;
};

export type SentryIoV1ProjectGetNode = {
  type: 'n8n-nodes-base.sentryIo';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<SentryIoV1ProjectGetParams>;
};