/**
 * MISP Node - Version 1
 * Discriminator: resource=organisation, operation=update
 */


interface Credentials {
  mispApi: CredentialReference;
}

export type MispV1OrganisationUpdateParams = {
  resource: 'organisation';
  operation: 'update';
/**
 * ID of the organisation to update
 */
    organisationId?: string | Expression<string> | PlaceholderValue;
/**
 * Update Fields
 * @default {}
 */
    updateFields?: {
    /** Description
     */
    description?: string | Expression<string> | PlaceholderValue;
    /** Name
     */
    name?: string | Expression<string> | PlaceholderValue;
    /** Nationality
     */
    nationality?: string | Expression<string> | PlaceholderValue;
    /** Sector
     */
    sector?: string | Expression<string> | PlaceholderValue;
    /** Type
     */
    type?: string | Expression<string> | PlaceholderValue;
  };
};

export type MispV1OrganisationUpdateNode = {
  type: 'n8n-nodes-base.misp';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<MispV1OrganisationUpdateParams>;
};