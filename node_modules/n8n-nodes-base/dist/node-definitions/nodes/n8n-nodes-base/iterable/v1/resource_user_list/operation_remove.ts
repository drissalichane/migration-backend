/**
 * Iterable Node - Version 1
 * Discriminator: resource=userList, operation=remove
 */


interface Credentials {
  iterableApi: CredentialReference;
}

/** Remove a user from a list */
export type IterableV1UserListRemoveParams = {
  resource: 'userList';
  operation: 'remove';
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
/**
 * Additional Fields
 * @default {}
 */
    additionalFields?: {
    /** Attribute unsubscribe to a campaign
     * @default 0
     */
    campaignId?: number | Expression<number>;
    /** Whether to unsubscribe email from list's associated channel - essentially a global unsubscribe
     * @default false
     */
    channelUnsubscribe?: boolean | Expression<boolean>;
  };
};

export type IterableV1UserListRemoveNode = {
  type: 'n8n-nodes-base.iterable';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<IterableV1UserListRemoveParams>;
};