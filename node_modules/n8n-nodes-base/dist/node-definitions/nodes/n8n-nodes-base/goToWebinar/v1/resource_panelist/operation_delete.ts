/**
 * GoToWebinar Node - Version 1
 * Discriminator: resource=panelist, operation=delete
 */


interface Credentials {
  goToWebinarOAuth2Api: CredentialReference;
}

export type GoToWebinarV1PanelistDeleteParams = {
  resource: 'panelist';
  operation: 'delete';
/**
 * Key of the webinar to delete the panelist from. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
 * @default []
 */
    webinarKey?: string | Expression<string>;
/**
 * Key of the panelist to delete
 */
    panelistKey?: string | Expression<string> | PlaceholderValue;
};

export type GoToWebinarV1PanelistDeleteNode = {
  type: 'n8n-nodes-base.goToWebinar';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<GoToWebinarV1PanelistDeleteParams>;
};