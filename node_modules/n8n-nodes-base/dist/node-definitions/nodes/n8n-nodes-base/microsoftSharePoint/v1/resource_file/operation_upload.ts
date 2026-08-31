/**
 * Microsoft SharePoint Node - Version 1
 * Discriminator: resource=file, operation=upload
 */


interface Credentials {
  microsoftSharePointOAuth2Api: CredentialReference;
}

/** Upload an existing file */
export type MicrosoftSharePointV1FileUploadParams = {
  resource: 'file';
  operation: 'upload';
/**
 * Select the site to retrieve folders from
 * @default {"mode":"list","value":""}
 */
    site?: { __rl: true; mode: 'list' | 'id'; value: string; cachedResultName?: string };
/**
 * Select the folder to upload the file to
 * @displayOptions.hide { site: [""] }
 * @default {"mode":"list","value":""}
 */
    folder?: { __rl: true; mode: 'list' | 'id'; value: string; cachedResultName?: string };
/**
 * The name of the file being uploaded
 */
    fileName?: string | Expression<string> | PlaceholderValue;
/**
 * Find the name of input field containing the binary data to upload in the Input panel on the left, in the Binary tab
 * @hint The name of the input field containing the binary file data to upload
 */
    fileContents?: string | Expression<string> | PlaceholderValue;
  requestOptions?: {
    /** Batching
     * @default {"batch":{}}
     */
    batching?: {
        /** Batching
     */
    batch?: {
      /** Input will be split in batches to throttle requests. -1 for disabled. 0 will be treated as 1.
       * @default 50
       */
      batchSize?: number | Expression<number>;
      /** Time (in milliseconds) between each batch of requests. 0 for disabled.
       * @default 1000
       */
      batchInterval?: number | Expression<number>;
    };
  };
    /** Whether to accept the response even if SSL certificate validation is not possible
     * @default false
     */
    allowUnauthorizedCerts?: boolean;
    /** HTTP proxy to use. If authentication is required it can be defined as follow: http://username:password@myproxy:3128
     */
    proxy?: string | Expression<string> | PlaceholderValue;
    /** Time in ms to wait for the server to send response headers (and start the response body) before aborting the request
     * @default 10000
     */
    timeout?: number | Expression<number>;
  };
};

export type MicrosoftSharePointV1FileUploadNode = {
  type: 'n8n-nodes-base.microsoftSharePoint';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<MicrosoftSharePointV1FileUploadParams>;
};