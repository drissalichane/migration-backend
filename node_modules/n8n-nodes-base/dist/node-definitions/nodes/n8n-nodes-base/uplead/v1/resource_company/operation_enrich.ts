/**
 * Uplead Node - Version 1
 * Discriminator: resource=company, operation=enrich
 */


interface Credentials {
  upleadApi: CredentialReference;
}

/** Company API lets you lookup company data via a domain name or company name */
export type UpleadV1CompanyEnrichParams = {
  resource: 'company';
  operation: 'enrich';
/**
 * The name of the company (e.g – amazon)
 */
    company?: string | Expression<string> | PlaceholderValue;
/**
 * The domain name (e.g – amazon.com)
 */
    domain?: string | Expression<string> | PlaceholderValue;
};

export type UpleadV1CompanyEnrichNode = {
  type: 'n8n-nodes-base.uplead';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<UpleadV1CompanyEnrichParams>;
};