/**
 * Raindrop Node - Version 1
 * Discriminator: resource=bookmark, operation=get
 */


interface Credentials {
  raindropOAuth2Api: CredentialReference;
}

export type RaindropV1BookmarkGetParams = {
  resource: 'bookmark';
  operation: 'get';
/**
 * The ID of the bookmark to retrieve
 */
    bookmarkId?: string | Expression<string> | PlaceholderValue;
};

export type RaindropV1BookmarkGetNode = {
  type: 'n8n-nodes-base.raindrop';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<RaindropV1BookmarkGetParams>;
};