/**
 * Google Books Node - Version 1
 * Discriminator: resource=bookshelf, operation=get
 */


interface Credentials {
  googleApi: CredentialReference;
  googleBooksOAuth2Api: CredentialReference;
}

/** Retrieve a specific bookshelf resource for the specified user */
export type GoogleBooksV1BookshelfGetParams = {
  resource: 'bookshelf';
  operation: 'get';
/**
 * Authentication
 * @default serviceAccount
 */
    authentication?: 'serviceAccount' | 'oAuth2' | Expression<string>;
/**
 * My Library
 * @default false
 */
    myLibrary?: boolean | Expression<boolean>;
/**
 * ID of user
 * @displayOptions.hide { myLibrary: [true] }
 */
    userId?: string | Expression<string> | PlaceholderValue;
/**
 * ID of the bookshelf
 */
    shelfId?: string | Expression<string> | PlaceholderValue;
};

export type GoogleBooksV1BookshelfGetNode = {
  type: 'n8n-nodes-base.googleBooks';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<GoogleBooksV1BookshelfGetParams>;
};