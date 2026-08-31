/**
 * Raindrop Node - Version 1
 * Discriminator: resource=bookmark, operation=delete
 */


interface Credentials {
  raindropOAuth2Api: CredentialReference;
}

export type RaindropV1BookmarkDeleteParams = {
  resource: 'bookmark';
  operation: 'delete';
/**
 * The ID of the bookmark to delete
 */
    bookmarkId?: string | Expression<string> | PlaceholderValue;
};

export type RaindropV1BookmarkDeleteNode = {
  type: 'n8n-nodes-base.raindrop';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<RaindropV1BookmarkDeleteParams>;
};