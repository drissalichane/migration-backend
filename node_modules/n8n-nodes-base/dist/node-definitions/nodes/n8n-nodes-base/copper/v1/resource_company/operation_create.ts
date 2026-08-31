/**
 * Copper Node - Version 1
 * Discriminator: resource=company, operation=create
 */


interface Credentials {
  copperApi: CredentialReference;
}

export type CopperV1CompanyCreateParams = {
  resource: 'company';
  operation: 'create';
/**
 * Name of the company to create
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
    /** Description of the company to create
     */
    details?: string | Expression<string> | PlaceholderValue;
    /** Email Domain
     */
    email_domain?: string | Expression<string> | PlaceholderValue;
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

export type CopperV1CompanyCreateNode = {
  type: 'n8n-nodes-base.copper';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<CopperV1CompanyCreateParams>;
};