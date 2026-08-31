/**
 * MISP Node - Version 1
 * Discriminator: resource=tag, operation=create
 */


interface Credentials {
  mispApi: CredentialReference;
}

export type MispV1TagCreateParams = {
  resource: 'tag';
  operation: 'create';
/**
 * Name
 */
    name?: string | Expression<string> | PlaceholderValue;
/**
 * Additional Fields
 * @default {}
 */
    additionalFields?: {
    /** Hex color code for the tag
     */
    colour?: string | Expression<string>;
  };
};

export type MispV1TagCreateNode = {
  type: 'n8n-nodes-base.misp';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<MispV1TagCreateParams>;
};