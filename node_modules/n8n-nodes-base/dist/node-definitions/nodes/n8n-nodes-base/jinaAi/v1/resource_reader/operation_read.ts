/**
 * Jina AI Node - Version 1
 * Discriminator: resource=reader, operation=read
 */


interface Credentials {
  jinaAiApi: CredentialReference;
}

/** Fetches content from a URL and converts it to clean, LLM-friendly formats */
export type JinaAiV1ReaderReadParams = {
  resource: 'reader';
  operation: 'read';
/**
 * The URL to fetch content from
 */
    url?: string | Expression<string> | PlaceholderValue;
/**
 * Whether to return a simplified version of the response instead of the raw data
 * @default true
 */
    simplify?: boolean | Expression<boolean>;
/**
 * Options
 * @default {}
 */
    options?: {
    /** Specify desired output format
     */
    outputFormat?: 'html' | '' | 'markdown' | 'screenshot' | 'text' | Expression<string>;
    /** CSS selector to focus on specific page elements
     */
    targetSelector?: string | Expression<string> | PlaceholderValue;
    /** CSS selector for elements to exclude
     */
    excludeSelector?: string | Expression<string> | PlaceholderValue;
    /** Whether to generate captions for images within the content
     * @default false
     */
    enableImageCaptioning?: boolean | Expression<boolean>;
    /** Wait for a specific element to appear before extracting content (for dynamic pages)
     */
    waitForSelector?: string | Expression<string> | PlaceholderValue;
  };
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

export type JinaAiV1ReaderReadNode = {
  type: 'n8n-nodes-base.jinaAi';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<JinaAiV1ReaderReadParams>;
};