/**
 * Bubble Node - Version 1
 * Discriminator: resource=object, operation=update
 */


interface Credentials {
  bubbleApi: CredentialReference;
}

export type BubbleV1ObjectUpdateParams = {
  resource: 'object';
  operation: 'update';
/**
 * Name of data type of the object to update
 */
    typeName?: string | Expression<string> | PlaceholderValue;
/**
 * ID of the object to update
 */
    objectId?: string | Expression<string> | PlaceholderValue;
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

export type BubbleV1ObjectUpdateOutput = {
  success?: boolean;
};

export type BubbleV1ObjectUpdateNode = {
  type: 'n8n-nodes-base.bubble';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<BubbleV1ObjectUpdateParams>;
  output?: Items<BubbleV1ObjectUpdateOutput>;
};