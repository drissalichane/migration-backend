/**
 * Copper Node - Version 1
 * Discriminator: resource=person, operation=update
 */


interface Credentials {
  copperApi: CredentialReference;
}

export type CopperV1PersonUpdateParams = {
  resource: 'person';
  operation: 'update';
/**
 * ID of the person to update
 */
    personId?: string | Expression<string> | PlaceholderValue;
/**
 * Update Fields
 * @default {}
 */
    updateFields?: {
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
    /** Description to set for the person
     */
    details?: string | Expression<string> | PlaceholderValue;
    /** Email Domain
     */
    email_domain?: string | Expression<string> | PlaceholderValue;
    /** Emails
     * @default {}
     */
    emails?: {
        /** Email Fields
     */
    emailFields?: Array<{
      /** Email
       */
      email?: string | Expression<string> | PlaceholderValue;
      /** Category
       */
      category?: string | Expression<string> | PlaceholderValue;
    }>;
  };
    /** Name to set for the person
     */
    name?: string | Expression<string> | PlaceholderValue;
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

export type CopperV1PersonUpdateNode = {
  type: 'n8n-nodes-base.copper';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<CopperV1PersonUpdateParams>;
};