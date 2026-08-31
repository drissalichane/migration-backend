/**
 * Venafi TLS Protect Cloud Node - Version 1
 * Discriminator: resource=certificate, operation=renew
 */


interface Credentials {
  venafiTlsProtectCloudApi: CredentialReference;
}

/** Renew a certificate */
export type VenafiTlsProtectCloudV1CertificateRenewParams = {
  resource: 'certificate';
  operation: 'renew';
/**
 * Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
 */
    applicationId?: string | Expression<string>;
/**
 * Existing Certificate ID
 */
    existingCertificateId?: string | Expression<string> | PlaceholderValue;
/**
 * Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
 */
    certificateIssuingTemplateId?: string | Expression<string>;
/**
 * Certificate Signing Request
 */
    certificateSigningRequest?: string | Expression<string> | PlaceholderValue;
/**
 * Options
 * @default {}
 */
    options?: {
    /** Validity Period
     * @default P1Y
     */
    validityPeriod?: 'P1Y' | 'P10D' | 'PT12H' | Expression<string>;
  };
};

export type VenafiTlsProtectCloudV1CertificateRenewNode = {
  type: 'n8n-nodes-base.venafiTlsProtectCloud';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<VenafiTlsProtectCloudV1CertificateRenewParams>;
};