/**
 * PostHog Node - Version 1
 * Discriminator: resource=identity, operation=create
 */


interface Credentials {
  postHogApi: CredentialReference;
}

/** Create an alias */
export type PostHogV1IdentityCreateParams = {
  resource: 'identity';
  operation: 'create';
/**
 * The identity's distinct ID
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
    /** Message ID
     */
    messageId?: string | Expression<string> | PlaceholderValue;
    /** If not set, it'll automatically be set to the current time
     */
    timestamp?: string | Expression<string>;
  };
};

export type PostHogV1IdentityCreateNode = {
  type: 'n8n-nodes-base.postHog';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<PostHogV1IdentityCreateParams>;
};