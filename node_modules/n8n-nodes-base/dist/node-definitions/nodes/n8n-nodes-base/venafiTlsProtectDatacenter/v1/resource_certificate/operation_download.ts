/**
 * Venafi TLS Protect Datacenter Node - Version 1
 * Discriminator: resource=certificate, operation=download
 */


interface Credentials {
  venafiTlsProtectDatacenterApi: CredentialReference;
}

/** Download a certificate */
export type VenafiTlsProtectDatacenterV1CertificateDownloadParams = {
  resource: 'certificate';
  operation: 'download';
/**
 * Certificate DN
 */
    certificateDn?: string | Expression<string> | PlaceholderValue;
/**
 * Include Private Key
 * @default false
 */
    includePrivateKey?: boolean | Expression<boolean>;
/**
 * Password
 * @displayOptions.show { includePrivateKey: [true] }
 */
    password?: string | Expression<string> | PlaceholderValue;
/**
 * The name of the input field containing the binary file data to be uploaded
 * @default data
 */
    binaryProperty?: string | Expression<string> | PlaceholderValue;
/**
 * Additional Fields
 * @default {}
 */
    additionalFields?: {
    /** Include Chain
     * @default true
     */
    IncludeChain?: boolean | Expression<boolean>;
    /** Root First Order
     */
    RootFirstOrder?: string | Expression<string> | PlaceholderValue;
    /** Keystore Password
     */
    KeystorePassword?: string | Expression<string> | PlaceholderValue;
  };
};

export type VenafiTlsProtectDatacenterV1CertificateDownloadNode = {
  type: 'n8n-nodes-base.venafiTlsProtectDatacenter';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<VenafiTlsProtectDatacenterV1CertificateDownloadParams>;
};