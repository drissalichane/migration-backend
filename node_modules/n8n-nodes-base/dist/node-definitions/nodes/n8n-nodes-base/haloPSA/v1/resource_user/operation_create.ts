/**
 * HaloPSA Node - Version 1
 * Discriminator: resource=user, operation=create
 */


interface Credentials {
  haloPSAApi: CredentialReference;
}

/** Create a client */
export type HaloPSAV1UserCreateParams = {
  resource: 'user';
  operation: 'create';
/**
 * Enter user name
 */
    userName?: string | Expression<string> | PlaceholderValue;
/**
 * Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
 */
    siteId?: string | Expression<string>;
/**
 * Additional Fields
 * @default {}
 */
    additionalFields?: {
    /** Email
     */
    emailaddress?: string | Expression<string> | PlaceholderValue;
    /** Notes
     */
    notes?: string | Expression<string> | PlaceholderValue;
    /** Your new password must be at least 8 characters long and contain at least one letter, one number or symbol, one upper case character and one lower case character
     */
    password?: string | Expression<string> | PlaceholderValue;
    /** Surname
     */
    surname?: string | Expression<string> | PlaceholderValue;
    /** User Is Inactive
     * @default false
     */
    inactive?: boolean | Expression<boolean>;
  };
};

export type HaloPSAV1UserCreateNode = {
  type: 'n8n-nodes-base.haloPSA';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<HaloPSAV1UserCreateParams>;
};