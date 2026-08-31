/**
 * Freshservice Node - Version 1
 * Discriminator: resource=department, operation=delete
 */


interface Credentials {
  freshserviceApi: CredentialReference;
}

/** Delete an agent */
export type FreshserviceV1DepartmentDeleteParams = {
  resource: 'department';
  operation: 'delete';
/**
 * ID of the department to delete
 */
    departmentId?: string | Expression<string> | PlaceholderValue;
};

export type FreshserviceV1DepartmentDeleteNode = {
  type: 'n8n-nodes-base.freshservice';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<FreshserviceV1DepartmentDeleteParams>;
};