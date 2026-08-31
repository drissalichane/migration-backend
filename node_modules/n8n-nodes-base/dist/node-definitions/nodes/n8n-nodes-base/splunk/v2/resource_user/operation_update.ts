/**
 * Splunk Node - Version 2
 * Discriminator: resource=user, operation=update
 */


interface Credentials {
  splunkApi: CredentialReference;
}

/** Update an user */
export type SplunkV2UserUpdateParams = {
  resource: 'user';
  operation: 'update';
/**
 * User
 * @default {"mode":"list","value":""}
 */
    userId?: { __rl: true; mode: 'list' | 'id'; value: string; cachedResultName?: string };
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

export type SplunkV2UserUpdateNode = {
  type: 'n8n-nodes-base.splunk';
  version: 2;
  credentials?: Credentials;
  config: NodeConfig<SplunkV2UserUpdateParams>;
};