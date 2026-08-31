/**
 * Okta Node - Version 1
 * Discriminator: resource=user, operation=create
 */


interface Credentials {
  oktaApi: CredentialReference;
}

/** Create a new user */
export type OktaV1UserCreateParams = {
  resource: 'user';
  operation: 'create';
/**
 * First Name
 */
    firstName?: string | Expression<string> | PlaceholderValue;
/**
 * Last Name
 */
    lastName?: string | Expression<string> | PlaceholderValue;
/**
 * Username
 * @hint Unique identifier for the user, must be an email
 */
    login?: string | Expression<string> | PlaceholderValue;
/**
 * Email
 */
    email?: string | Expression<string> | PlaceholderValue;
/**
 * Whether to activate the user and allow access to all assigned applications
 * @default true
 */
    activate?: boolean | Expression<boolean>;
/**
 * Fields
 * @default {}
 */
    getCreateFields?: {
    /** City
     */
    city?: string | Expression<string> | PlaceholderValue;
    /** Cost Center
     */
    costCenter?: string | Expression<string> | PlaceholderValue;
    /** Country Code
     */
    countryCode?: string | Expression<string> | PlaceholderValue;
    /** Department
     */
    department?: string | Expression<string> | PlaceholderValue;
    /** Display Name
     */
    displayName?: string | Expression<string> | PlaceholderValue;
    /** Division
     */
    division?: string | Expression<string> | PlaceholderValue;
    /** Employee Number
     */
    employeeNumber?: string | Expression<string> | PlaceholderValue;
    /** Honorific Prefix
     */
    honorificPrefix?: string | Expression<string> | PlaceholderValue;
    /** Honorific Suffix
     */
    honorificSuffix?: string | Expression<string> | PlaceholderValue;
    /** Locale
     */
    locale?: string | Expression<string> | PlaceholderValue;
    /** Manager
     */
    manager?: string | Expression<string> | PlaceholderValue;
    /** ManagerId
     */
    managerId?: string | Expression<string> | PlaceholderValue;
    /** Middle Name
     */
    middleName?: string | Expression<string> | PlaceholderValue;
    /** Mobile Phone
     */
    mobilePhone?: string | Expression<string> | PlaceholderValue;
    /** Nick Name
     */
    nickName?: string | Expression<string> | PlaceholderValue;
    /** Password
     */
    password?: string | Expression<string> | PlaceholderValue;
    /** Organization
     */
    organization?: string | Expression<string> | PlaceholderValue;
    /** Postal Address
     */
    postalAddress?: string | Expression<string> | PlaceholderValue;
    /** Preferred Language
     */
    preferredLanguage?: string | Expression<string> | PlaceholderValue;
    /** Primary Phone
     */
    primaryPhone?: string | Expression<string> | PlaceholderValue;
    /** Profile Url
     */
    profileUrl?: string | Expression<string> | PlaceholderValue;
    /** Recovery Question Answer
     */
    recoveryQuestionAnswer?: string | Expression<string> | PlaceholderValue;
    /** Recovery Question Question
     */
    recoveryQuestionQuestion?: string | Expression<string> | PlaceholderValue;
    /** Second Email
     */
    secondEmail?: string | Expression<string> | PlaceholderValue;
    /** State
     */
    state?: string | Expression<string> | PlaceholderValue;
    /** Street Address
     */
    streetAddress?: string | Expression<string> | PlaceholderValue;
    /** Timezone
     */
    timezone?: string | Expression<string> | PlaceholderValue;
    /** Title
     */
    title?: string | Expression<string> | PlaceholderValue;
    /** User Type
     */
    userType?: string | Expression<string> | PlaceholderValue;
    /** Zip Code
     */
    zipCode?: string | Expression<string> | PlaceholderValue;
  };
  requestOptions?: {
    /** Batching
     * @default {"batch":{}}
     */
    batching?: {
        /** Batching
     */
    batch?: {
      /** Input will be split in batches to throttle requests. -1 for disabled. 0 will be treated as 1.
       * @default 50
       */
      batchSize?: number | Expression<number>;
      /** Time (in milliseconds) between each batch of requests. 0 for disabled.
       * @default 1000
       */
      batchInterval?: number | Expression<number>;
    };
  };
    /** Whether to accept the response even if SSL certificate validation is not possible
     * @default false
     */
    allowUnauthorizedCerts?: boolean;
    /** HTTP proxy to use. If authentication is required it can be defined as follow: http://username:password@myproxy:3128
     */
    proxy?: string | Expression<string> | PlaceholderValue;
    /** Time in ms to wait for the server to send response headers (and start the response body) before aborting the request
     * @default 10000
     */
    timeout?: number | Expression<number>;
  };
};

export type OktaV1UserCreateNode = {
  type: 'n8n-nodes-base.okta';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<OktaV1UserCreateParams>;
};