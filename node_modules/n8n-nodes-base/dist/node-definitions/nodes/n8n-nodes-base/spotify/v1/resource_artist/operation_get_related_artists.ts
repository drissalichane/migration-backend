/**
 * Spotify Node - Version 1
 * Discriminator: resource=artist, operation=getRelatedArtists
 */


interface Credentials {
  spotifyOAuth2Api: CredentialReference;
}

/** Get an artist's related artists by URI or ID */
export type SpotifyV1ArtistGetRelatedArtistsParams = {
  resource: 'artist';
  operation: 'getRelatedArtists';
/**
 * The artist's Spotify URI or ID
 * @displayOptions.hide { operation: ["search"] }
 */
    id?: string | Expression<string> | PlaceholderValue;
};

export type SpotifyV1ArtistGetRelatedArtistsNode = {
  type: 'n8n-nodes-base.spotify';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<SpotifyV1ArtistGetRelatedArtistsParams>;
};