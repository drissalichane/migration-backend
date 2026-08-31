/**
 * Bitwarden Node - Version 1
 * Discriminator: resource=collection, operation=update
 */


interface Credentials {
  bitwardenApi: CredentialReference;
}

export type BitwardenV1CollectionUpdateParams = {
  resource: 'collection';
  operation: 'update';
/**
 * The identifier of the collection
 */
    collectionId?: string | Expression<string> | PlaceholderValue;
/**
 * Update Fields
 * @default {}
 */
    updateFields?: {
    /** The group to assign this collection to. Choose from the list, or specify IDs using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
     * @default []
     */
    groups?: string[];
    /** The external identifier to set to this collection
     */
    externalId?: string | Expression<string> | PlaceholderValue;
  };
};

export type BitwardenV1CollectionUpdateNode = {
  type: 'n8n-nodes-base.bitwarden';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<BitwardenV1CollectionUpdateParams>;
};