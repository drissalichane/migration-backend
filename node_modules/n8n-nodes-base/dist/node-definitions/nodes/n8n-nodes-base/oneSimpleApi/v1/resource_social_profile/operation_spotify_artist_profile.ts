/**
 * One Simple API Node - Version 1
 * Discriminator: resource=socialProfile, operation=spotifyArtistProfile
 */


interface Credentials {
  oneSimpleApi: CredentialReference;
}

/** Get details about a Spotify Artist */
export type OneSimpleApiV1SocialProfileSpotifyArtistProfileParams = {
  resource: 'socialProfile';
  operation: 'spotifyArtistProfile';
/**
 * Artist name to get details for
 */
    artistName?: string | Expression<string> | PlaceholderValue;
};

export type OneSimpleApiV1SocialProfileSpotifyArtistProfileNode = {
  type: 'n8n-nodes-base.oneSimpleApi';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<OneSimpleApiV1SocialProfileSpotifyArtistProfileParams>;
};