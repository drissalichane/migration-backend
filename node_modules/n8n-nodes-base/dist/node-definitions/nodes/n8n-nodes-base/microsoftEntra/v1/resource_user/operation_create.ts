/**
 * Microsoft Entra ID Node - Version 1
 * Discriminator: resource=user, operation=create
 */


interface Credentials {
  microsoftEntraOAuth2Api: CredentialReference;
}

/** Create a group */
export type MicrosoftEntraV1UserCreateParams = {
  resource: 'user';
  operation: 'create';
/**
 * Whether the account is enabled
 * @default true
 */
    accountEnabled?: boolean | Expression<boolean>;
/**
 * The name to display in the address book for the user
 */
    displayName?: string | Expression<string> | PlaceholderValue;
/**
 * The user principal name (UPN)
 */
    userPrincipalName?: string | Expression<string> | PlaceholderValue;
/**
 * The mail alias for the user
 */
    mailNickname?: string | Expression<string> | PlaceholderValue;
/**
 * The password for the user
 */
    password?: string | Expression<string> | PlaceholderValue;
/**
 * Additional Fields
 * @default {}
 */
    additionalFields?: {
    /** A freeform text entry field for the user to describe themselves
     */
    aboutMe?: string | Expression<string> | PlaceholderValue;
    /** Sets the age group of the user
     * @default Adult
     */
    ageGroup?: 'Adult' | 'Minor' | 'NotAdult' | Expression<string>;
    /** The birthday of the user
     */
    birthday?: string | Expression<string>;
    /** The telephone number for the user
     */
    businessPhones?: string | Expression<string> | PlaceholderValue;
    /** The city in which the user is located
     */
    city?: string | Expression<string> | PlaceholderValue;
    /** The name of the company associated with the user
     */
    companyName?: string | Expression<string> | PlaceholderValue;
    /** Specifies if consent is provided for minors
     * @default Denied
     */
    consentProvidedForMinor?: 'Denied' | 'Granted' | 'NotRequired' | Expression<string>;
    /** The country/region of the user
     */
    country?: string | Expression<string> | PlaceholderValue;
    /** The department name where the user works
     */
    department?: string | Expression<string> | PlaceholderValue;
    /** Employee identifier assigned by the organization
     */
    employeeId?: string | Expression<string> | PlaceholderValue;
    /** Defines enterprise worker type
     */
    employeeType?: string | Expression<string> | PlaceholderValue;
    /** The hire date of the user
     */
    employeeHireDate?: string | Expression<string>;
    /** The date and time when the user left or will leave the organization
     */
    employeeLeaveDateTime?: string | Expression<string>;
    /** Represents organization data (for example, division and costCenter) associated with a user
     * @default {}
     */
    employeeOrgData?: {
        /** Employee Organization Data
     */
    employeeOrgValues?: {
      /** The cost center associated with the user
       */
      costCenter?: string | Expression<string> | PlaceholderValue;
      /** The name of the division in which the user works
       */
      division?: string | Expression<string> | PlaceholderValue;
    };
  };
    /** The given name (first name) of the user
     */
    givenName?: string | Expression<string> | PlaceholderValue;
    /** Whether the user must change their password on the next sign-in
     * @default forceChangePasswordNextSignIn
     */
    forceChangePassword?: 'forceChangePasswordNextSignIn' | 'forceChangePasswordNextSignInWithMfa' | Expression<string>;
    /** A list for the user to describe their interests
     * @default []
     */
    interests?: string | Expression<string> | PlaceholderValue;
    /** The user's job title
     */
    jobTitle?: string | Expression<string> | PlaceholderValue;
    /** The user's last name (family name)
     */
    surname?: string | Expression<string> | PlaceholderValue;
    /** The SMTP address for the user
     */
    mail?: string | Expression<string> | PlaceholderValue;
    /** The primary cellular telephone number for the user
     */
    mobilePhone?: string | Expression<string> | PlaceholderValue;
    /** The URL for the user's personal site
     */
    mySite?: string | Expression<string> | PlaceholderValue;
    /** The office location for the user
     */
    officeLocation?: string | Expression<string> | PlaceholderValue;
    /** This property is used to associate an on-premises Active Directory user account to their Microsoft Entra user object
     */
    onPremisesImmutableId?: string | Expression<string> | PlaceholderValue;
    /** Additional email addresses for the user
     * @default []
     */
    otherMails?: string | Expression<string> | PlaceholderValue;
    /** Specifies password policies
     * @default []
     */
    passwordPolicies?: Array<'DisablePasswordExpiration' | 'DisableStrongPassword'>;
    /** A list of past projects the user has worked on
     * @default []
     */
    pastProjects?: string | Expression<string> | PlaceholderValue;
    /** The postal code for the user's address
     */
    postalCode?: string | Expression<string> | PlaceholderValue;
    /** User's preferred language in ISO 639-1 code
     */
    preferredLanguage?: string | Expression<string> | PlaceholderValue;
    /** A list of responsibilities the user has
     * @default []
     */
    responsibilities?: string | Expression<string> | PlaceholderValue;
    /** A list of schools the user attended
     * @default []
     */
    schools?: string | Expression<string> | PlaceholderValue;
    /** A list of skills the user possesses
     * @default []
     */
    skills?: string | Expression<string> | PlaceholderValue;
    /** The state or province of the user's address
     */
    state?: string | Expression<string> | PlaceholderValue;
    /** The street address of the user's place of business
     */
    streetAddress?: string | Expression<string> | PlaceholderValue;
    /** Two-letter country code where the user is located
     */
    usageLocation?: string | Expression<string> | PlaceholderValue;
    /** Classifies the user type
     * @default Guest
     */
    userType?: 'Guest' | 'Member' | Expression<string>;
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

export type MicrosoftEntraV1UserCreateOutput = {
  '@odata.context'?: string;
  businessPhones?: Array<string>;
  department?: string;
  displayName?: string;
  id?: string;
  preferredLanguage?: null;
  userPrincipalName?: string;
};

export type MicrosoftEntraV1UserCreateNode = {
  type: 'n8n-nodes-base.microsoftEntra';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<MicrosoftEntraV1UserCreateParams>;
  output?: Items<MicrosoftEntraV1UserCreateOutput>;
};