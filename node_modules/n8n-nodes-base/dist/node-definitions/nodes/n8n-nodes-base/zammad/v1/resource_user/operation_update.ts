/**
 * Zammad Node - Version 1
 * Discriminator: resource=user, operation=update
 */


interface Credentials {
  zammadBasicAuthApi: CredentialReference;
  zammadTokenAuthApi: CredentialReference;
}

/** Update a group */
export type ZammadV1UserUpdateParams = {
  resource: 'user';
  operation: 'update';
  authentication?: 'basicAuth' | 'tokenAuth' | Expression<string>;
/**
 * User to update. Specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
 */
    id?: string | Expression<string> | PlaceholderValue;
/**
 * Update Fields
 * @default {}
 */
    updateFields?: {
    /** Active
     * @default true
     */
    active?: boolean | Expression<boolean>;
    /** Address
     * @default {}
     */
    addressUi?: {
        /** Address Details
     */
    addressDetails?: {
      /** City
       */
      city?: string | Expression<string> | PlaceholderValue;
      /** Country
       */
      country?: string | Expression<string> | PlaceholderValue;
      /** Street & Number
       */
      address?: string | Expression<string> | PlaceholderValue;
      /** Zip Code
       */
      zip?: string | Expression<string> | PlaceholderValue;
    };
  };
    /** Custom Fields
     * @default {}
     */
    customFieldsUi?: {
        /** Custom Field
     */
    customFieldPairs?: Array<{
      /** Name of the custom field to set. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
       */
      name?: string | Expression<string>;
      /** Value to set on the custom field
       */
      value?: string | Expression<string> | PlaceholderValue;
    }>;
  };
    /** Department
     */
    department?: string | Expression<string> | PlaceholderValue;
    /** Email Address
     */
    email?: string | Expression<string> | PlaceholderValue;
    /** Fax
     */
    fax?: string | Expression<string> | PlaceholderValue;
    /** First Name
     */
    firstname?: string | Expression<string> | PlaceholderValue;
    /** Last Name
     */
    lastname?: string | Expression<string> | PlaceholderValue;
    /** Notes
     */
    note?: string | Expression<string> | PlaceholderValue;
    /** Name of the organization to assign to the user. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
     */
    organization?: string | Expression<string>;
    /** Phone (Landline)
     */
    phone?: string | Expression<string> | PlaceholderValue;
    /** Phone (Mobile)
     */
    mobile?: string | Expression<string> | PlaceholderValue;
    /** Whether the user has been verified
     * @default false
     */
    verified?: boolean | Expression<boolean>;
    /** Whether the user is a Very Important Person
     * @default false
     */
    vip?: boolean | Expression<boolean>;
    /** Website
     */
    web?: string | Expression<string> | PlaceholderValue;
  };
};

export type ZammadV1UserUpdateNode = {
  type: 'n8n-nodes-base.zammad';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<ZammadV1UserUpdateParams>;
};