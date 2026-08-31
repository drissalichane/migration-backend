/**
 * Google Workspace Admin Node - Version 1
 * Discriminator: resource=user, operation=update
 */


interface Credentials {
  gSuiteAdminOAuth2Api: CredentialReference;
}

/** Update a ChromeOS device */
export type GSuiteAdminV1UserUpdateParams = {
  resource: 'user';
  operation: 'update';
/**
 * Select the user to perform the operation on
 * @default {"mode":"list","value":""}
 */
    userId?: { __rl: true; mode: 'list' | 'userEmail' | 'userId'; value: string; cachedResultName?: string };
/**
 * Update Fields
 * @default {}
 */
    updateFields?: {
    /** Whether user is archived
     * @default false
     */
    archived?: boolean | Expression<boolean>;
    /** Whether to set the user as suspended. If set to OFF, the user will be reactivated. If not added, the status will remain unchanged.
     * @default false
     */
    suspendUi?: boolean | Expression<boolean>;
    /** Whether the user is forced to change their password at next login
     * @default false
     */
    changePasswordAtNextLogin?: boolean | Expression<boolean>;
    /** First Name
     */
    firstName?: string | Expression<string> | PlaceholderValue;
    /** Last Name
     */
    lastName?: string | Expression<string> | PlaceholderValue;
    /** Stores the password for the user account. A minimum of 8 characters is required. The maximum length is 100 characters.
     */
    password?: string | Expression<string> | PlaceholderValue;
    /** Phones
     * @default {}
     */
    phoneUi?: {
        /** Phone
     */
    phoneValues?: Array<{
      /** The type of phone number
       * @default work
       */
      type?: 'assistant' | 'callback' | 'car' | 'company_main' | 'custom' | 'grand_central' | 'home' | 'home_fax' | 'isdn' | 'main' | 'mobile' | 'other' | 'other_fax' | 'pager' | 'radio' | 'telex' | 'tty_tdd' | 'work' | 'work_fax' | 'work_mobile' | 'work_pager' | Expression<string>;
      /** Phone Number
       */
      value?: string | Expression<string> | PlaceholderValue;
      /** Whether this is the user's primary phone number. A user may only have one primary phone number.
       * @default false
       */
      primary?: boolean | Expression<boolean>;
    }>;
  };
    /** The user's primary email address. This property is required in a request to create a user account. The primaryEmail must be unique and cannot be an alias of another user.
     */
    primaryEmail?: string | Expression<string> | PlaceholderValue;
    /** Secondary Emails
     * @default {}
     */
    emailUi?: {
        /** Email
     */
    emailValues?: Array<{
      /** The type of the email account
       * @default work
       */
      type?: 'home' | 'work' | 'other' | Expression<string>;
      /** Email
       */
      address?: string | Expression<string> | PlaceholderValue;
    }>;
  };
    /** Select the roles you want to assign to the user
     * @default []
     */
    roles?: Array<'directorySyncAdmin' | 'groupsAdmin' | 'groupsEditor' | 'groupsReader' | 'helpDeskAdmin' | 'inventoryReportingAdmin' | 'mobileAdmin' | 'servicesAdmin' | 'storageAdmin' | 'superAdmin' | 'userManagement'>;
    /** Allows editing and adding of custom fields
     * @default {}
     */
    customFields?: {
        /** Field
     */
    fieldValues?: Array<{
      /** Select the schema to use for custom fields. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
       */
      schemaName?: string | Expression<string>;
      /** Enter a field name from the selected schema
       */
      fieldName?: string | Expression<string> | PlaceholderValue;
      /** Provide a value for the selected field
       */
      value?: string | Expression<string> | PlaceholderValue;
    }>;
  };
  };
};

export type GSuiteAdminV1UserUpdateNode = {
  type: 'n8n-nodes-base.gSuiteAdmin';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<GSuiteAdminV1UserUpdateParams>;
};