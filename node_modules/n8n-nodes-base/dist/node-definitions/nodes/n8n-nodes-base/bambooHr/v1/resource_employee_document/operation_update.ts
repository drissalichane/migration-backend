/**
 * BambooHR Node - Version 1
 * Discriminator: resource=employeeDocument, operation=update
 */


interface Credentials {
  bambooHrApi: CredentialReference;
}

/** Update an employee */
export type BambooHrV1EmployeeDocumentUpdateParams = {
  resource: 'employeeDocument';
  operation: 'update';
/**
 * Employee ID
 */
    employeeId?: string | Expression<string> | PlaceholderValue;
/**
 * File ID
 */
    fileId?: string | Expression<string> | PlaceholderValue;
/**
 * Update Fields
 * @default {}
 */
    updateFields?: {
    /** ID of the new category of the file. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
     */
    categoryId?: string | Expression<string>;
    /** New name of the file
     */
    name?: string | Expression<string> | PlaceholderValue;
    /** Whether this file is shared or not
     * @default true
     */
    shareWithEmployee?: boolean | Expression<boolean>;
  };
};

export type BambooHrV1EmployeeDocumentUpdateNode = {
  type: 'n8n-nodes-base.bambooHr';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<BambooHrV1EmployeeDocumentUpdateParams>;
};