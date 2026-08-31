/**
 * HaloPSA Node - Version 1
 * Discriminator: resource=user, operation=update
 */


interface Credentials {
  haloPSAApi: CredentialReference;
}

/** Update a client */
export type HaloPSAV1UserUpdateParams = {
  resource: 'user';
  operation: 'update';
/**
 * User ID
 */
    userId?: string | Expression<string> | PlaceholderValue;
/**
 * Update Fields
 * @default {}
 */
    updateFields?: {
    /** Email
     */
    emailaddress?: string | Expression<string> | PlaceholderValue;
    /** Enter user name
     */
    name?: string | Expression<string> | PlaceholderValue;
    /** Notes
     */
    notes?: string | Expression<string> | PlaceholderValue;
    /** Your new password must be at least 8 characters long and contain at least one letter, one number or symbol, one upper case character and one lower case character
     */
    password?: string | Expression<string> | PlaceholderValue;
    /** Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
     */
    site_id?: string | Expression<string>;
    /** Surname
     */
    surname?: string | Expression<string> | PlaceholderValue;
    /** User Is Inactive
     * @default false
     */
    inactive?: boolean | Expression<boolean>;
  };
};

export type HaloPSAV1UserUpdateNode = {
  type: 'n8n-nodes-base.haloPSA';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<HaloPSAV1UserUpdateParams>;
};