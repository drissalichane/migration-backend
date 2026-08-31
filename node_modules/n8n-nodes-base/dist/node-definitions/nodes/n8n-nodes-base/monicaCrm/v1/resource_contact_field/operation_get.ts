/**
 * Monica CRM Node - Version 1
 * Discriminator: resource=contactField, operation=get
 */


interface Credentials {
  monicaCrmApi: CredentialReference;
}

/** Retrieve an activity */
export type MonicaCrmV1ContactFieldGetParams = {
  resource: 'contactField';
  operation: 'get';
/**
 * ID of the contact field to retrieve
 */
    contactFieldId?: string | Expression<string> | PlaceholderValue;
};

export type MonicaCrmV1ContactFieldGetNode = {
  type: 'n8n-nodes-base.monicaCrm';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<MonicaCrmV1ContactFieldGetParams>;
};