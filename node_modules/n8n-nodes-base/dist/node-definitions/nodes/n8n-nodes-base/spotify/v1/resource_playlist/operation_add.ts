/**
 * Spotify Node - Version 1
 * Discriminator: resource=playlist, operation=add
 */


interface Credentials {
  spotifyOAuth2Api: CredentialReference;
}

/** Add tracks to a playlist by track and playlist URI or ID */
export type SpotifyV1PlaylistAddParams = {
  resource: 'playlist';
  operation: 'add';
/**
 * The playlist's Spotify URI or its ID
 */
    id?: string | Expression<string> | PlaceholderValue;
/**
 * The track's Spotify URI or its ID. The track to add/delete from the playlist.
 */
    trackID?: string | Expression<string> | PlaceholderValue;
/**
 * Additional Fields
 * @default {}
 */
    additionalFields?: {
    /** The new track's position in the playlist
     * @default 0
     */
    position?: number | Expression<number>;
  };
};

export type SpotifyV1PlaylistAddOutput = {
  snapshot_id?: string;
};

export type SpotifyV1PlaylistAddNode = {
  type: 'n8n-nodes-base.spotify';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<SpotifyV1PlaylistAddParams>;
  output?: Items<SpotifyV1PlaylistAddOutput>;
};