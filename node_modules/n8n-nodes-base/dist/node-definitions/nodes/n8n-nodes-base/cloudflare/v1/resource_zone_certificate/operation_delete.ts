/**
 * Cloudflare Node - Version 1
 * Discriminator: resource=zoneCertificate, operation=delete
 */


interface Credentials {
  cloudflareApi: CredentialReference;
}

/** Delete a certificate */
export type CloudflareV1ZoneCertificateDeleteParams = {
  resource: 'zoneCertificate';
  operation: 'delete';
/**
 * Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
 */
    zoneId?: string | Expression<string>;
/**
 * Certificate ID
 */
    certificateId?: string | Expression<string> | PlaceholderValue;
};

export type CloudflareV1ZoneCertificateDeleteNode = {
  type: 'n8n-nodes-base.cloudflare';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<CloudflareV1ZoneCertificateDeleteParams>;
};