/**
 * Google Books Node - Version 1
 * Discriminator: resource=bookshelfVolume, operation=clear
 */


interface Credentials {
  googleApi: CredentialReference;
  googleBooksOAuth2Api: CredentialReference;
}

/** Clears all volumes from a bookshelf */
export type GoogleBooksV1BookshelfVolumeClearParams = {
  resource: 'bookshelfVolume';
  operation: 'clear';
/**
 * Authentication
 * @default serviceAccount
 */
    authentication?: 'serviceAccount' | 'oAuth2' | Expression<string>;
/**
 * ID of the bookshelf
 */
    shelfId?: string | Expression<string> | PlaceholderValue;
};

export type GoogleBooksV1BookshelfVolumeClearNode = {
  type: 'n8n-nodes-base.googleBooks';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<GoogleBooksV1BookshelfVolumeClearParams>;
};