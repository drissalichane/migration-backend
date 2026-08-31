/**
 * APITemplate.io Node - Version 1
 * Discriminator: resource=account, operation=get
 */


interface Credentials {
  apiTemplateIoApi: CredentialReference;
}

export type ApiTemplateIoV1AccountGetParams = {
  resource: 'account';
  operation: 'get';
};

export type ApiTemplateIoV1AccountGetNode = {
  type: 'n8n-nodes-base.apiTemplateIo';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<ApiTemplateIoV1AccountGetParams>;
};