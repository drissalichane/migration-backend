/**
 * urlscan.io Node - Version 1
 * Discriminator: resource=scan, operation=get
 */


interface Credentials {
  urlScanIoApi: CredentialReference;
}

export type UrlScanIoV1ScanGetParams = {
  resource: 'scan';
  operation: 'get';
/**
 * ID of the scan to retrieve
 */
    scanId?: string | Expression<string> | PlaceholderValue;
};

export type UrlScanIoV1ScanGetNode = {
  type: 'n8n-nodes-base.urlScanIo';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<UrlScanIoV1ScanGetParams>;
};