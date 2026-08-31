/**
 * Clearbit Node - Version 1
 * Discriminator: resource=company, operation=autocomplete
 */


interface Credentials {
  clearbitApi: CredentialReference;
}

/** The Company API allows you to look up a company by their domain */
export type ClearbitV1CompanyAutocompleteParams = {
  resource: 'company';
  operation: 'autocomplete';
/**
 * Name is the partial name of the company
 */
    name?: string | Expression<string> | PlaceholderValue;
};

export type ClearbitV1CompanyAutocompleteOutput = {
  domain?: string;
  name?: string;
};

export type ClearbitV1CompanyAutocompleteNode = {
  type: 'n8n-nodes-base.clearbit';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<ClearbitV1CompanyAutocompleteParams>;
  output?: Items<ClearbitV1CompanyAutocompleteOutput>;
};