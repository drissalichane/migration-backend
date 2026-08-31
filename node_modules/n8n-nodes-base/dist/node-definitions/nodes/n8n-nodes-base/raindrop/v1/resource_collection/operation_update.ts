/**
 * Raindrop Node - Version 1
 * Discriminator: resource=collection, operation=update
 */


interface Credentials {
  raindropOAuth2Api: CredentialReference;
}

export type RaindropV1CollectionUpdateParams = {
  resource: 'collection';
  operation: 'update';
/**
 * The ID of the collection to update
 */
    collectionId?: string | Expression<string> | PlaceholderValue;
/**
 * Update Fields
 * @default {}
 */
    updateFields?: {
    /** Name of the binary property containing the data for the image to upload as a cover
     * @default data
     */
    cover?: string | Expression<string> | PlaceholderValue;
    /** Whether the collection will be accessible without authentication
     * @default false
     */
    public?: boolean | Expression<boolean>;
    /** ID of this collection's parent collection, if it is a child collection
     */
    parentId?: string | Expression<string> | PlaceholderValue;
    /** Descending sort order of this collection. The number is the position of the collection among all the collections with the same parent ID.
     * @default 1
     */
    sort?: number | Expression<number>;
    /** Title of the collection to update
     */
    title?: string | Expression<string> | PlaceholderValue;
    /** View style of this collection
     * @default list
     */
    view?: 'list' | 'simple' | 'grid' | 'Masonry' | Expression<string>;
  };
};

export type RaindropV1CollectionUpdateNode = {
  type: 'n8n-nodes-base.raindrop';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<RaindropV1CollectionUpdateParams>;
};