/**
 * Monica CRM Node - Version 1
 * Discriminator: resource=contact, operation=get
 */


interface Credentials {
  monicaCrmApi: CredentialReference;
}

/** Retrieve an activity */
export type MonicaCrmV1ContactGetParams = {
  resource: 'contact';
  operation: 'get';
/**
 * ID of the contact to retrieve
 */
    contactId?: string | Expression<string> | PlaceholderValue;
};

export type MonicaCrmV1ContactGetNode = {
  type: 'n8n-nodes-base.monicaCrm';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<MonicaCrmV1ContactGetParams>;
};