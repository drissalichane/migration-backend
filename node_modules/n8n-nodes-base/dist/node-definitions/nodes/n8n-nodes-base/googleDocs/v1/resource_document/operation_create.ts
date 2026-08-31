/**
 * Google Docs Node - Version 1
 * Discriminator: resource=document, operation=create
 */


interface Credentials {
  googleApi: CredentialReference;
  googleDocsOAuth2Api: CredentialReference;
}

export type GoogleDocsV1DocumentCreateParams = {
  resource: 'document';
  operation: 'create';
/**
 * Authentication
 * @default serviceAccount
 */
    authentication?: 'serviceAccount' | 'oAuth2' | Expression<string>;
/**
 * Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
 * @default myDrive
 */
    driveId?: string | Expression<string>;
/**
 * Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
 */
    folderId?: string | Expression<string>;
/**
 * Title
 */
    title?: string | Expression<string> | PlaceholderValue;
};

export type GoogleDocsV1DocumentCreateNode = {
  type: 'n8n-nodes-base.googleDocs';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<GoogleDocsV1DocumentCreateParams>;
};