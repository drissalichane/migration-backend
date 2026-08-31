/**
 * Spotify Node - Version 1
 * Discriminator: resource=album, operation=getTracks
 */


interface Credentials {
  spotifyOAuth2Api: CredentialReference;
}

/** Get an album's tracks by URI or ID */
export type SpotifyV1AlbumGetTracksParams = {
  resource: 'album';
  operation: 'getTracks';
/**
 * The album's Spotify URI or ID
 * @displayOptions.hide { operation: ["search"] }
 */
    id?: string | Expression<string> | PlaceholderValue;
/**
 * Whether to return all results or only up to a given limit
 * @default false
 */
    returnAll?: boolean | Expression<boolean>;
/**
 * Max number of results to return
 * @displayOptions.show { returnAll: [false] }
 * @default 50
 */
    limit?: number | Expression<number>;
};

export type SpotifyV1AlbumGetTracksNode = {
  type: 'n8n-nodes-base.spotify';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<SpotifyV1AlbumGetTracksParams>;
};