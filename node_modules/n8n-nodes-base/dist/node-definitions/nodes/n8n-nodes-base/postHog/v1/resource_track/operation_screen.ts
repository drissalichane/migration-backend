/**
 * PostHog Node - Version 1
 * Discriminator: resource=track, operation=screen
 */


interface Credentials {
  postHogApi: CredentialReference;
}

/** Track a screen */
export type PostHogV1TrackScreenParams = {
  resource: 'track';
  operation: 'screen';
/**
 * Name
 */
    name?: string | Expression<string> | PlaceholderValue;
/**
 * The user's distinct ID
 */
    distinctId?: string | Expression<string> | PlaceholderValue;
/**
 * Additional Fields
 * @default {}
 */
    additionalFields?: {
    /** Category
     */
    category?: string | Expression<string> | PlaceholderValue;
    /** Context
     * @default {}
     */
    contextUi?: {
        /** Context
     */
    contextValues?: Array<{
      /** Key
       */
      key?: string | Expression<string> | PlaceholderValue;
      /** Value
       */
      value?: string | Expression<string> | PlaceholderValue;
    }>;
  };
    /** Message ID
     */
    messageId?: string | Expression<string> | PlaceholderValue;
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

export type PostHogV1TrackScreenNode = {
  type: 'n8n-nodes-base.postHog';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<PostHogV1TrackScreenParams>;
};