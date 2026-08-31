/**
 * Iterable Node - Version 1
 * Discriminator: resource=user, operation=get
 */


interface Credentials {
  iterableApi: CredentialReference;
}

/** Get a user */
export type IterableV1UserGetParams = {
  resource: 'user';
  operation: 'get';
/**
 * Identifier to be used
 * @default email
 */
    by?: 'email' | 'userId' | Expression<string>;
/**
 * Unique identifier for a particular user
 * @displayOptions.show { by: ["userId"] }
 */
    userId?: string | Expression<string> | PlaceholderValue;
/**
 * Email for a particular user
 * @displayOptions.show { by: ["email"] }
 */
    email?: string | Expression<string> | PlaceholderValue;
};

export type IterableV1UserGetNode = {
  type: 'n8n-nodes-base.iterable';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<IterableV1UserGetParams>;
};