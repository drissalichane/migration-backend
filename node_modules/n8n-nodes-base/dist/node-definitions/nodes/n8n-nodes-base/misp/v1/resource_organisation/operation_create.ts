/**
 * MISP Node - Version 1
 * Discriminator: resource=organisation, operation=create
 */


interface Credentials {
  mispApi: CredentialReference;
}

export type MispV1OrganisationCreateParams = {
  resource: 'organisation';
  operation: 'create';
/**
 * Name
 */
    name?: string | Expression<string> | PlaceholderValue;
/**
 * Additional Fields
 * @default {}
 */
    additionalFields?: {
    /** Created by Email
     */
    created_by_email?: string | Expression<string> | PlaceholderValue;
    /** Description
     */
    description?: string | Expression<string> | PlaceholderValue;
    /** Nationality
     */
    nationality?: string | Expression<string> | PlaceholderValue;
    /** Sector
     */
    sector?: string | Expression<string> | PlaceholderValue;
    /** Type
     */
    type?: string | Expression<string> | PlaceholderValue;
    /** User Count
     * @default 0
     */
    usercount?: number | Expression<number>;
  };
};

export type MispV1OrganisationCreateNode = {
  type: 'n8n-nodes-base.misp';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<MispV1OrganisationCreateParams>;
};