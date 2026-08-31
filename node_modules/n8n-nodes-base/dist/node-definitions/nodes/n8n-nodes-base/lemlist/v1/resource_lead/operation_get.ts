/**
 * Lemlist Node - Version 1
 * Discriminator: resource=lead, operation=get
 */


interface Credentials {
  lemlistApi: CredentialReference;
}

export type LemlistV1LeadGetParams = {
  resource: 'lead';
  operation: 'get';
/**
 * Email of the lead to retrieve
 */
    email?: string | Expression<string> | PlaceholderValue;
};

export type LemlistV1LeadGetNode = {
  type: 'n8n-nodes-base.lemlist';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<LemlistV1LeadGetParams>;
};