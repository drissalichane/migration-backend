/**
 * Venafi TLS Protect Cloud Node - Version 1
 * Discriminator: resource=certificate, operation=get
 */


interface Credentials {
  venafiTlsProtectCloudApi: CredentialReference;
}

/** Retrieve a certificate */
export type VenafiTlsProtectCloudV1CertificateGetParams = {
  resource: 'certificate';
  operation: 'get';
/**
 * Certificate ID
 */
    certificateId?: string | Expression<string> | PlaceholderValue;
};

export type VenafiTlsProtectCloudV1CertificateGetNode = {
  type: 'n8n-nodes-base.venafiTlsProtectCloud';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<VenafiTlsProtectCloudV1CertificateGetParams>;
};