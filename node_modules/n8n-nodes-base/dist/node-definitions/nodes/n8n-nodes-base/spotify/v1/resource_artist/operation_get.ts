/**
 * Spotify Node - Version 1
 * Discriminator: resource=artist, operation=get
 */


interface Credentials {
  spotifyOAuth2Api: CredentialReference;
}

/** Get an album by URI or ID */
export type SpotifyV1ArtistGetParams = {
  resource: 'artist';
  operation: 'get';
/**
 * The artist's Spotify URI or ID
 * @displayOptions.hide { operation: ["search"] }
 */
    id?: string | Expression<string> | PlaceholderValue;
};

export type SpotifyV1ArtistGetOutput = {
  external_urls?: {
    spotify?: string;
  };
  followers?: {
    href?: null;
    total?: number;
  };
  genres?: Array<string>;
  href?: string;
  id?: string;
  images?: Array<{
    height?: number;
    url?: string;
    width?: number;
  }>;
  name?: string;
  popularity?: number;
  type?: string;
  uri?: string;
};

export type SpotifyV1ArtistGetNode = {
  type: 'n8n-nodes-base.spotify';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<SpotifyV1ArtistGetParams>;
  output?: Items<SpotifyV1ArtistGetOutput>;
};