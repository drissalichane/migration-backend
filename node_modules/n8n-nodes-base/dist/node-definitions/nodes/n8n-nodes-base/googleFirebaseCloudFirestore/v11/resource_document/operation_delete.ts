/**
 * Google Cloud Firestore Node - Version 1.1
 * Discriminator: resource=document, operation=delete
 */


interface Credentials {
  googleFirebaseCloudFirestoreOAuth2Api: CredentialReference;
  googleApi: CredentialReference;
}

/** Delete a document */
export type GoogleFirebaseCloudFirestoreV11DocumentDeleteParams = {
  resource: 'document';
  operation: 'delete';
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
};

export type GoogleFirebaseCloudFirestoreV11DocumentDeleteOutput = {
  success?: boolean;
};

export type GoogleFirebaseCloudFirestoreV11DocumentDeleteNode = {
  type: 'n8n-nodes-base.googleFirebaseCloudFirestore';
  version: 1.1;
  credentials?: Credentials;
  config: NodeConfig<GoogleFirebaseCloudFirestoreV11DocumentDeleteParams>;
  output?: Items<GoogleFirebaseCloudFirestoreV11DocumentDeleteOutput>;
};