/**
 * Google Books Node - Version 1
 * Discriminator: resource=bookshelfVolume, operation=remove
 */


interface Credentials {
  googleApi: CredentialReference;
  googleBooksOAuth2Api: CredentialReference;
}

/** Removes a volume from a bookshelf */
export type GoogleBooksV1BookshelfVolumeRemoveParams = {
  resource: 'bookshelfVolume';
  operation: 'remove';
/**
 * Authentication
 * @default serviceAccount
 */
    authentication?: 'serviceAccount' | 'oAuth2' | Expression<string>;
/**
 * ID of the bookshelf
 */
    shelfId?: string | Expression<string> | PlaceholderValue;
/**
 * ID of the volume
 */
    volumeId?: string | Expression<string> | PlaceholderValue;
};

export type GoogleBooksV1BookshelfVolumeRemoveNode = {
  type: 'n8n-nodes-base.googleBooks';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<GoogleBooksV1BookshelfVolumeRemoveParams>;
};