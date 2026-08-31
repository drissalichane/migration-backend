/**
 * Agile CRM Node - Version 1
 * Discriminator: resource=company, operation=get
 */


interface Credentials {
  agileCrmApi: CredentialReference;
}

/** Get a contact */
export type AgileCrmV1CompanyGetParams = {
  resource: 'company';
  operation: 'get';
/**
 * Unique identifier for a particular company
 */
    companyId?: string | Expression<string> | PlaceholderValue;
};

export type AgileCrmV1CompanyGetNode = {
  type: 'n8n-nodes-base.agileCrm';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<AgileCrmV1CompanyGetParams>;
};