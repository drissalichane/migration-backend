/**
 * Matrix Node - Version 1
 * Discriminator: resource=media, operation=upload
 */


interface Credentials {
  matrixApi: CredentialReference;
}

/** Send media to a chat room */
export type MatrixV1MediaUploadParams = {
  resource: 'media';
  operation: 'upload';
/**
 * Room ID to post. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
 */
    roomId?: string | Expression<string>;
/**
 * Input Binary Field
 * @hint The name of the input binary field containing the file to be uploaded
 * @default data
 */
    binaryPropertyName?: string | Expression<string> | PlaceholderValue;
/**
 * Type of file being uploaded
 * @default image
 */
    mediaType?: 'file' | 'image' | 'audio' | 'video' | Expression<string>;
/**
 * Additional Fields
 * @default {}
 */
    additionalFields?: {
    /** Name of the file being uploaded
     */
    fileName?: string | Expression<string> | PlaceholderValue;
  };
};

export type MatrixV1MediaUploadNode = {
  type: 'n8n-nodes-base.matrix';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<MatrixV1MediaUploadParams>;
};