/**
 * Splunk Node - Version 2
 * Discriminator: resource=user, operation=create
 */


interface Credentials {
  splunkApi: CredentialReference;
}

/** Create a search report from a search job */
export type SplunkV2UserCreateParams = {
  resource: 'user';
  operation: 'create';
/**
 * Login name of the user
 */
    name?: string | Expression<string> | PlaceholderValue;
/**
 * Comma-separated list of roles to assign to the user. Choose from the list, or specify IDs using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
 * @default ["user"]
 */
    roles?: string[];
/**
 * Password
 */
    password?: string | Expression<string> | PlaceholderValue;
/**
 * Additional Fields
 * @default {}
 */
    additionalFields?: {
    /** Email
     */
    email?: string | Expression<string> | PlaceholderValue;
    /** Full name of the user
     */
    realname?: string | Expression<string> | PlaceholderValue;
  };
};

export type SplunkV2UserCreateNode = {
  type: 'n8n-nodes-base.splunk';
  version: 2;
  credentials?: Credentials;
  config: NodeConfig<SplunkV2UserCreateParams>;
};