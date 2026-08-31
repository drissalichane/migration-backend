/**
 * Sentry.io Node - Version 1
 * Discriminator: resource=project, operation=delete
 */


interface Credentials {
  sentryIoOAuth2Api: CredentialReference;
  sentryIoApi: CredentialReference;
  sentryIoServerApi: CredentialReference;
}

/** Delete an issue */
export type SentryIoV1ProjectDeleteParams = {
  resource: 'project';
  operation: 'delete';
  authentication?: 'accessToken' | 'oAuth2' | 'accessTokenServer' | Expression<string>;
/**
 * The slug of the organization the project belong to. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
 */
    organizationSlug?: string | Expression<string>;
/**
 * The slug of the project to delete. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
 */
    projectSlug?: string | Expression<string>;
};

export type SentryIoV1ProjectDeleteNode = {
  type: 'n8n-nodes-base.sentryIo';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<SentryIoV1ProjectDeleteParams>;
};