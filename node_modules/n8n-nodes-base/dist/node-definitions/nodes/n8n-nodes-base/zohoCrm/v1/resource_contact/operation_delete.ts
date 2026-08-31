/**
 * Zoho CRM Node - Version 1
 * Discriminator: resource=contact, operation=delete
 */


interface Credentials {
  zohoOAuth2Api: CredentialReference;
}

/** Delete an account */
export type ZohoCrmV1ContactDeleteParams = {
  resource: 'contact';
  operation: 'delete';
/**
 * ID of the contact to delete
 */
    contactId?: string | Expression<string> | PlaceholderValue;
};

export type ZohoCrmV1ContactDeleteNode = {
  type: 'n8n-nodes-base.zohoCrm';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<ZohoCrmV1ContactDeleteParams>;
};