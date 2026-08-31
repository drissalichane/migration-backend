/**
 * Discourse Node - Version 1
 * Discriminator: resource=user, operation=get
 */


interface Credentials {
  discourseApi: CredentialReference;
}

/** Get a group */
export type DiscourseV1UserGetParams = {
  resource: 'user';
  operation: 'get';
/**
 * What to search by
 * @default username
 */
    by?: 'username' | 'externalId' | Expression<string>;
/**
 * The username of the user to return
 * @displayOptions.show { by: ["username"] }
 */
    username?: string | Expression<string> | PlaceholderValue;
/**
 * Discourse SSO external ID
 * @displayOptions.show { by: ["externalId"] }
 */
    externalId?: string | Expression<string> | PlaceholderValue;
};

export type DiscourseV1UserGetNode = {
  type: 'n8n-nodes-base.discourse';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<DiscourseV1UserGetParams>;
};