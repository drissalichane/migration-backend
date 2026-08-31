/**
 * Copper Node - Version 1
 * Discriminator: resource=lead, operation=create
 */


interface Credentials {
  copperApi: CredentialReference;
}

export type CopperV1LeadCreateParams = {
  resource: 'lead';
  operation: 'create';
/**
 * Name of the lead to create
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
        /** Address Fields
     */
    addressFields?: {
      /** Street
       */
      street?: string | Expression<string> | PlaceholderValue;
      /** City
       */
      city?: string | Expression<string> | PlaceholderValue;
      /** State
       */
      state?: string | Expression<string> | PlaceholderValue;
      /** Postal Code
       */
      postal_code?: string | Expression<string> | PlaceholderValue;
      /** ISO 3166 alpha-2 country code
       */
      country?: string | Expression<string> | PlaceholderValue;
    };
  };
    /** Email
     * @default {}
     */
    email?: {
        /** Email Fields
     */
    emailFields?: {
      /** Email
       */
      email?: string | Expression<string> | PlaceholderValue;
      /** Category
       */
      category?: string | Expression<string> | PlaceholderValue;
    };
  };
    /** Phone Numbers
     * @default {}
     */
    phone_numbers?: {
        /** Phone Fields
     */
    phoneFields?: Array<{
      /** Number
       */
      number?: string | Expression<string> | PlaceholderValue;
      /** Category
       */
      category?: string | Expression<string> | PlaceholderValue;
    }>;
  };
  };
};

export type CopperV1LeadCreateNode = {
  type: 'n8n-nodes-base.copper';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<CopperV1LeadCreateParams>;
};