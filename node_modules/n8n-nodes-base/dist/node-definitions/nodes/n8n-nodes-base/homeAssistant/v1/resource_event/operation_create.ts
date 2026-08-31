/**
 * Home Assistant Node - Version 1
 * Discriminator: resource=event, operation=create
 */


interface Credentials {
  homeAssistantApi: CredentialReference;
}

/** Create an event */
export type HomeAssistantV1EventCreateParams = {
  resource: 'event';
  operation: 'create';
/**
 * The Entity ID for which an event will be created
 */
    eventType?: string | Expression<string> | PlaceholderValue;
/**
 * Event Attributes
 * @default {}
 */
    eventAttributes?: {
        /** Attributes
     */
    attributes?: Array<{
      /** Name of the attribute
       */
      name?: string | Expression<string> | PlaceholderValue;
      /** Value of the attribute
       */
      value?: string | Expression<string> | PlaceholderValue;
    }>;
  };
};

export type HomeAssistantV1EventCreateNode = {
  type: 'n8n-nodes-base.homeAssistant';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<HomeAssistantV1EventCreateParams>;
};