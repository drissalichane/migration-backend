/**
 * Google Books Node - Version 2
 * Discriminator: resource=bookshelfVolume, operation=move
 */


interface Credentials {
  googleApi: CredentialReference;
  googleBooksOAuth2Api: CredentialReference;
}

/** Moves a volume within a bookshelf */
export type GoogleBooksV2BookshelfVolumeMoveParams = {
  resource: 'bookshelfVolume';
  operation: 'move';
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
/**
 * Position on shelf to move the item (0 puts the item before the current first item, 1 puts it between the first and the second and so on)
 */
    volumePosition?: string | Expression<string> | PlaceholderValue;
};

export type GoogleBooksV2BookshelfVolumeMoveNode = {
  type: 'n8n-nodes-base.googleBooks';
  version: 2;
  credentials?: Credentials;
  config: NodeConfig<GoogleBooksV2BookshelfVolumeMoveParams>;
};