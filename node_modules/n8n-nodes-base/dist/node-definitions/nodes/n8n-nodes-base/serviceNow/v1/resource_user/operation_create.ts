/**
 * ServiceNow Node - Version 1
 * Discriminator: resource=user, operation=create
 */


interface Credentials {
  serviceNowOAuth2Api: CredentialReference;
  serviceNowBasicApi: CredentialReference;
}

export type ServiceNowV1UserCreateParams = {
  resource: 'user';
  operation: 'create';
/**
 * Authentication method to use
 * @default oAuth2
 */
    authentication?: 'basicAuth' | 'oAuth2' | Expression<string>;
/**
 * Short description of the user
 */
    short_description?: string | Expression<string> | PlaceholderValue;
/**
 * Additional Fields
 * @default {}
 */
    additionalFields?: {
    /** Whether to activate the user
     * @default false
     */
    active?: boolean | Expression<boolean>;
    /** The Building address
     */
    building?: string | Expression<string> | PlaceholderValue;
    /** City of the user
     */
    city?: string | Expression<string> | PlaceholderValue;
    /** The name of the company for the user
     */
    company?: string | Expression<string> | PlaceholderValue;
    /** Country of the user
     */
    country?: string | Expression<string> | PlaceholderValue;
    /** Department of the user
     */
    department?: string | Expression<string> | PlaceholderValue;
    /** The email address associated with the user
     */
    email?: string | Expression<string> | PlaceholderValue;
    /** The first name of the user
     */
    first_name?: string | Expression<string> | PlaceholderValue;
    /** The gender of the user
     */
    gender?: string | Expression<string> | PlaceholderValue;
    /** Home phone of the user
     */
    home_phone?: string | Expression<string> | PlaceholderValue;
    /** The last name of the user
     */
    last_name?: string | Expression<string> | PlaceholderValue;
    /** Location of the user
     */
    location?: string | Expression<string> | PlaceholderValue;
    /** Manager of the user
     */
    manager?: string | Expression<string> | PlaceholderValue;
    /** The middle name of the user
     */
    middle_name?: string | Expression<string> | PlaceholderValue;
    /** Mobile phone number of the user
     */
    mobile_phone?: string | Expression<string> | PlaceholderValue;
    /** The user's password
     */
    user_password?: string | Expression<string> | PlaceholderValue;
    /** Whether to require a password reset when the user logs in
     * @default false
     */
    password_needs_reset?: boolean | Expression<boolean>;
    /** The main phone number of the user
     */
    phone?: string | Expression<string> | PlaceholderValue;
    /** Roles of the user. Choose from the list, or specify IDs using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
     * @default []
     */
    roles?: string[];
    /** Source
     */
    source?: string | Expression<string> | PlaceholderValue;
    /** State for the user
     */
    state?: string | Expression<string> | PlaceholderValue;
    /** Street information for the user separated by comma
     */
    street?: string | Expression<string> | PlaceholderValue;
    /** A username associated with the user (e.g. user_name.123)
     */
    user_name?: string | Expression<string> | PlaceholderValue;
    /** Zip code for the user
     */
    zip?: string | Expression<string> | PlaceholderValue;
  };
};

export type ServiceNowV1UserCreateNode = {
  type: 'n8n-nodes-base.serviceNow';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<ServiceNowV1UserCreateParams>;
};