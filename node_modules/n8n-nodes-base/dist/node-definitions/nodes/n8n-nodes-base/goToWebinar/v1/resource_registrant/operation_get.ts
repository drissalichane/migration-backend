/**
 * GoToWebinar Node - Version 1
 * Discriminator: resource=registrant, operation=get
 */


interface Credentials {
  goToWebinarOAuth2Api: CredentialReference;
}

export type GoToWebinarV1RegistrantGetParams = {
  resource: 'registrant';
  operation: 'get';
/**
 * Key of the webinar of the registrant to retrieve. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
 * @default []
 */
    webinarKey?: string | Expression<string>;
/**
 * Key of the registrant to retrieve
 */
    registrantKey?: string | Expression<string> | PlaceholderValue;
};

export type GoToWebinarV1RegistrantGetNode = {
  type: 'n8n-nodes-base.goToWebinar';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<GoToWebinarV1RegistrantGetParams>;
};