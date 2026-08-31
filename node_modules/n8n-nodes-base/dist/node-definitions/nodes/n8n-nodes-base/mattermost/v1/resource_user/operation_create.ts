/**
 * Mattermost Node - Version 1
 * Discriminator: resource=user, operation=create
 */


interface Credentials {
  mattermostApi: CredentialReference;
}

/** Create a new channel */
export type MattermostV1UserCreateParams = {
  resource: 'user';
  operation: 'create';
/**
 * Username
 */
    username?: string | Expression<string> | PlaceholderValue;
/**
 * Auth Service
 */
    authService?: 'email' | 'gitlab' | 'google' | 'ldap' | 'office365' | 'saml' | Expression<string>;
/**
 * Auth Data
 * @displayOptions.hide { authService: ["email"] }
 */
    authData?: string | Expression<string> | PlaceholderValue;
/**
 * Email
 * @displayOptions.show { authService: ["email"] }
 */
    email?: string | Expression<string> | PlaceholderValue;
/**
 * The password used for email authentication
 * @displayOptions.show { authService: ["email"] }
 */
    password?: string | Expression<string> | PlaceholderValue;
/**
 * Additional Fields
 * @default {}
 */
    additionalFields?: {
    /** First Name
     */
    first_name?: string | Expression<string> | PlaceholderValue;
    /** Last Name
     */
    last_name?: string | Expression<string> | PlaceholderValue;
    /** Locale
     */
    locale?: string | Expression<string> | PlaceholderValue;
    /** Nickname
     */
    nickname?: string | Expression<string> | PlaceholderValue;
    /** Notification Settings
     * @default {}
     */
    notificationUi?: {
        /** Notify
     */
    notificationValues?: {
      /** Whether to enable channel-wide notifications (@channel, @all, etc.), "false" to disable. Defaults to "true".
       * @default true
       */
      channel?: boolean | Expression<boolean>;
      /** Desktop
       * @default all
       */
      desktop?: 'all' | 'mention' | 'none' | Expression<string>;
      /** Whether to enable sound on desktop notifications, "false" to disable. Defaults to "true".
       * @default true
       */
      desktop_sound?: boolean | Expression<boolean>;
      /** Whether to enable email notifications, "false" to disable. Defaults to "false".
       * @default false
       */
      email?: boolean | Expression<boolean>;
      /** Whether to enable mentions for first name. Defaults to "true" if a first name is set, "false" otherwise.
       * @default false
       */
      first_name?: boolean | Expression<boolean>;
      /** A comma-separated list of words to count as mentions. Defaults to username and @username.
       */
      mention_keys?: string | Expression<string> | PlaceholderValue;
      /** Push
       * @default mention
       */
      push?: 'all' | 'mention' | 'none' | Expression<string>;
    };
  };
  };
};

export type MattermostV1UserCreateNode = {
  type: 'n8n-nodes-base.mattermost';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<MattermostV1UserCreateParams>;
};