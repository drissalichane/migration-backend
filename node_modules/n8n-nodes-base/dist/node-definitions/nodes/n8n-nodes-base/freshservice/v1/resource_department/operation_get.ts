/**
 * Freshservice Node - Version 1
 * Discriminator: resource=department, operation=get
 */


interface Credentials {
  freshserviceApi: CredentialReference;
}

/** Retrieve an agent */
export type FreshserviceV1DepartmentGetParams = {
  resource: 'department';
  operation: 'get';
/**
 * ID of the department to retrieve
 */
    departmentId?: string | Expression<string> | PlaceholderValue;
};

export type FreshserviceV1DepartmentGetNode = {
  type: 'n8n-nodes-base.freshservice';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<FreshserviceV1DepartmentGetParams>;
};