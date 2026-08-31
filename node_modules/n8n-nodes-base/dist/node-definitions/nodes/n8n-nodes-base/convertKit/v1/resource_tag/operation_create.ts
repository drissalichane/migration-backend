/**
 * ConvertKit Node - Version 1
 * Discriminator: resource=tag, operation=create
 */


interface Credentials {
  convertKitApi: CredentialReference;
}

/** Create a field */
export type ConvertKitV1TagCreateParams = {
  resource: 'tag';
  operation: 'create';
/**
 * Tag name, multiple can be added separated by comma
 */
    name?: string | Expression<string> | PlaceholderValue;
};

export type ConvertKitV1TagCreateNode = {
  type: 'n8n-nodes-base.convertKit';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<ConvertKitV1TagCreateParams>;
};