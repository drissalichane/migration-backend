/**
 * Zoho CRM Node - Version 1
 * Discriminator: resource=vendor, operation=get
 */


interface Credentials {
  zohoOAuth2Api: CredentialReference;
}

/** Get an account */
export type ZohoCrmV1VendorGetParams = {
  resource: 'vendor';
  operation: 'get';
/**
 * ID of the vendor to retrieve
 */
    vendorId?: string | Expression<string> | PlaceholderValue;
};

export type ZohoCrmV1VendorGetNode = {
  type: 'n8n-nodes-base.zohoCrm';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<ZohoCrmV1VendorGetParams>;
};