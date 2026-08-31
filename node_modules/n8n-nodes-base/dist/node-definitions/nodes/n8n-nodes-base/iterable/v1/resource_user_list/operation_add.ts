/**
 * Iterable Node - Version 1
 * Discriminator: resource=userList, operation=add
 */


interface Credentials {
  iterableApi: CredentialReference;
}

/** Add user to list */
export type IterableV1UserListAddParams = {
  resource: 'userList';
  operation: 'add';
/**
 * Identifier to be used. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
 */
    listId?: string | Expression<string>;
/**
 * Identifier to be used
 */
    identifier?: 'email' | 'userId' | Expression<string>;
/**
 * Value
 */
    value?: string | Expression<string> | PlaceholderValue;
};

export type IterableV1UserListAddNode = {
  type: 'n8n-nodes-base.iterable';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<IterableV1UserListAddParams>;
};