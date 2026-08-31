/**
 * Google Cloud Firestore Node - Version 1
 * Discriminator: resource=document, operation=query
 */


interface Credentials {
  googleFirebaseCloudFirestoreOAuth2Api: CredentialReference;
  googleApi: CredentialReference;
}

/** Runs a query against your documents */
export type GoogleFirebaseCloudFirestoreV1DocumentQueryParams = {
  resource: 'document';
  operation: 'query';
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
 * JSON query to execute
 */
    query?: string | Expression<string> | PlaceholderValue;
/**
 * Whether to return a simplified version of the response instead of the raw data
 * @default true
 */
    simple?: boolean | Expression<boolean>;
};

export type GoogleFirebaseCloudFirestoreV1DocumentQueryOutput = {
  _createTime?: string;
  _id?: string;
  _name?: string;
  _updateTime?: string;
};

export type GoogleFirebaseCloudFirestoreV1DocumentQueryNode = {
  type: 'n8n-nodes-base.googleFirebaseCloudFirestore';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<GoogleFirebaseCloudFirestoreV1DocumentQueryParams>;
  output?: Items<GoogleFirebaseCloudFirestoreV1DocumentQueryOutput>;
};