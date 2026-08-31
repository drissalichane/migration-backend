/**
 * Affinity Node - Version 1
 * Discriminator: resource=listEntry, operation=get
 */


interface Credentials {
  affinityApi: CredentialReference;
}

/** Get a list */
export type AffinityV1ListEntryGetParams = {
  resource: 'listEntry';
  operation: 'get';
/**
 * The unique ID of the list that contains the specified list_entry_id. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
 */
    listId?: string | Expression<string>;
/**
 * The unique ID of the list entry object to be retrieved
 */
    listEntryId?: string | Expression<string> | PlaceholderValue;
};

export type AffinityV1ListEntryGetNode = {
  type: 'n8n-nodes-base.affinity';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<AffinityV1ListEntryGetParams>;
};