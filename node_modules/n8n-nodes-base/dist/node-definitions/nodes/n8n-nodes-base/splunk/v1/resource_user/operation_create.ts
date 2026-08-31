/**
 * Splunk Node - Version 1
 * Discriminator: resource=user, operation=create
 */


interface Credentials {
  splunkApi: CredentialReference;
}

/** Create a search job */
export type SplunkV1UserCreateParams = {
  resource: 'user';
  operation: 'create';
/**
 * Login name of the user
 */
    name?: string | Expression<string> | PlaceholderValue;
/**
 * Comma-separated list of roles to assign to the user. Choose from the list, or specify IDs using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
 * @default []
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

export type SplunkV1UserCreateNode = {
  type: 'n8n-nodes-base.splunk';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<SplunkV1UserCreateParams>;
};