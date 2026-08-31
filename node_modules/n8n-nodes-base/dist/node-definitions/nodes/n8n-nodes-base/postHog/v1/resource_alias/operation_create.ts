/**
 * PostHog Node - Version 1
 * Discriminator: resource=alias, operation=create
 */


interface Credentials {
  postHogApi: CredentialReference;
}

/** Create an alias */
export type PostHogV1AliasCreateParams = {
  resource: 'alias';
  operation: 'create';
/**
 * The name of the alias
 */
    alias?: string | Expression<string> | PlaceholderValue;
/**
 * The user's distinct ID
 */
    distinctId?: string | Expression<string> | PlaceholderValue;
/**
 * Additional Fields
 * @default {}
 */
    additionalFields?: {
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
    /** If not set, it'll automatically be set to the current time
     */
    timestamp?: string | Expression<string>;
  };
};

export type PostHogV1AliasCreateNode = {
  type: 'n8n-nodes-base.postHog';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<PostHogV1AliasCreateParams>;
};