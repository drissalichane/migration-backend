/**
 * Google Books Node - Version 2
 * Discriminator: resource=bookshelfVolume, operation=remove
 */


interface Credentials {
  googleApi: CredentialReference;
  googleBooksOAuth2Api: CredentialReference;
}

/** Removes a volume from a bookshelf */
export type GoogleBooksV2BookshelfVolumeRemoveParams = {
  resource: 'bookshelfVolume';
  operation: 'remove';
/**
 * Authentication
 * @default oAuth2
 */
    authentication?: 'oAuth2' | 'serviceAccount' | Expression<string>;
/**
 * ID of the bookshelf
 */
    shelfId?: string | Expression<string> | PlaceholderValue;
/**
 * ID of the volume
 */
    volumeId?: string | Expression<string> | PlaceholderValue;
};

export type GoogleBooksV2BookshelfVolumeRemoveNode = {
  type: 'n8n-nodes-base.googleBooks';
  version: 2;
  credentials?: Credentials;
  config: NodeConfig<GoogleBooksV2BookshelfVolumeRemoveParams>;
};