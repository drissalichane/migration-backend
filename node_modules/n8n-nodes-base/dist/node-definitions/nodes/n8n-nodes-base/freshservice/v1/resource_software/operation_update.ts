/**
 * Freshservice Node - Version 1
 * Discriminator: resource=software, operation=update
 */


interface Credentials {
  freshserviceApi: CredentialReference;
}

/** Update an agent */
export type FreshserviceV1SoftwareUpdateParams = {
  resource: 'software';
  operation: 'update';
/**
 * ID of the software application to update
 */
    softwareId?: string | Expression<string> | PlaceholderValue;
/**
 * Update Fields
 * @default {}
 */
    updateFields?: {
    /** Type of the software
     * @default desktop
     */
    application_type?: 'desktop' | 'mobile' | 'saas' | Expression<string>;
    /** Description
     */
    description?: string | Expression<string> | PlaceholderValue;
    /** Name
     */
    name?: string | Expression<string> | PlaceholderValue;
    /** Notes
     */
    notes?: string | Expression<string> | PlaceholderValue;
    /** Status
     * @default managed
     */
    status?: 'disabled' | 'ignored' | 'needs review' | 'restricted' | Expression<string>;
  };
};

export type FreshserviceV1SoftwareUpdateNode = {
  type: 'n8n-nodes-base.freshservice';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<FreshserviceV1SoftwareUpdateParams>;
};