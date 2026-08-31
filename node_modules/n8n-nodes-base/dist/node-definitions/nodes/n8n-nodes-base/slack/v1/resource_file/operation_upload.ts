/**
 * Slack Node - Version 1
 * Discriminator: resource=file, operation=upload
 */


interface Credentials {
  slackApi: CredentialReference;
  slackOAuth2Api: CredentialReference;
}

/** Create or upload an existing file */
export type SlackV1FileUploadParams = {
  resource: 'file';
  operation: 'upload';
  authentication?: 'accessToken' | 'oAuth2' | Expression<string>;
/**
 * Whether the data to upload should be taken from binary field
 * @default false
 */
    binaryData?: boolean | Expression<boolean>;
/**
 * The text content of the file to upload
 * @displayOptions.show { binaryData: [false] }
 */
    fileContent?: string | Expression<string> | PlaceholderValue;
/**
 * Input Binary Field
 * @hint The name of the input binary field containing the file to be uploaded
 * @displayOptions.show { binaryData: [true] }
 * @default data
 */
    binaryPropertyName?: string | Expression<string> | PlaceholderValue;
/**
 * Other options to set
 * @default {}
 */
    options?: {
    /** The channels to send the file to. Choose from the list, or specify IDs using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
     * @default []
     */
    channelIds?: string[];
    /** Filename of file
     */
    fileName?: string | Expression<string> | PlaceholderValue;
    /** The message text introducing the file in specified channels
     */
    initialComment?: string | Expression<string> | PlaceholderValue;
    /** Provide another message's ts value to upload this file as a reply. Never use a reply's ts value; use its parent instead.
     */
    threadTs?: string | Expression<string> | PlaceholderValue;
    /** Title of file
     */
    title?: string | Expression<string> | PlaceholderValue;
  };
};

export type SlackV1FileUploadNode = {
  type: 'n8n-nodes-base.slack';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<SlackV1FileUploadParams>;
};