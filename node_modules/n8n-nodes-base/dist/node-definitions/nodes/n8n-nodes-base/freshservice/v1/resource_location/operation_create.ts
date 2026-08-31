/**
 * Freshservice Node - Version 1
 * Discriminator: resource=location, operation=create
 */


interface Credentials {
  freshserviceApi: CredentialReference;
}

/** Create an agent */
export type FreshserviceV1LocationCreateParams = {
  resource: 'location';
  operation: 'create';
/**
 * Name of the location
 */
    name?: string | Expression<string> | PlaceholderValue;
/**
 * Additional Fields
 * @default {}
 */
    additionalFields?: {
    /** Address
     * @default {}
     */
    address?: {
        /** Address Details
     */
    addressFields?: {
      /** Line 1
       */
      line1?: string | Expression<string> | PlaceholderValue;
      /** Line 2
       */
      line2?: string | Expression<string> | PlaceholderValue;
      /** City
       */
      city?: string | Expression<string> | PlaceholderValue;
      /** Country
       */
      country?: string | Expression<string> | PlaceholderValue;
      /** State
       */
      state?: string | Expression<string> | PlaceholderValue;
      /** Zip Code
       */
      zipcode?: string | Expression<string> | PlaceholderValue;
    };
  };
  };
};

export type FreshserviceV1LocationCreateNode = {
  type: 'n8n-nodes-base.freshservice';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<FreshserviceV1LocationCreateParams>;
};