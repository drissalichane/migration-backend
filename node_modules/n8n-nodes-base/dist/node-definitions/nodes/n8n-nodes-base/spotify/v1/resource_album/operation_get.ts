/**
 * Spotify Node - Version 1
 * Discriminator: resource=album, operation=get
 */


interface Credentials {
  spotifyOAuth2Api: CredentialReference;
}

/** Get an album by URI or ID */
export type SpotifyV1AlbumGetParams = {
  resource: 'album';
  operation: 'get';
/**
 * The album's Spotify URI or ID
 * @displayOptions.hide { operation: ["search"] }
 */
    id?: string | Expression<string> | PlaceholderValue;
};

export type SpotifyV1AlbumGetNode = {
  type: 'n8n-nodes-base.spotify';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<SpotifyV1AlbumGetParams>;
};