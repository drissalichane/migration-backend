/**
 * ConvertKit Node - Version 1
 * Discriminator: resource=customField, operation=delete
 */


interface Credentials {
  convertKitApi: CredentialReference;
}

/** Delete a field */
export type ConvertKitV1CustomFieldDeleteParams = {
  resource: 'customField';
  operation: 'delete';
/**
 * The ID of your custom field
 */
    id?: string | Expression<string> | PlaceholderValue;
};

export type ConvertKitV1CustomFieldDeleteNode = {
  type: 'n8n-nodes-base.convertKit';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<ConvertKitV1CustomFieldDeleteParams>;
};