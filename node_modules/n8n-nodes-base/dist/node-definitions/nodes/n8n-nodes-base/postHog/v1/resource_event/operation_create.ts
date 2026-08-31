/**
 * PostHog Node - Version 1
 * Discriminator: resource=event, operation=create
 */


interface Credentials {
  postHogApi: CredentialReference;
}

/** Create an alias */
export type PostHogV1EventCreateParams = {
  resource: 'event';
  operation: 'create';
/**
 * The name of the event
 */
    eventName?: string | Expression<string> | PlaceholderValue;
/**
 * The user's distinct ID
 */
    distinctId?: string | Expression<string> | PlaceholderValue;
/**
 * Additional Fields
 * @default {}
 */
    additionalFields?: {
    /** Properties
     * @default {}
     */
    propertiesUi?: {
        /** Property
     */
    propertyValues?: Array<{
      /** Key
       */
      key?: string | Expression<string> | PlaceholderValue;
      /** Value
       */
      value?: string | Expression<string> | PlaceholderValue;
    }>;
  };
    /** If not set, it'll automatically be set to the current time
     */
    timestamp?: string | Expression<string>;
  };
};

export type PostHogV1EventCreateOutput = {
  status?: string;
};

export type PostHogV1EventCreateNode = {
  type: 'n8n-nodes-base.postHog';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<PostHogV1EventCreateParams>;
  output?: Items<PostHogV1EventCreateOutput>;
};