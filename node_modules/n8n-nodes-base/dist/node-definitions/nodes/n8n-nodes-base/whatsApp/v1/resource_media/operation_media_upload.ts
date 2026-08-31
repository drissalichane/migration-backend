/**
 * WhatsApp Business Cloud Node - Version 1
 * Discriminator: resource=media, operation=mediaUpload
 */


interface Credentials {
  whatsAppApi: CredentialReference;
}

export type WhatsAppV1MediaMediaUploadParams = {
  resource: 'media';
  operation: 'mediaUpload';
/**
 * The ID of the business account's phone number to store the media
 */
    phoneNumberId?: string | Expression<string>;
/**
 * Name of the binary property which contains the data for the file to be uploaded
 * @default data
 */
    mediaPropertyName?: string | Expression<string> | PlaceholderValue;
/**
 * Additional Fields
 * @default {}
 */
    additionalFields?: {
    /** The name to use for the file
     */
    mediaFileName?: string | Expression<string> | PlaceholderValue;
  };
};

export type WhatsAppV1MediaMediaUploadOutput = {
  id?: string;
};

export type WhatsAppV1MediaMediaUploadNode = {
  type: 'n8n-nodes-base.whatsApp';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<WhatsAppV1MediaMediaUploadParams>;
  output?: Items<WhatsAppV1MediaMediaUploadOutput>;
};