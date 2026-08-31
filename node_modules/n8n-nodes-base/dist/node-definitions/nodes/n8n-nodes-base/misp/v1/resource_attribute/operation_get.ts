/**
 * MISP Node - Version 1
 * Discriminator: resource=attribute, operation=get
 */


interface Credentials {
  mispApi: CredentialReference;
}

export type MispV1AttributeGetParams = {
  resource: 'attribute';
  operation: 'get';
/**
 * UUID or numeric ID of the attribute
 */
    attributeId?: string | Expression<string> | PlaceholderValue;
};

export type MispV1AttributeGetNode = {
  type: 'n8n-nodes-base.misp';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<MispV1AttributeGetParams>;
};