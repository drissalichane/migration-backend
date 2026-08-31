/**
 * Venafi TLS Protect Cloud Node - Version 1
 * Discriminator: resource=certificate, operation=delete
 */


interface Credentials {
  venafiTlsProtectCloudApi: CredentialReference;
}

/** Delete a certificate */
export type VenafiTlsProtectCloudV1CertificateDeleteParams = {
  resource: 'certificate';
  operation: 'delete';
/**
 * Certificate ID
 */
    certificateId?: string | Expression<string> | PlaceholderValue;
};

export type VenafiTlsProtectCloudV1CertificateDeleteNode = {
  type: 'n8n-nodes-base.venafiTlsProtectCloud';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<VenafiTlsProtectCloudV1CertificateDeleteParams>;
};