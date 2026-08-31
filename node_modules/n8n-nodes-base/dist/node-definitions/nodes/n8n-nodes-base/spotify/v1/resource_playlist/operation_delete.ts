/**
 * Spotify Node - Version 1
 * Discriminator: resource=playlist, operation=delete
 */


interface Credentials {
  spotifyOAuth2Api: CredentialReference;
}

/** Remove tracks from a playlist by track and playlist URI or ID */
export type SpotifyV1PlaylistDeleteParams = {
  resource: 'playlist';
  operation: 'delete';
/**
 * The playlist's Spotify URI or its ID
 */
    id?: string | Expression<string> | PlaceholderValue;
/**
 * The track's Spotify URI or its ID. The track to add/delete from the playlist.
 */
    trackID?: string | Expression<string> | PlaceholderValue;
};

export type SpotifyV1PlaylistDeleteNode = {
  type: 'n8n-nodes-base.spotify';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<SpotifyV1PlaylistDeleteParams>;
};