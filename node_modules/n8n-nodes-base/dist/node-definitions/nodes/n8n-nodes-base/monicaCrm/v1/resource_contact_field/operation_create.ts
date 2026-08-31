/**
 * Monica CRM Node - Version 1
 * Discriminator: resource=contactField, operation=create
 */


interface Credentials {
  monicaCrmApi: CredentialReference;
}

/** Create an activity */
export type MonicaCrmV1ContactFieldCreateParams = {
  resource: 'contactField';
  operation: 'create';
/**
 * ID of the contact to associate the contact field with
 */
    contactId?: string | Expression<string> | PlaceholderValue;
/**
 * Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
 */
    contactFieldTypeId?: string | Expression<string>;
/**
 * Content of the contact field - max 255 characters
 */
    data?: string | Expression<string> | PlaceholderValue;
};

export type MonicaCrmV1ContactFieldCreateNode = {
  type: 'n8n-nodes-base.monicaCrm';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<MonicaCrmV1ContactFieldCreateParams>;
};