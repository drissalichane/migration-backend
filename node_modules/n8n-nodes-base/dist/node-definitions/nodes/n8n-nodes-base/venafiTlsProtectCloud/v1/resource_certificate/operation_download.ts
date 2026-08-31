/**
 * Venafi TLS Protect Cloud Node - Version 1
 * Discriminator: resource=certificate, operation=download
 */


interface Credentials {
  venafiTlsProtectCloudApi: CredentialReference;
}

/** Download a certificate */
export type VenafiTlsProtectCloudV1CertificateDownloadParams = {
  resource: 'certificate';
  operation: 'download';
/**
 * Certificate ID
 */
    certificateId?: string | Expression<string> | PlaceholderValue;
/**
 * Download Item
 * @default certificate
 */
    downloadItem?: 'certificate' | 'keystore' | Expression<string>;
/**
 * Keystore Type
 * @displayOptions.show { downloadItem: ["keystore"] }
 * @default PEM
 */
    keystoreType?: 'JKS' | 'PKCS12' | 'PEM' | Expression<string>;
/**
 * Certificate Label
 * @displayOptions.show { downloadItem: ["keystore"] }
 */
    certificateLabel?: string | Expression<string> | PlaceholderValue;
/**
 * Private Key Passphrase
 * @displayOptions.show { downloadItem: ["keystore"] }
 */
    privateKeyPassphrase?: string | Expression<string> | PlaceholderValue;
/**
 * Keystore Passphrase
 * @displayOptions.show { downloadItem: ["keystore"], keystoreType: ["JKS"] }
 */
    keystorePassphrase?: string | Expression<string> | PlaceholderValue;
/**
 * The name of the input field containing the binary file data to be uploaded
 * @default data
 */
    binaryProperty?: string | Expression<string> | PlaceholderValue;
/**
 * Options
 * @default {}
 */
    options?: {
    /** Chain Order
     * @default ROOT_FIRST
     */
    chainOrder?: 'EE_FIRST' | 'EE_ONLY' | 'ROOT_FIRST' | Expression<string>;
    /** Format
     * @default PEM
     */
    format?: 'PEM' | 'DER' | Expression<string>;
  };
};

export type VenafiTlsProtectCloudV1CertificateDownloadNode = {
  type: 'n8n-nodes-base.venafiTlsProtectCloud';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<VenafiTlsProtectCloudV1CertificateDownloadParams>;
};