/**
 * KoBoToolbox Node - Version 1
 * Discriminator: resource=file, operation=get
 */


interface Credentials {
  koBoToolboxApi: CredentialReference;
}

/** Get a form */
export type KoBoToolboxV1FileGetParams = {
  resource: 'file';
  operation: 'get';
/**
 * Form ID (e.g. aSAvYreNzVEkrWg5Gdcvg). Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
 */
    formId?: string | Expression<string>;
/**
 * Uid of the file (should start with "af" e.g. "afQoJxA4kmKEXVpkH6SYbhb"
 */
    fileId?: string | Expression<string> | PlaceholderValue;
/**
 * Name of the binary property to write the file into
 * @default data
 */
    binaryPropertyName?: string | Expression<string> | PlaceholderValue;
/**
 * Whether to download the file content into a binary property
 * @default false
 */
    download?: boolean | Expression<boolean>;
};

export type KoBoToolboxV1FileGetNode = {
  type: 'n8n-nodes-base.koBoToolbox';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<KoBoToolboxV1FileGetParams>;
};