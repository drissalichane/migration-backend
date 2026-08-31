/**
 * Discourse Node - Version 1
 * Discriminator: resource=user, operation=create
 */


interface Credentials {
  discourseApi: CredentialReference;
}

/** Create a category */
export type DiscourseV1UserCreateParams = {
  resource: 'user';
  operation: 'create';
/**
 * Name of the user to create
 */
    name?: string | Expression<string> | PlaceholderValue;
/**
 * Email of the user to create
 */
    email?: string | Expression<string> | PlaceholderValue;
/**
 * The username of the user to create
 */
    username?: string | Expression<string> | PlaceholderValue;
/**
 * The password of the user to create
 */
    password?: string | Expression<string> | PlaceholderValue;
/**
 * Additional Fields
 * @default {}
 */
    additionalFields?: {
    /** Active
     * @default false
     */
    active?: boolean | Expression<boolean>;
    /** Approved
     * @default false
     */
    approved?: boolean | Expression<boolean>;
  };
};

export type DiscourseV1UserCreateNode = {
  type: 'n8n-nodes-base.discourse';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<DiscourseV1UserCreateParams>;
};