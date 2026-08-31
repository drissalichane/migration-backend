/**
 * Freshservice Node - Version 1
 * Discriminator: resource=location, operation=update
 */


interface Credentials {
  freshserviceApi: CredentialReference;
}

/** Update an agent */
export type FreshserviceV1LocationUpdateParams = {
  resource: 'location';
  operation: 'update';
/**
 * ID of the location to update
 */
    locationId?: string | Expression<string> | PlaceholderValue;
/**
 * Update Fields
 * @default {}
 */
    updateFields?: {
    /** Name
     */
    name?: string | Expression<string> | PlaceholderValue;
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

export type FreshserviceV1LocationUpdateNode = {
  type: 'n8n-nodes-base.freshservice';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<FreshserviceV1LocationUpdateParams>;
};