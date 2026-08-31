/**
 * Copper Node - Version 1
 * Discriminator: resource=lead, operation=update
 */


interface Credentials {
  copperApi: CredentialReference;
}

export type CopperV1LeadUpdateParams = {
  resource: 'lead';
  operation: 'update';
/**
 * ID of the lead to update
 */
    leadId?: string | Expression<string> | PlaceholderValue;
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
    /** Description to set for the lead
     */
    details?: string | Expression<string> | PlaceholderValue;
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
    /** Name to set for the lead
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

export type CopperV1LeadUpdateNode = {
  type: 'n8n-nodes-base.copper';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<CopperV1LeadUpdateParams>;
};