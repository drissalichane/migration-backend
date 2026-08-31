/**
 * GoToWebinar Node - Version 1
 * Discriminator: resource=panelist, operation=create
 */


interface Credentials {
  goToWebinarOAuth2Api: CredentialReference;
}

export type GoToWebinarV1PanelistCreateParams = {
  resource: 'panelist';
  operation: 'create';
/**
 * Name of the panelist to create
 */
    name?: string | Expression<string> | PlaceholderValue;
/**
 * Email address of the panelist to create
 */
    email?: string | Expression<string> | PlaceholderValue;
/**
 * Key of the webinar that the panelist will present at. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
 * @default []
 */
    webinarKey?: string | Expression<string>;
};

export type GoToWebinarV1PanelistCreateNode = {
  type: 'n8n-nodes-base.goToWebinar';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<GoToWebinarV1PanelistCreateParams>;
};