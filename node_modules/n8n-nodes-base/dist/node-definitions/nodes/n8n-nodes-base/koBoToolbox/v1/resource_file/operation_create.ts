/**
 * KoBoToolbox Node - Version 1
 * Discriminator: resource=file, operation=create
 */


interface Credentials {
  koBoToolboxApi: CredentialReference;
}

/** Create a file */
export type KoBoToolboxV1FileCreateParams = {
  resource: 'file';
  operation: 'create';
/**
 * Form ID (e.g. aSAvYreNzVEkrWg5Gdcvg). Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
 */
    formId?: string | Expression<string>;
/**
 * File Upload Mode
 * @default binary
 */
    fileMode?: 'binary' | 'url' | Expression<string>;
/**
 * Name of the binary property containing the file to upload. Supported types: image, audio, video, csv, xml, zip.
 * @displayOptions.show { fileMode: ["binary"] }
 * @default data
 */
    binaryPropertyName?: string | Expression<string> | PlaceholderValue;
/**
 * HTTP(s) link to the file to upload
 * @displayOptions.show { fileMode: ["url"] }
 */
    fileUrl?: string | Expression<string> | PlaceholderValue;
};

export type KoBoToolboxV1FileCreateNode = {
  type: 'n8n-nodes-base.koBoToolbox';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<KoBoToolboxV1FileCreateParams>;
};