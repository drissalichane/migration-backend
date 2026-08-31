/**
 * Google Cloud Firestore Node - Version 1.1
 * Discriminator: resource=document, operation=create
 */


interface Credentials {
  googleFirebaseCloudFirestoreOAuth2Api: CredentialReference;
  googleApi: CredentialReference;
}

/** Create a document */
export type GoogleFirebaseCloudFirestoreV11DocumentCreateParams = {
  resource: 'document';
  operation: 'create';
  authentication?: 'googleFirebaseCloudFirestoreOAuth2Api' | 'serviceAccount' | Expression<string>;
/**
 * As displayed in firebase console URL. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
 */
    projectId?: string | Expression<string>;
/**
 * Usually the provided default value will work
 * @default (default)
 */
    database?: string | Expression<string> | PlaceholderValue;
/**
 * Collection name
 */
    collection?: string | Expression<string> | PlaceholderValue;
/**
 * Document ID
 */
    documentId?: string | Expression<string> | PlaceholderValue;
/**
 * List of attributes to save
 */
    columns?: string | Expression<string> | PlaceholderValue;
/**
 * Whether to return a simplified version of the response instead of the raw data
 * @default true
 */
    simple?: boolean | Expression<boolean>;
};

export type GoogleFirebaseCloudFirestoreV11DocumentCreateOutput = {
  _createTime?: string;
  _id?: string;
  _name?: string;
  _updateTime?: string;
};

export type GoogleFirebaseCloudFirestoreV11DocumentCreateNode = {
  type: 'n8n-nodes-base.googleFirebaseCloudFirestore';
  version: 1.1;
  credentials?: Credentials;
  config: NodeConfig<GoogleFirebaseCloudFirestoreV11DocumentCreateParams>;
  output?: Items<GoogleFirebaseCloudFirestoreV11DocumentCreateOutput>;
};