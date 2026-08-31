/**
 * Bubble Node - Version 1
 * Discriminator: resource=object, operation=create
 */


interface Credentials {
  bubbleApi: CredentialReference;
}

export type BubbleV1ObjectCreateParams = {
  resource: 'object';
  operation: 'create';
/**
 * Name of data type of the object to create
 */
    typeName?: string | Expression<string> | PlaceholderValue;
/**
 * Properties
 * @default {}
 */
    properties?: {
        /** Property
     */
    property?: Array<{
      /** Field to set for the object to create
       */
      key?: string | Expression<string> | PlaceholderValue;
      /** Value to set for the object to create
       */
      value?: string | Expression<string> | PlaceholderValue;
    }>;
  };
};

export type BubbleV1ObjectCreateOutput = {
  id?: string;
  status?: string;
};

export type BubbleV1ObjectCreateNode = {
  type: 'n8n-nodes-base.bubble';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<BubbleV1ObjectCreateParams>;
  output?: Items<BubbleV1ObjectCreateOutput>;
};