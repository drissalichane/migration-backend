/**
 * Zoho CRM Node - Version 1
 * Discriminator: resource=vendor, operation=delete
 */


interface Credentials {
  zohoOAuth2Api: CredentialReference;
}

/** Delete an account */
export type ZohoCrmV1VendorDeleteParams = {
  resource: 'vendor';
  operation: 'delete';
/**
 * ID of the vendor to delete
 */
    vendorId?: string | Expression<string> | PlaceholderValue;
};

export type ZohoCrmV1VendorDeleteNode = {
  type: 'n8n-nodes-base.zohoCrm';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<ZohoCrmV1VendorDeleteParams>;
};