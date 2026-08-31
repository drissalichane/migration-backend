/**
 * Intercom Node - Version 1
 * Discriminator: resource=company, operation=get
 */


interface Credentials {
  intercomApi: CredentialReference;
}

/** Companies allow you to represent commercial organizations using your product */
export type IntercomV1CompanyGetParams = {
  resource: 'company';
  operation: 'get';
/**
 * What property to use to query the company
 */
    selectBy?: 'companyId' | 'id' | 'name' | Expression<string>;
/**
 * View by value
 */
    value?: string | Expression<string> | PlaceholderValue;
};

export type IntercomV1CompanyGetNode = {
  type: 'n8n-nodes-base.intercom';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<IntercomV1CompanyGetParams>;
};