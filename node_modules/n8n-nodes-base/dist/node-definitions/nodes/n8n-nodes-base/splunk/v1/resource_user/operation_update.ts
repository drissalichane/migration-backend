/**
 * Splunk Node - Version 1
 * Discriminator: resource=user, operation=update
 */


interface Credentials {
  splunkApi: CredentialReference;
}

/** Update an user */
export type SplunkV1UserUpdateParams = {
  resource: 'user';
  operation: 'update';
/**
 * ID of the user to update
 */
    userId?: string | Expression<string> | PlaceholderValue;
/**
 * Update Fields
 * @default {}
 */
    updateFields?: {
    /** Email
     */
    email?: string | Expression<string> | PlaceholderValue;
    /** Full name of the user
     */
    realname?: string | Expression<string> | PlaceholderValue;
    /** Password
     */
    password?: string | Expression<string> | PlaceholderValue;
    /** Comma-separated list of roles to assign to the user. Choose from the list, or specify IDs using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
     * @default []
     */
    roles?: string[];
  };
};

export type SplunkV1UserUpdateNode = {
  type: 'n8n-nodes-base.splunk';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<SplunkV1UserUpdateParams>;
};