/**
 * Spotify Node - Version 1
 * Discriminator: resource=track, operation=getAudioFeatures
 */


interface Credentials {
  spotifyOAuth2Api: CredentialReference;
}

/** Get audio features for a track by URI or ID */
export type SpotifyV1TrackGetAudioFeaturesParams = {
  resource: 'track';
  operation: 'getAudioFeatures';
/**
 * The track's Spotify URI or ID
 * @displayOptions.hide { operation: ["search"] }
 */
    id?: string | Expression<string> | PlaceholderValue;
};

export type SpotifyV1TrackGetAudioFeaturesOutput = {
  acousticness?: number;
  analysis_url?: string;
  danceability?: number;
  duration_ms?: number;
  energy?: number;
  id?: string;
  key?: number;
  liveness?: number;
  loudness?: number;
  mode?: number;
  speechiness?: number;
  tempo?: number;
  time_signature?: number;
  track_href?: string;
  type?: string;
  uri?: string;
  valence?: number;
};

export type SpotifyV1TrackGetAudioFeaturesNode = {
  type: 'n8n-nodes-base.spotify';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<SpotifyV1TrackGetAudioFeaturesParams>;
  output?: Items<SpotifyV1TrackGetAudioFeaturesOutput>;
};