/**
 * Monica CRM Node - Version 1
 * Discriminator: resource=conversation, operation=create
 */


interface Credentials {
  monicaCrmApi: CredentialReference;
}

/** Create an activity */
export type MonicaCrmV1ConversationCreateParams = {
  resource: 'conversation';
  operation: 'create';
/**
 * ID of the contact to associate the conversation with
 */
    contactId?: string | Expression<string> | PlaceholderValue;
/**
 * Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
 */
    contactFieldTypeId?: string | Expression<string>;
/**
 * Date when the conversation happened
 */
    happenedAt?: string | Expression<string>;
};

export type MonicaCrmV1ConversationCreateNode = {
  type: 'n8n-nodes-base.monicaCrm';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<MonicaCrmV1ConversationCreateParams>;
};