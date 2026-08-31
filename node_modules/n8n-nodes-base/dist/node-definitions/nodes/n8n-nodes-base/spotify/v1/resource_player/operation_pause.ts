/**
 * Spotify Node - Version 1
 * Discriminator: resource=player, operation=pause
 */


interface Credentials {
  spotifyOAuth2Api: CredentialReference;
}

/** Pause your music */
export type SpotifyV1PlayerPauseParams = {
  resource: 'player';
  operation: 'pause';
};

export type SpotifyV1PlayerPauseOutput = {
  success?: boolean;
};

export type SpotifyV1PlayerPauseNode = {
  type: 'n8n-nodes-base.spotify';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<SpotifyV1PlayerPauseParams>;
  output?: Items<SpotifyV1PlayerPauseOutput>;
};