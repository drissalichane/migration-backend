/**
 * Freshservice Node - Version 1
 * Discriminator: resource=department, operation=create
 */


interface Credentials {
  freshserviceApi: CredentialReference;
}

/** Create an agent */
export type FreshserviceV1DepartmentCreateParams = {
  resource: 'department';
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
    /** Description
     */
    description?: string | Expression<string> | PlaceholderValue;
    /** Comma-separated email domains associated with the department
     */
    domains?: string | Expression<string> | PlaceholderValue;
  };
};

export type FreshserviceV1DepartmentCreateNode = {
  type: 'n8n-nodes-base.freshservice';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<FreshserviceV1DepartmentCreateParams>;
};