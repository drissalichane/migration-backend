/**
 * Microsoft Dynamics CRM Node - Version 1
 * Discriminator: resource=account, operation=delete
 */


interface Credentials {
  microsoftDynamicsOAuth2Api: CredentialReference;
}

export type MicrosoftDynamicsCrmV1AccountDeleteParams = {
  resource: 'account';
  operation: 'delete';
/**
 * Account ID
 */
    accountId?: string | Expression<string> | PlaceholderValue;
};

export type MicrosoftDynamicsCrmV1AccountDeleteNode = {
  type: 'n8n-nodes-base.microsoftDynamicsCrm';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<MicrosoftDynamicsCrmV1AccountDeleteParams>;
};