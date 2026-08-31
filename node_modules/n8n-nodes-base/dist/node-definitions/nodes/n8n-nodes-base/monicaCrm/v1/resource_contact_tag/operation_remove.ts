/**
 * Monica CRM Node - Version 1
 * Discriminator: resource=contactTag, operation=remove
 */


interface Credentials {
  monicaCrmApi: CredentialReference;
}

export type MonicaCrmV1ContactTagRemoveParams = {
  resource: 'contactTag';
  operation: 'remove';
/**
 * ID of the contact to remove the tag from
 */
    contactId?: string | Expression<string> | PlaceholderValue;
/**
 * Tags to remove from the contact. Choose from the list, or specify IDs using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
 * @default []
 */
    tagsToRemove?: string[];
};

export type MonicaCrmV1ContactTagRemoveNode = {
  type: 'n8n-nodes-base.monicaCrm';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<MonicaCrmV1ContactTagRemoveParams>;
};