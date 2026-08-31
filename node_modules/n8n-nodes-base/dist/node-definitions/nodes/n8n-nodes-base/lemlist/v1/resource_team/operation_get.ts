/**
 * Lemlist Node - Version 1
 * Discriminator: resource=team, operation=get
 */


interface Credentials {
  lemlistApi: CredentialReference;
}

export type LemlistV1TeamGetParams = {
  resource: 'team';
  operation: 'get';
};

export type LemlistV1TeamGetNode = {
  type: 'n8n-nodes-base.lemlist';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<LemlistV1TeamGetParams>;
};