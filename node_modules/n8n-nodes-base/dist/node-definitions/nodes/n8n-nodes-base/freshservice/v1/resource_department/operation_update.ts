/**
 * Freshservice Node - Version 1
 * Discriminator: resource=department, operation=update
 */


interface Credentials {
  freshserviceApi: CredentialReference;
}

/** Update an agent */
export type FreshserviceV1DepartmentUpdateParams = {
  resource: 'department';
  operation: 'update';
/**
 * ID of the department to update
 */
    departmentId?: string | Expression<string> | PlaceholderValue;
/**
 * Update Fields
 * @default {}
 */
    updateFields?: {
    /** Description
     */
    description?: string | Expression<string> | PlaceholderValue;
    /** Comma-separated email domains associated with the department
     */
    domains?: string | Expression<string> | PlaceholderValue;
    /** Name
     */
    name?: string | Expression<string> | PlaceholderValue;
  };
};

export type FreshserviceV1DepartmentUpdateNode = {
  type: 'n8n-nodes-base.freshservice';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<FreshserviceV1DepartmentUpdateParams>;
};