/**
 * Iterable Node - Version 1
 * Discriminator: resource=user, operation=delete
 */


interface Credentials {
  iterableApi: CredentialReference;
}

/** Delete a user */
export type IterableV1UserDeleteParams = {
  resource: 'user';
  operation: 'delete';
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

export type IterableV1UserDeleteNode = {
  type: 'n8n-nodes-base.iterable';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<IterableV1UserDeleteParams>;
};