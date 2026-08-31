/**
 * Lemlist Node - Version 2
 * Discriminator: resource=enrich, operation=enrichPerson
 */


interface Credentials {
  lemlistApi: CredentialReference;
}

export type LemlistV2EnrichEnrichPersonParams = {
  resource: 'enrich';
  operation: 'enrichPerson';
/**
 * Find Email
 * @default false
 */
    findEmail?: boolean | Expression<boolean>;
/**
 * Verify Email
 * @default false
 */
    verifyEmail?: boolean | Expression<boolean>;
/**
 * LinkedIn Enrichment
 * @default false
 */
    linkedinEnrichment?: boolean | Expression<boolean>;
/**
 * Find Phone
 * @default false
 */
    findPhone?: boolean | Expression<boolean>;
/**
 * Additional Fields
 * @default {}
 */
    additionalFields?: {
    /** Email
     */
    email?: string | Expression<string> | PlaceholderValue;
    /** First Name
     */
    firstName?: string | Expression<string> | PlaceholderValue;
    /** Last Name
     */
    lastName?: string | Expression<string> | PlaceholderValue;
    /** LinkedIn Url
     */
    linkedinUrl?: string | Expression<string> | PlaceholderValue;
    /** Company Name
     */
    companyName?: string | Expression<string> | PlaceholderValue;
    /** Company Domain
     */
    companyDomain?: string | Expression<string> | PlaceholderValue;
  };
};

export type LemlistV2EnrichEnrichPersonOutput = {
  id?: string;
};

export type LemlistV2EnrichEnrichPersonNode = {
  type: 'n8n-nodes-base.lemlist';
  version: 2;
  credentials?: Credentials;
  config: NodeConfig<LemlistV2EnrichEnrichPersonParams>;
  output?: Items<LemlistV2EnrichEnrichPersonOutput>;
};