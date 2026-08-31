/**
 * Copper Node - Version 1
 * Discriminator: resource=company, operation=get
 */


interface Credentials {
  copperApi: CredentialReference;
}

export type CopperV1CompanyGetParams = {
  resource: 'company';
  operation: 'get';
/**
 * ID of the company to retrieve
 */
    companyId?: string | Expression<string> | PlaceholderValue;
};

export type CopperV1CompanyGetNode = {
  type: 'n8n-nodes-base.copper';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<CopperV1CompanyGetParams>;
};