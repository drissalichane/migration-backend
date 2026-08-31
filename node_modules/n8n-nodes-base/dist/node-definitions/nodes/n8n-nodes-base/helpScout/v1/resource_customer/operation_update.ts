/**
 * Help Scout Node - Version 1
 * Discriminator: resource=customer, operation=update
 */


interface Credentials {
  helpScoutOAuth2Api: CredentialReference;
}

/** Update a customer */
export type HelpScoutV1CustomerUpdateParams = {
  resource: 'customer';
  operation: 'update';
/**
 * Customer ID
 */
    customerId?: string | Expression<string> | PlaceholderValue;
/**
 * Update Fields
 * @default {}
 */
    updateFields?: {
    /** Customer’s age
     * @default 1
     */
    age?: number | Expression<number>;
    /** First name of the customer. When defined it must be between 1 and 40 characters.
     */
    firstName?: string | Expression<string> | PlaceholderValue;
    /** Gender of this customer
     */
    gender?: 'female' | 'male' | 'unknown' | Expression<string>;
    /** Job title. Max length 60 characters.
     */
    jobTitle?: string | Expression<string> | PlaceholderValue;
    /** Last name of the customer
     */
    lastName?: string | Expression<string> | PlaceholderValue;
    /** Location of the customer
     */
    location?: string | Expression<string> | PlaceholderValue;
    /** Notes
     */
    background?: string | Expression<string> | PlaceholderValue;
    /** Organization
     */
    organization?: string | Expression<string> | PlaceholderValue;
    /** URL of the customer’s photo
     */
    photoUrl?: string | Expression<string> | PlaceholderValue;
  };
};

export type HelpScoutV1CustomerUpdateNode = {
  type: 'n8n-nodes-base.helpScout';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<HelpScoutV1CustomerUpdateParams>;
};