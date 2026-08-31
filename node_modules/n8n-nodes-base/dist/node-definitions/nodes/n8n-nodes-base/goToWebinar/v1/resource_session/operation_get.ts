/**
 * GoToWebinar Node - Version 1
 * Discriminator: resource=session, operation=get
 */


interface Credentials {
  goToWebinarOAuth2Api: CredentialReference;
}

export type GoToWebinarV1SessionGetParams = {
  resource: 'session';
  operation: 'get';
/**
 * Key of the webinar to which the session belongs. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
 * @default []
 */
    webinarKey?: string | Expression<string>;
/**
 * Session Key
 */
    sessionKey?: string | Expression<string> | PlaceholderValue;
};

export type GoToWebinarV1SessionGetNode = {
  type: 'n8n-nodes-base.goToWebinar';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<GoToWebinarV1SessionGetParams>;
};