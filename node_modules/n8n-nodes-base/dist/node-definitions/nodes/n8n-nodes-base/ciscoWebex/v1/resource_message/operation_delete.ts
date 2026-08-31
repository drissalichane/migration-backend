/**
 * Webex by Cisco Node - Version 1
 * Discriminator: resource=message, operation=delete
 */


interface Credentials {
  ciscoWebexOAuth2Api: CredentialReference;
}

export type CiscoWebexV1MessageDeleteParams = {
  resource: 'message';
  operation: 'delete';
/**
 * ID of the message to delete
 */
    messageId?: string | Expression<string> | PlaceholderValue;
};

export type CiscoWebexV1MessageDeleteNode = {
  type: 'n8n-nodes-base.ciscoWebex';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<CiscoWebexV1MessageDeleteParams>;
};