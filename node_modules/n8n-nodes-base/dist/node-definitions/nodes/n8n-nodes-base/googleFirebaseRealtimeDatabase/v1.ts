/**
 * Google Cloud Realtime Database Node - Version 1
 * Interact with Google Firebase - Realtime Database API
 */


export interface GoogleFirebaseRealtimeDatabaseV1Params {
/**
 * As displayed in firebase console URL. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
 */
    projectId?: string | Expression<string>;
  operation?: 'create' | 'delete' | 'get' | 'push' | 'update';
/**
 * Object path on database. Do not append .json.
 * @displayOptions.hide { operation: ["get"] }
 */
    path?: string | Expression<string> | PlaceholderValue;
/**
 * Attributes to save
 * @displayOptions.show { operation: ["create", "push", "update"] }
 */
    attributes?: string | Expression<string> | PlaceholderValue;
}

export interface GoogleFirebaseRealtimeDatabaseV1Credentials {
  googleFirebaseRealtimeDatabaseOAuth2Api?: CredentialReference;
}

interface GoogleFirebaseRealtimeDatabaseV1NodeBase {
  type: 'n8n-nodes-base.googleFirebaseRealtimeDatabase';
  version: 1;
  credentials?: GoogleFirebaseRealtimeDatabaseV1Credentials;
}

export type GoogleFirebaseRealtimeDatabaseV1ParamsNode = GoogleFirebaseRealtimeDatabaseV1NodeBase & {
  config: NodeConfig<GoogleFirebaseRealtimeDatabaseV1Params>;
};

export type GoogleFirebaseRealtimeDatabaseV1Node = GoogleFirebaseRealtimeDatabaseV1ParamsNode;