/**
 * urlscan.io Node - Version 1
 * Discriminator: resource=scan, operation=perform
 */


interface Credentials {
  urlScanIoApi: CredentialReference;
}

export type UrlScanIoV1ScanPerformParams = {
  resource: 'scan';
  operation: 'perform';
/**
 * URL to scan
 */
    url?: string | Expression<string> | PlaceholderValue;
/**
 * Additional Fields
 * @default {}
 */
    additionalFields?: {
    /** &lt;code&gt;User-Agent&lt;/code&gt; header to set for this scan. Defaults to &lt;code&gt;n8n&lt;/code&gt;
     */
    customAgent?: string | Expression<string> | PlaceholderValue;
    /** Disable reclassification of URLs with potential PII in them
     */
    overrideSafety?: string | Expression<string> | PlaceholderValue;
    /** HTTP referer to set for this scan
     */
    referer?: string | Expression<string> | PlaceholderValue;
    /** Comma-separated list of user-defined tags to add to this scan. Limited to 10 tags.
     */
    tags?: string | Expression<string> | PlaceholderValue;
    /** Visibility
     * @default private
     */
    visibility?: 'private' | 'public' | 'unlisted' | Expression<string>;
  };
};

export type UrlScanIoV1ScanPerformOutput = {
  api?: string;
  message?: string;
  result?: string;
  scanId?: string;
  url?: string;
  visibility?: string;
};

export type UrlScanIoV1ScanPerformNode = {
  type: 'n8n-nodes-base.urlScanIo';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<UrlScanIoV1ScanPerformParams>;
  output?: Items<UrlScanIoV1ScanPerformOutput>;
};