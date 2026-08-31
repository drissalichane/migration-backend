/**
 * SyncroMSP Node - Version 1
 * Discriminator: resource=contact, operation=create
 */


interface Credentials {
  syncroMspApi: CredentialReference;
}

/** Create new customer */
export type SyncroMspV1ContactCreateParams = {
  resource: 'contact';
  operation: 'create';
/**
 * Customer ID
 */
    customerId?: string | Expression<string> | PlaceholderValue;
/**
 * Email
 */
    email?: string | Expression<string> | PlaceholderValue;
/**
 * Additional Fields
 * @default {}
 */
    additionalFields?: {
    /** Address
     * @default {}
     */
    address?: {
        /** Address Fields
     */
    addressFields?: {
      /** Line 1
       */
      address?: string | Expression<string> | PlaceholderValue;
      /** Line 2
       */
      address2?: string | Expression<string> | PlaceholderValue;
      /** City
       */
      city?: string | Expression<string> | PlaceholderValue;
      /** State
       */
      state?: string | Expression<string> | PlaceholderValue;
      /** ZIP
       */
      zip?: string | Expression<string> | PlaceholderValue;
    };
  };
    /** Name
     */
    name?: string | Expression<string> | PlaceholderValue;
    /** Notes
     */
    notes?: string | Expression<string> | PlaceholderValue;
    /** Phone
     */
    phone?: string | Expression<string> | PlaceholderValue;
  };
};

export type SyncroMspV1ContactCreateNode = {
  type: 'n8n-nodes-base.syncroMsp';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<SyncroMspV1ContactCreateParams>;
};