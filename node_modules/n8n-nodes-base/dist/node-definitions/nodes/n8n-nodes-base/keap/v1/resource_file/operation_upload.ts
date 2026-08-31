/**
 * Keap Node - Version 1
 * Discriminator: resource=file, operation=upload
 */


interface Credentials {
  keapOAuth2Api: CredentialReference;
}

/** Upload a file */
export type KeapV1FileUploadParams = {
  resource: 'file';
  operation: 'upload';
/**
 * Whether the data to upload should be taken from binary field
 * @default false
 */
    binaryData?: boolean | Expression<boolean>;
/**
 * Input Binary Field
 * @hint The name of the input binary field containing the file to be uploaded
 * @displayOptions.show { binaryData: [true] }
 * @default data
 */
    binaryPropertyName?: string | Expression<string> | PlaceholderValue;
/**
 * File Association
 */
    fileAssociation?: 'company' | 'contact' | 'user' | Expression<string>;
/**
 * Contact ID
 * @displayOptions.show { fileAssociation: ["contact"] }
 */
    contactId?: string | Expression<string> | PlaceholderValue;
/**
 * The filename of the attached file, including extension
 * @displayOptions.show { binaryData: [false] }
 */
    fileName?: string | Expression<string> | PlaceholderValue;
/**
 * The content of the attachment, encoded in Base64
 * @displayOptions.show { binaryData: [false] }
 */
    fileData?: string | Expression<string> | PlaceholderValue;
/**
 * Is Public
 * @default false
 */
    isPublic?: boolean | Expression<boolean>;
};

export type KeapV1FileUploadNode = {
  type: 'n8n-nodes-base.keap';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<KeapV1FileUploadParams>;
};