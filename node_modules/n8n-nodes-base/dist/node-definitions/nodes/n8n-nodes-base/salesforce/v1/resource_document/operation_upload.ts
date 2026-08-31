/**
 * Salesforce Node - Version 1
 * Discriminator: resource=document, operation=upload
 */


interface Credentials {
  salesforceOAuth2Api: CredentialReference;
  salesforceJwtApi: CredentialReference;
}

/** Represents a document */
export type SalesforceV1DocumentUploadParams = {
  resource: 'document';
  operation: 'upload';
/**
 * OAuth Authorization Flow
 * @default oAuth2
 */
    authentication?: 'oAuth2' | 'jwt' | Expression<string>;
/**
 * Name of the file
 */
    title?: string | Expression<string> | PlaceholderValue;
/**
 * Input Binary Field
 * @hint The name of the input binary field containing the file to be uploaded
 * @default data
 */
    binaryPropertyName?: string | Expression<string> | PlaceholderValue;
/**
 * Additional Fields
 * @default {}
 */
    additionalFields?: {
    /** File extension to use. If none is set, the value from the binary data will be used.
     */
    fileExtension?: string | Expression<string> | PlaceholderValue;
    /** ID of the object you want to link this document to
     */
    linkToObjectId?: string | Expression<string> | PlaceholderValue;
    /** ID of the owner of this document. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
     */
    ownerId?: string | Expression<string>;
  };
};

export type SalesforceV1DocumentUploadOutput = {
  id?: string;
  success?: boolean;
};

export type SalesforceV1DocumentUploadNode = {
  type: 'n8n-nodes-base.salesforce';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<SalesforceV1DocumentUploadParams>;
  output?: Items<SalesforceV1DocumentUploadOutput>;
};